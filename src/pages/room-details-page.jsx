import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import CustomCalendar from "../components/custom-calendar"
import LeftArrow from "../assets/icons/left-arrow.svg?react"
import allRoomData from "../data/room-data"
import unamused from "../assets/Unamused.png"
import confused from "../assets/Confused.png"
import smileEyes from "../assets/SmileEyes.png"
import happy from "../assets/happy.png"
import sad from "../assets/sad.png"
import PersianDate from "persian-date"

const spotifyPlaylists = {
    خوشحال: "https://open.spotify.com/embed/playlist/7Gqa7bElPSmNWKCpoqrIZW",
    معمولی: "https://open.spotify.com/embed/playlist/45ug7rXWPOMe0PUtAVLa1N",
    مضطرب: "https://open.spotify.com/embed/playlist/6eIMsTkdccQVQuZzF6mwzW",
    ناراحت: "https://open.spotify.com/embed/playlist/0UpgCpXifhnSQ3ZrzO82Se",
    "بی حوصله": "https://open.spotify.com/embed/playlist/61UsjGLT3EKf9zMSuBC2Tl",
}

const moodMessages = {
    خوشحال: "چه عالی که امروز حال خوبی داری! این حس رو با موسیقی و دوستانت به اشتراک بذار!",
    معمولی: "حالت معمولیه؟ با یه آهنگ خوب می‌تونی روزت رو بهتر کنی!",
    مضطرب: "نگران نباش، همه چیز به زودی بهتر می‌شه. نفس عمیق بکش و به خودت زمان بده!",
    ناراحت: "حالت رو درک می‌کنم. یه موسیقی آرامش‌بخش می‌تونه بهت کمک کنه تا آرامشی پیدا کنی.",
    "بی حوصله": "بی‌حوصلگی موقتیه! با این موسیقی  انرژی دوباره به دست بیار!",
}

const RoomDetailPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [room, setRoom] = useState(null)
    const [selectedDate, setSelectedDate] = useState(null)
    const [startTime, setStartTime] = useState("09:00")
    const [endTime, setEndTime] = useState("17:00")
    const [mood, setMood] = useState("")
    const [playlistUrl, setPlaylistUrl] = useState("")
    const [, setAnimationTrigger] = useState(0)
    const [showReservationMessage, setShowReservationMessage] = useState(false)

    useEffect(() => {
        const mockRoom = allRoomData.find((r) => r.id === parseInt(id)) || allRoomData[0]
        const formattedAvailableDates = []
        let pd = new PersianDate()
        const oneYearLater = pd.clone().add(1, "year")

        while (pd.valueOf() <= oneYearLater.valueOf()) {
            const weekDay = pd.day()
            if (weekDay !== 6 && weekDay !== 7) {
                formattedAvailableDates.push(pd.format("YYYY/MM/DD"))
            }
            pd = pd.clone().add(1, "day")
        }

        setRoom({ ...mockRoom, availableDates: formattedAvailableDates })
    }, [id])

    useEffect(() => {
        if (mood) {
            setPlaylistUrl(spotifyPlaylists[mood] || spotifyPlaylists["معمولی"])
            setAnimationTrigger((prev) => prev + 1)
        }
    }, [mood])

    if (!room) return <div>در حال بارگذاری...</div>

    const generateTimeSlots = () => {
        const times = []
        const startHour = parseInt(room.availableTimes.start.split(":")[0])
        const endHour = parseInt(room.availableTimes.end.split(":")[0])
        for (let hour = startHour; hour <= endHour; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                times.push(`${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`)
            }
        }
        return times
    }

    const timeSlots = generateTimeSlots()

    const handleStartTimeChange = (time) => {
        setStartTime(time)
        if (time > endTime) setEndTime(time)
    }

    const handleEndTimeChange = (time) => {
        setEndTime(time)
        if (time < startTime) setStartTime(time)
    }

    const calculateHours = () => {
        const startIndex = timeSlots.indexOf(startTime)
        const endIndex = timeSlots.indexOf(endTime)
        if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) return 0
        return (endIndex - startIndex + 1) / 2
    }

    const priceMatch = room.price.match(/\d+/)
    const hourlyRate = priceMatch ? parseInt(priceMatch[0].replace(",", "")) : 135000
    const totalHours = calculateHours()
    const totalCost = totalHours * hourlyRate

    const handleCompleteReservation = () => {
        if (selectedDate && startTime && endTime) {
            setShowReservationMessage(true)
            const reservation = { roomImage: room.image, date: selectedDate, startTime, endTime, totalCost, mood }
            localStorage.setItem("lastReservation", JSON.stringify(reservation))
            setTimeout(() => {
                navigate("/user-profile", { state: { reservation } })
            }, 1500)
        }
    }

    return (
        <div className="dark:bg-[#251D16] bg-[#FDF6F0] min-h-screen relative overflow-x-hidden">
            {showReservationMessage && <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#ED8F44] text-black text-2xl border-2 border-black px-12 py-6 rounded-lg z-50 animate-fade">رزرو شما ثبت شد!!</div>}
            <div className="flex justify-end">
                <Link to="/myroom" className="flex justify-end items-center my-3 lg:my-10 text-3xl text-[#ED8F44]">
                    بازگشت
                    <LeftArrow className="flex mr-2" />
                </Link>
            </div>
            <div className="flex flex-col lg:flex-row justify-between mx-2 lg:mx-[30px] items-center">
                <div className="text-right w-full lg:w-auto">
                    <h1 className="text-3xl font-bold text-[#8D5215] dark:text-[#DF7F1D]">{room.title}</h1>
                    <p className="dark:text-white mt-4 text-xl opacity-70">{room.description}</p>
                    <p className="text-2xl font-semibold text-[#ED8F44] mt-4">ساعتی {room.price}</p>
                    <p className="mt-4 dark:text-white">آدرس : واقع در باوانا (خیابان عطار فرعی 5 غربی)</p>
                </div>
                <img src={room.image} alt={room.title} className="w-full lg:w-[690px] h-[250px] lg:h-[490px] object-cover rounded-lg mt-4 lg:mt-0" />
            </div>

            <div className="p-2 lg:p-8 mt-4 lg:mt-12">
                <div className="bg-[#FBD2B0] w-full rounded-3xl h-[70px] flex justify-between items-center mb-4 lg:mb-8 px-2 lg:px-4">
                    <div className="flex items-center gap-2">
                        <span className="rounded-full w-5 h-5 bg-[#ED8F44]"></span>
                        <h2 className="hidden lg:flex text-2xl font-bold text-[#8D5215] dark:text-black">انتخاب اولین تاریخ خالی</h2>
                        <h2 className="lg:hidden text-xs font-bold text-[#8D5215] dark:text-black">تاریخ</h2>
                    </div>
                    <div className="flex gap-1 lg:gap-6">
                        <div className="flex gap-2 items-center">
                            <span className="bg-[#1BC300] rounded-full w-3 h-3"></span>
                            <span className="text-xs lg:text-xl">قابل رزرو</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="bg-[#A9A9A9] rounded-full w-3 h-3"></span>
                            <span className="text-xs lg:text-xl">غیر فعال</span>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className="bg-[#FF0000] rounded-full w-3 h-3"></span>
                            <span className="text-xs lg:text-xl">پر شده</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <CustomCalendar availableDates={room.availableDates} selectedDate={selectedDate} onDateSelect={setSelectedDate} />
                </div>
            </div>
            <div className="p-2 lg:p-8 flex flex-col items-center justify-center">
                <div className="bg-[#FBD2B0] w-full rounded-3xl h-[70px] flex justify-between items-center mb-4 lg:mb-8 px-2 lg:p-4">
                    <div className="flex items-center gap-2">
                        <span className="rounded-full w-5 h-5 bg-[#ED8F44]"></span>
                        <h2 className="text-lg sm:text-xl font-bold text-[#8D5215] dark:text-black">انتخاب ساعت</h2>
                    </div>
                </div>
                <div className="lg:pb-5 lg:px-3 lg:dark:bg-[#FDDEC3] lg:rounded-3xl">
                    <h2 className="text-xl sm:text-lg md:text-xl font-bold text-[#8D5215] dark:text-[#DF7F1D] pb-2 pt-2 rounded-t-3xl pr-2">ساعت شروع</h2>
                    <div className="overflow-x-auto whitespace-nowrap pb-2 lg:rounded-b-xl dark:bg-[#FDDEC3] scrollbar-hide flex flex-wrap justify-start">
                        {timeSlots.map((time) => (
                            <button key={time} onClick={() => handleStartTimeChange(time)} className={`inline-block px-2 sm:px-3 py-1 mx-1 rounded-lg border-2 text-center text-xs sm:text-sm ${startTime === time ? "bg-[#ED8F44] text-white border-[#ED8F44]" : "bg-white border-gray-300 text-[#8D5215]"}`}>
                                {time}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="lg:pb-5 lg:px-3 lg:dark:bg-[#FDDEC3] lg:rounded-3xl mt-4">
                    <h2 className="text-xl sm:text-lg md:text-xl font-bold text-[#8D5215] dark:text-[#DF7F1D] pb-2 pt-2 rounded-t-3xl pr-2 dark:bg-[#FDDEC3]">ساعت پایان</h2>
                    <div className="overflow-x-auto whitespace-nowrap pb-2 scrollbar-hide flex flex-wrap justify-start rounded-b-3xl pt-2 dark:bg-[#FDDEC3]">
                        {timeSlots.map((time) => (
                            <button key={time} onClick={() => handleEndTimeChange(time)} className={`inline-block px-2 sm:px-3 py-1 mx-1 rounded-lg border-2 text-center text-xs sm:text-sm ${endTime === time ? "bg-[#ED8F44] text-white border-[#ED8F44]" : "bg-white border-gray-300 text-[#8D5215]"}`}>
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="p-2 lg:p-8 dark:bg-[#FDDEC3] rounded-4xl">
                <h2 className="text-xl sm:text-lg md:text-xl font-bold text-[#8D5215] dark:text-[#DF7F1D] mb-2">حال و هوای شما</h2>
                <div className="flex flex-wrap gap-2 justify-center">
                    {["خوشحال", "معمولی", "مضطرب", "ناراحت", "بی حوصله"].map((m) => {
                        const moodImages = { خوشحال: happy, معمولی: smileEyes, مضطرب: confused, ناراحت: sad, "بی حوصله": unamused }
                        return (
                            <label key={m} className="cursor-pointer flex flex-col items-center sm:mx-1 md:mx-2 border-2 rounded-lg p-2">
                                <input type="radio" name="mood" value={m} onChange={(e) => setMood(e.target.value)} className="hidden" />
                                <img src={moodImages[m]} alt={m} className="w-10 sm:w-8 md:w-12 h-10 sm:h-8 md:h-12 mb-1" />
                                <span className={`px-2 py-1 sm:px-1 sm:py-0.5 md:px-2 md:py-1 text-center text-xs sm:text-xs md:text-sm rounded-lg ${mood === m ? "border-[#ED8F44] bg-[#ED8F44]/20" : "border-gray-300"} transition-all`}>{m}</span>
                            </label>
                        )
                    })}
                </div>
            </div>

            {mood && (
                <div className="p-2 lg:p-8 mt-2 lg:mt-4">
                    <p className="text-lg text-[#8D5215] dark:text-[#8d5013] bg-[#FBD2B0] p-2 rounded-lg pulse">{moodMessages[mood]}</p>
                </div>
            )}

            {playlistUrl && (
                <div className="p-2 lg:p-8">
                    <h2 className="text-xl sm:text-lg md:text-xl font-bold text-[#8D5215] dark:text-[#DF7F1D] mb-2">پلی‌لیست پیشنهادی برای {mood}</h2>
                    <iframe src={playlistUrl} width="100%" height="200" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className="rounded-lg" />
                </div>
            )}

            {(selectedDate || startTime || endTime) && (
                <div className="p-2 lg:p-8 text-center">
                    <button onClick={handleCompleteReservation} className="bg-[#ED8F44] text-white px-4 py-2 rounded-lg text-lg hover:bg-[#D77A3A] transition cursor-pointer">
                        تکمیل رزرو
                    </button>
                    <p className="mt-2 text-lg text-[#8D5215]">هزینه کل: {totalCost.toLocaleString()} تومان</p>
                </div>
            )}
        </div>
    )
}

export default RoomDetailPage
