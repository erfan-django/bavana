import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import UserIcon from "../assets/icons/user.svg?react"
import Exit from "../assets/icons/exit.svg?react"
import usePlaylist from "./useplaylist"

const AuthButtons = ({ isAuthenticated, setIsAuthenticated, user, setUser }) => {
    const [isHovering, setIsHovering] = useState(false)
    const [reservation, setReservation] = useState(null)
    const navigate = useNavigate()

    const { isPlaylistVisible, setIsPlaylistVisible, setCurrentMood, setPlaylistUrl } = usePlaylist()

    useEffect(() => {
        if (isAuthenticated) {
            const savedReservation = localStorage.getItem("lastReservation")
            if (savedReservation) {
                const parsed = JSON.parse(savedReservation)
                setReservation(parsed)

                const mood = parsed.mood
                setCurrentMood(mood)

                const urlMap = {
                    خوشحال: "https://open.spotify.com/embed/playlist/7Gqa7bElPSmNWKCpoqrIZW",
                    معمولی: "https://open.spotify.com/embed/playlist/45ug7rXWPOMe0PUtAVLa1N",
                    مضطرب: "https://open.spotify.com/embed/playlist/6eIMsTkdccQVQuZzF6mwzW",
                    ناراحت: "https://open.spotify.com/embed/playlist/0UpgCpXifhnSQ3ZrzO82Se",
                    "بی حوصله": "https://open.spotify.com/embed/playlist/61UsjGLT3EKf9zMSuBC2Tl",
                }

                setPlaylistUrl(urlMap[mood] || "")
            }
        }
    }, [isAuthenticated, setCurrentMood, setPlaylistUrl])

    const handleLogout = () => {
        setIsAuthenticated(false)
        setUser(null)
        localStorage.removeItem("isAuthenticated")
        localStorage.removeItem("user")
        localStorage.removeItem("lastReservation")
        setReservation(null)
        setIsPlaylistVisible(false)
        navigate("/")
    }

    const handleCancelReservation = () => {
        localStorage.removeItem("lastReservation")
        setReservation(null)
        setIsPlaylistVisible(false)
        navigate("/")
    }

    const togglePlaylist = () => {
        setIsPlaylistVisible(!isPlaylistVisible)
    }

    return (
        <div className="relative flex justify-center items-center lg:w-[120px] xl:w-[190px] 3xl:w-[290px] h-[50px] lg:ml-3 lg:pl-3.5 lg:mr-10">
            {isAuthenticated ? (
                <div className="relative flex flex-col items-center group" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                    <button className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#ED8F44] text-white dark:text-[#251D16]">
                        <UserIcon width={24} height={24} />
                    </button>
                    {isHovering && (
                        <div className=" absolute w-[400px] flex flex-col lg:top-[50px] lg:right-0 bg-[#FFF3DD] dark:bg-[#251D16] shadow-lg rounded-[20px] p-6 text-right z-10 justify-center items-center">
                            <p className="text-lg mt-[20px] mx-[14px] px-3 p-2 text-black dark:text-white rounded-[20px] bg-white">{user?.name || "کاربر"}</p>
                            <p className="text-sm mt-[20px] mx-[14px] px-3 p-2 text-[#4D2B09] dark:text-white/70 rounded-[20px] bg-white">{user?.email || "ایمیل"}</p>
                            <p className="mt-4 text-lg font-semibold">آخرین رزرو:</p>
                            {reservation ? (
                                <div className="mt-2 space-y-2 flex flex-col text-center">
                                    <p>
                                        <strong>تاریخ:</strong> {reservation.date}
                                    </p>
                                    <p>
                                        <strong>ساعت شروع:</strong> {reservation.startTime}
                                    </p>
                                    <p>
                                        <strong>ساعت پایان:</strong> {reservation.endTime}
                                    </p>
                                    <p>
                                        <strong>هزینه کل:</strong> {reservation.totalCost.toLocaleString()} تومان
                                    </p>
                                    <p>
                                        <strong>مود:</strong> {reservation.mood}
                                    </p>
                                </div>
                            ) : (
                                <p className="text-gray-500 dark:text-gray-400">هیچ رزرو فعالی وجود ندارد.</p>
                            )}
                            <div className="flex items-center justify-center">
                                <button onClick={handleCancelReservation} className="text-[#ED8F44] hover:underline cursor-pointer hover:text-red-700 hover:border-red-700 border-2 border-[#ED8F44] px-3 py-2 mt-3 rounded-3xl">
                                    لغو رزرو
                                </button>
                            </div>
                            <p className="mt-4">پیشنهاد آهنگت</p>
                            <button onClick={togglePlaylist} className="text-[#ED8F44] hover:underline mt-2">
                                {isPlaylistVisible ? "بستن پلی‌لیست" : "نمایش پلی‌لیست"}
                            </button>
                            <button onClick={handleLogout} className="flex cursor-pointer gap-2 hover:text-red-600 mt-[20px] w-full text-2xl text-[#ED8F44] py-2 rounded-[30px]">
                                <Exit />
                                خروج
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="rounded-[60px] bg-[#ED8F44] shadow-amber-600 hover:shadow-xl/20">
                    <Link to="/login" className="flex justify-center items-center w-[120px] xl:w-[190px] 3xl:w-[290px] h-[50px] text-white dark:text-[#251D16] px-2 py-1 text-lg xl:text-xl 3xl:text-2xl transition-all duration-200">
                        ورود | ثبت‌نام
                    </Link>
                </div>
            )}
        </div>
    )
}

export default AuthButtons
