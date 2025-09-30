import { useState, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../components/auth-context"
import gallery1 from "../assets/header-gallery-1.png"
import gallery2 from "../assets/header-gallery-2.png"
import gallery3 from "../assets/header-gallery-3.png"
import gallery4 from "../assets/header-gallery-4.png"
import headerline1 from "../assets/headerline1.png"
import headerline2 from "../assets/headerline2.png"
import headerline3 from "../assets/headerline3.png"
import redhairlady from "../assets/red-haired-lady.png"
import redhairladybg from "../assets/red-haired-lady-bg.png"
import redhairladybgdark from "../assets/red-haired-lady-bg-dark.png"
import card1 from "../assets/card-1.png"
import LeftArrow from "../assets/icons/left-arrow.svg?react"
import bgcomments from "../assets/bg-comments.png"
import bgcommentsdark from "../assets/bg-comments-dark.png"
import userpfpcomment from "../assets/userpfp-comment.png"
import layer0 from "../assets/layer0.png"
import layer1 from "../assets/layer1.png"
import layer2 from "../assets/layer2.png"
import allRoomData from "../data/room-data"

const HomePage = () => {
    const { isAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)

    const handleRoomClick = (roomId) => {
        if (!isAuthenticated) {
            setShowModal(true)
            setTimeout(() => {
                setShowModal(false)
                navigate("/login", { state: { from: `/room/${roomId}` } })
            }, 1000)
        } else {
            navigate(`/room/${roomId}`)
        }
    }

    const handleViewAll = () => {
        navigate("/myroom")
    }

    //    GET one room from every catagory to show in home page
    const uniqueRooms = allRoomData.reduce((acc, room) => {
        if (!acc[room.type]) {
            acc[room.type] = room
        }
        return acc
    }, {})

    return (
        <div>
            {showModal && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-[#251D16] p-6 rounded-lg shadow-lg text-center">
                        <p className="text-lg text-[#8D5215] dark:text-[#DF7F1D]">ابتدا باید وارد شوید</p>
                    </div>
                </div>
            )}
            <div className="flex p-4 justify-evenly lg:flex-row flex-col">
                <div>
                    <h1 className="lg:text-5xl/relaxed lg:w-[417px] font-bold text-[#8D5215] dark:text-[#DF7F1D] mb-6 pt-9">مطالعه ای متفاوت با حال و هوای دلخواه تو</h1>
                    <p className="dark:text-white lg:w-[523px] lg:text-2xl/relaxed text-lg text-justify">باوانا، اولین سامانه هوشمند رزرواسیون فضای مطالعه که با درک حال و هوای لحظه‌ای شما، نه‌تنها فضای مناسب برای تمرکزتان فراهم می‌کند، بلکه با پخش موسیقی متناسب با احساس‌تان، همراهی دلنشین برای لحظه‌های یادگیری شماست.</p>
                    <div className="lg:mt-10 items-center justify-center mt-2 flex gap-5">
                        <Link to="contact-us" className="bg-[#A16C4B] px-[48px] py-[14px] rounded-[20px] text-sm lg:text-xl text-white cursor-pointer">
                            ارتباط با ما
                        </Link>
                        <Link to="myroom" className="border-[#A16C4B] border-2 px-[12px] py-[14px] rounded-[20px] text-sm lg:text-xl text-[#A16C4B] cursor-pointer">
                            رزرو فضای مطالعه
                        </Link>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-[10px] mt-4 mb-9">
                    <div className="flex flex-col gap-[10px]">
                        <img src={gallery2} alt="gallery" className="hidden lg:flex lg:h-[166px] lg:w-[300px]" />
                        <img src={gallery3} alt="gallery" className="hidden lg:flex lg:h-[166px] lg:w-[300px]" />
                    </div>
                    <img src={gallery1} alt="gallery" className="hidden lg:flex lg:w-[301px] lg:h-[341px]" />
                    <img src={gallery4} alt="gallery" className="lg:w-[653px] lg:h-[239px] col-span-2" />
                </div>
            </div>
            <div className="flex gap-1 mb-[82px]">
                <div className="flex justify-between items-center lg:px-3 bg-[#F4A261] lg:h-[176px] lg:w-[477px] shadow-lg/40">
                    <span className="text-white dark:text-[#251D16] text-sm lg:text-4xl font-bold">کاهش حس تنهایی</span>
                    <img src={headerline1} className="w-10 h-10 lg:h-fit lg:w-fit mt-[20px]" />
                </div>
                <div className="flex justify-evenly items-center px-3 bg-[#F4A261] lg:h-[176px] lg:w-[477px] shadow-lg/40">
                    <span className="text-white dark:text-[#251D16] text-sm lg:text-4xl font-bold">ایجاد انگیزه</span>
                    <img src={headerline2} className="w-10 h-10 lg:w-fit lg:h-fit mt-[20px]" />
                </div>
                <div className="flex justify-evenly items-center px-3 bg-[#F4A261] lg:h-[176px] lg:w-[477px] shadow-lg/40">
                    <span className="text-white text-center dark:text-[#251D16] text-sm lg:text-4xl/relaxed font-bold">پیشنهاد روش مطالعه</span>
                    <img src={headerline3} className="w-10 h-10 lg:h-fit lg:w-fit mt-[20px]" />
                </div>
            </div>
            <div className="lg:flex justify-evenly items-center mb-[121px] hidden">
                <span className="playbtn rounded-[60px] text-white dark:text-[#251D16] text-2xl bg-[#F4A261] dark:bg-[#DF7F1D] py-6 px-[80px] relative overflow-hidden">
                    <span className="absolute block top-0 left-0 w-full h-[10px]"></span>
                    <span className="absolute block top-[-100%] right-0 w-[10px] h-full"></span>
                    <span className="absolute block bottom-0 right-0 w-full h-[10px]"></span>
                    <span className="absolute block bottom-[-100%] left-0 w-[10px] h-full"></span>
                    صندلی اشتراکی
                </span>
                <span className="playbtn rounded-[60px] text-white dark:text-[#251D16] text-2xl bg-[#F4A261] dark:bg-[#DF7F1D] py-6 px-[80px] relative overflow-hidden">
                    <span className="absolute block top-0 left-0 w-full h-[10px]"></span>
                    <span className="absolute block top-[-100%] right-0 w-[10px] h-full"></span>
                    <span className="absolute block bottom-0 right-0 w-full h-[10px]"></span>
                    <span className="absolute block bottom-[-100%] left-0 w-[10px] h-full"></span>
                    اتاق جلسه
                </span>
                <span className="playbtn rounded-[60px] text-white dark:text-[#251D16] text-2xl bg-[#F4A261] dark:bg-[#DF7F1D] py-6 px-[80px] relative overflow-hidden">
                    <span className="absolute block top-0 left-0 w-full h-[10px]"></span>
                    <span className="absolute block top-[-100%] right-0 w-[10px] h-full"></span>
                    <span className="absolute block bottom-0 right-0 w-full h-[10px]"></span>
                    <span className="absolute block bottom-[-100%] left-0 w-[10px] h-full"></span>
                    دفتر اختصاصی
                </span>
                <span className="playbtn rounded-[60px] text-white dark:text-[#251D16] text-2xl bg-[#F4A261] dark:bg-[#DF7F1D] py-6 px-[80px] relative overflow-hidden">
                    <span className="absolute block top-0 left-0 w-full h-[10px]"></span>
                    <span className="absolute block top-[-100%] right-0 w-[10px] h-full"></span>
                    <span className="absolute block bottom-0 right-0 w-full h-[10px]"></span>
                    <span className="absolute block bottom-[-100%] left-0 w-[10px] h-full"></span>
                    همه فضاها
                </span>
            </div>
            <div className="flex mb-10 flex-col lg:flex-row">
                <div className="flex flex-col gap-5 mr-9">
                    <h2 className="lg:text-3xl text-xl mb-5 mr-1 font-normal md:text-nowrap dark:text-[#DF7F1D]">همین حالا حس خوبتو پیدا کن و شروع کن به مطالعه!</h2>
                    <div className="flex items-center gap-4">
                        <span className="bg-[#5C4033] dark:bg-[#DF7F1D] h-5 w-5 rounded-full"></span>
                        <p className="text-lg lg:text-2xl font-normal dark:text-white">موزیکی که به حال دلت میخوره اینجاست</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="bg-[#5C4033] dark:bg-[#DF7F1D] h-5 w-5 rounded-full"></span>
                        <p className="text-lg lg:text-2xl font-normal dark:text-white">با حس خوب شروع کن به ساختن خودت</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="bg-[#5C4033] dark:bg-[#DF7F1D] h-5 w-5 rounded-full"></span>
                        <p className="text-lg lg:text-2xl font-normal dark:text-white">اتاق مخصوص تو، برای تمرکز واقعی</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="bg-[#5C4033] dark:bg-[#DF7F1D] h-5 w-5 rounded-full"></span>
                        <p className="text-lg lg:text-2xl font-normal dark:text-white">بدون تلف کردن وقت سریع رزرو کن</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="bg-[#5C4033] dark:bg-[#DF7F1D] h-5 w-5 rounded-full"></span>
                        <p className="text-lg lg:text-2xl font-normal dark:text-white">آروم شو، گوش بده، درس بخون</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="bg-[#5C4033] dark:bg-[#DF7F1D] h-5 w-5 rounded-full"></span>
                        <p className="text-lg lg:text-2xl font-normal dark:text-white">حستو انتخاب کن حالتو بساز</p>
                    </div>
                </div>
                <div className="relative w-full flex justify-center mt-5 lg:mt-0">
                    <img src={redhairladybg} alt="red-hair-lady-bg" className="object-cover dark:hidden" />
                    <img src={redhairladybgdark} alt="red-hair-lady-bg" className="object-cover dark:block hidden" />
                    <img src={redhairlady} alt="red-hair-lady" className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] md:w-[50%]" />
                </div>
            </div>
            <div className="flex flex-col items-center mb-7">
                <div className="lg:w-[90%] flex lg:mx-[42px] justify-center lg:my-8 lg:items-baseline mx-3 lg:justify-between gap-2">
                    <h2 className="mb-5 mr-4 text-xl lg:text-3xl dark:text-[#DF7F1D]">کجا دوست داری مطالعه کنی؟</h2>
                    <a onClick={handleViewAll} className="lg:flex hidden items-center dark:bg-[#DF7F1D] text-white dark:text-[#251D16] bg-[#A16C4B] rounded-[20px] lg:px-5 lg:py-4 cursor-pointer hover:bg-[#cb8458] text-lg lg:text-2xl">
                        مشاهده همه
                        <LeftArrow />
                    </a>
                </div>
                <div className="flex flex-wrap lg:justify-between justify-center items-center gap-[30px] mx-[42px] mb-6">
                    {Object.values(uniqueRooms).map((room) => (
                        <div key={room.id} className="cursor-pointer hover:shadow-lg/30 flex flex-col rounded-[50px] border-2 border-[#5C4033] dark:border-[#DF7F1D] lg:w-[432px] h-[260px] w-[222px] lg:h-[437px]">
                            <img src={room.image || card1} alt={room.title} className="px-3 py-3" />
                            <div className="flex justify-between mr-3 ml-[35px]">
                                <span className="lg:text-2xl text-sm dark:text-[#DF7F1D]">{room.title}</span>
                                <div className="flex gap-3 items-center justify-between"></div>
                            </div>
                            <div className="flex items-center justify-between mx-3 mt-2 lg:mx-[46px]">
                                <span className="flex text-xs px-1 py-1.5 rounded-xl bg-[#FBC9A2] lg:py-[3px] lg:px-1 opacity-60">{room.price}</span>
                                <a onClick={() => handleRoomClick(room.id)} className="justify-center rounded-xl px-1 py-1 lg:py-[3px] lg:px-1.5 flex bg-[#F4A261] cursor-pointer">
                                    <span className="flex justify-center items-center text-xs text-white dark:text-[#251D16]">رزرو آنلاین</span>
                                    <LeftArrow className="text-[#ED8F44] dark:text-[#251D16]" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <a onClick={handleViewAll} className="flex text-center lg:hidden w-[120px] items-center justify-center dark:bg-[#DF7F1D] text-white dark:text-[#251D16] bg-[#A16C4B] rounded-[20px] px-1 py-1 lg:px-5 lg:py-4 cursor-pointer hover:bg-[#cb8458] text-xs lg:text-2xl">
                    مشاهده همه
                    <LeftArrow />
                </a>
            </div>
            <div className="lg:flex hidden mx-[70px] relative">
                <h3 className="absolute right-1/6 -translate-x-1/2 flex justify-center lg:text-3xl text-sm pb-1 z-20 dark:text-[#DF7F1D]">نظرات همراهان</h3>
                <img src={bgcomments} alt="Background-Comments" className="w-[320px] h-[330px] lg:w-full lg:h-auto object-cover relative z-0 dark:hidden" />
                <img src={bgcommentsdark} alt="Background-Comments" className="w-[320px] h-[330px] lg:w-full lg:h-auto object-cover relative z-0 dark:block hidden" />
                <div className="absolute mr-10 lg:mt-[150px] top-[80px] lg:w-[410px] flex flex-col gap-1">
                    <p className="text-white text-sm lg:text-3xl dark:text-[#251D16]">در مورد باوانا چه میشنویم؟</p>
                    <p className="text-white text-sm lg:text-xl  text-justify dark:text-[#251D16]">این‌ها تنها بخش کوچکی از نظراتی هستند که افراد مختلف از میزبانان و کارکنان در مورد باوانا ابراز کرده‌اند</p>
                </div>
                <div className="absolute lg:top-[80px] lg:left-[50px] lg:w-[538px] lg:h-[389px]">
                    <img src={layer0} alt="bg-layer" className="absolute z-10 translate-x-16 translate-y-16 lg:flex hidden" />
                    <img src={layer1} alt="bg-layer" className="absolute z-20 translate-x-9 translate-y-9 lg:flex hidden" />
                    <img src={layer2} alt="bg-layer" className="absolute z-30 translate-x-0 translate-y-0 lg:flex hidden" />
                    <div className="absolute z-40 mt-10 mr-10">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-10">
                                <img src={userpfpcomment} alt="User-Profile" className="rounded-full" />
                                <p className="lg:text-2xl text-sm">آیدا محمدی</p>
                            </div>
                            <p className="text-sm lg:text-3xl/relaxed lg:w-[84%] mt-[22px] text-justify">دوست داشتم حس و حالم رو بگم و یک موزیک بگیرم! خیلی خیلی حس خوبی بود، تازه انگیزه گرفتم بخونم</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
