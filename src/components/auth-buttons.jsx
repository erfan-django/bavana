import { useState, useEffect, useContext } from "react"
import { useNavigate, Link } from "react-router-dom"
import { AuthContext } from "../components/auth-context"
import UserIcon from "../assets/icons/user.svg?react"
import Exit from "../assets/icons/exit.svg?react"
import usePlaylist from "./useplaylist"

const AuthButtons = () => {
    const { isAuthenticated, user, logout } = useContext(AuthContext)
    const [isHovering, setIsHovering] = useState(false)
    //  for desktopp
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    //  for mobile
    const [reservation, setReservation] = useState(null)
    const navigate = useNavigate()

    const { isPlaylistVisible, setIsPlaylistVisible, currentMood, playlistUrl, setCurrentMood, setPlaylistUrl } = usePlaylist()

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

    const handleCancelReservation = () => {
        localStorage.removeItem("lastReservation")
        setReservation(null)
        setIsPlaylistVisible(false)
        setIsMenuOpen(false)
        navigate("/")
    }

    const togglePlaylist = () => {
        setIsPlaylistVisible(!isPlaylistVisible)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = (e) => {
        if (e.target === e.currentTarget) {
            setIsMenuOpen(false)
        }
    }

    return (
        <div className="relative flex justify-center items-center lg:w-[120px] xl:w-[190px] 3xl:w-[290px] w-[50px] h-[50px] lg:ml-3 lg:pl-3.5 lg:mr-10 ml-2 mr-2">
            {isAuthenticated ? (
                <>
                    {/* دسکتاپ - هاور */}
                    <div className="hidden lg:flex relative flex-col items-center group" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                        <button className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#ED8F44] text-white dark:text-[#251D16]">
                            <UserIcon width={24} height={24} />
                        </button>
                        {isHovering && (
                            <div className="absolute w-[330px] flex shadow-amber-200 flex-col lg:top-[50px] lg:right-0 bg-[#FFF3DD] border-2 dark:border-[#ED8F44] dark:bg-[#251D16] shadow-lg rounded-[20px] p-6 text-right z-10 justify-center items-center">
                                <p className="text-lg mt-[20px] mx-[14px] px-3 p-2 text-black  rounded-[20px]  dark:text-black dark:bg-[#FDDEC3] bg-white">{user?.name || "کاربر"}</p>
                                <p className="text-sm mt-[20px] mx-[14px] px-3 p-2 text-[#4D2B09]  rounded-[20px] dark:text-black dark:bg-[#FDDEC3] bg-white">{user?.email || "ایمیل"}</p>
                                <p className="mt-4 text-lg lg:text-2xl dark:text-[#FAC7C7] font-semibold">آخرین رزرو:</p>
                                {reservation ? (
                                    <div className="mt-2 space-y-2 flex flex-col text-center [&>*]:dark:text-black [&>*]:p-2 [&>*]:bg-[#FDDEC3] [&>*]:rounded-xl">
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
                                    <p className="text-gray-500 dark:text-[#FAC7C7]">هیچ رزرو فعالی وجود ندارد.</p>
                                )}
                                <div className="flex items-center justify-center">
                                    <button onClick={handleCancelReservation} className="text-[#ED8F44] hover:underline cursor-pointer lg:text-2xl hover:text-red-700 hover:border-red-700 border-2 border-[#ED8F44] px-3 py-2 lg:p-3 hover:bg-white mt-3 rounded-3xl">
                                        لغو رزرو
                                    </button>
                                </div>
                                <p className="mt-4 text-lg font-semibold dark:text-[#FAC7C7]">پیشنهاد آهنگت</p>
                                <button onClick={togglePlaylist} className="text-[#ED8F44] border-[#ED8F44] dark:border-white border-[1px] dark:hover:border-[#ED8F44] hover:border-[#FAC7C7] rounded-lg p-2 mt-2 cursor-pointer ">
                                    {isPlaylistVisible ? "بستن پلی‌لیست" : "نمایش پلی‌لیست"}
                                </button>
                                <button onClick={logout} className="flex cursor-pointer gap-2 hover:text-red-600 mt-[20px] w-full text-2xl text-[#ED8F44] py-2 rounded-[30px]">
                                    <Exit /> خروج
                                </button>
                            </div>
                        )}
                    </div>

                    {/*  Mobile Modal */}
                    <div className="flex lg:hidden">
                        <button onClick={toggleMenu} className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-[#ED8F44] text-white dark:text-[#251D16]">
                            <UserIcon width={24} height={24} />
                        </button>

                        {isMenuOpen && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeMenu}>
                                <div className="bg-[#FFF3DD] dark:bg-[#251D16] w-full h-full p-6 text-right shadow-lg overflow-y-auto relative">
                                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-[#ED8F44] hover:text-red-700 text-3xl">
                                        ×
                                    </button>
                                    <p className="text-lg mt-10 mx-2 px-3 p-2 text-black dark:text-white rounded-[20px] bg-white">{user?.name || "کاربر"}</p>
                                    <p className="text-sm mt-4 mx-2 px-3 p-2 text-[#4D2B09] dark:text-white/70 rounded-[20px] bg-white">{user?.email || "ایمیل"}</p>
                                    <p className="mt-6 text-lg font-semibold">آخرین رزرو:</p>
                                    {reservation ? (
                                        <div className="mt-4 space-y-2 flex flex-col text-center">
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
                                        <p className="text-gray-500 dark:text-gray-400 mt-2">هیچ رزرو فعالی وجود ندارد.</p>
                                    )}
                                    <div className="flex items-center justify-center">
                                        <button onClick={handleCancelReservation} className="text-[#ED8F44] hover:underline cursor-pointer hover:text-red-700 hover:border-red-700 border-2 px-3 py-2 mt-4 rounded-3xl">
                                            لغو رزرو
                                        </button>
                                    </div>

                                    {/*  iframe for spotify */}
                                    {playlistUrl && (
                                        <div className="mt-6">
                                            <iframe src={`${playlistUrl}?autoplay=1`} width="100%" height="200" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className="rounded-lg" title={`Playlist for ${currentMood}`} />
                                        </div>
                                    )}

                                    <button onClick={logout} className="flex cursor-pointer gap-2 hover:text-red-600 mt-6 w-full text-2xl text-[#ED8F44] py-2 rounded-[30px]">
                                        <Exit /> خروج
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                <div className="rounded-[60px] bg-[#ED8F44] shadow-amber-600 hover:shadow-xl/20 w-[120px] lg:w-[160px] max-md:px-2 xl:w-[190px] 3xl:w-[290px]">
                    <Link to="/login" className="flex justify-center items-center w-full h-[50px] text-white dark:text-[#251D16] px-2 py-1 text-xs lg:text-lg xl:text-xl 3xl:text-2xl transition-all duration-200">
                        ورود | ثبت‌نام
                    </Link>
                </div>
            )}
        </div>
    )
}

export default AuthButtons
