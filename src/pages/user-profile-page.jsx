import { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import LeftArrow from "../assets/icons/left-arrow.svg?react"
import Skeleton from "../components/common/skeleton"

const UserProfilePage = () => {
    const { state } = useLocation()
    const reservation = state?.reservation || {}
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 400)
        return () => clearTimeout(timer)
    }, [])

    if (loading) return (
        <div className="dark:bg-[#251D16] bg-[#FDF6F0] min-h-screen p-8">
            <div className="flex justify-end mb-6">
                <Skeleton className="w-20 h-8" />
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="bg-[#FBD2B0]/50 p-6 rounded-lg space-y-4">
                    <Skeleton className="w-1/3 h-6 mx-auto" />
                    <div className="flex flex-col lg:flex-row gap-6">
                        <Skeleton className="w-full lg:w-1/2 h-48 rounded-lg" />
                        <div className="w-full lg:w-1/2 space-y-4">
                            {Array.from({ length: 5 }).map((_, i) => <Skeleton key={i} className="w-full h-10" />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="dark:bg-[#251D16] bg-[#FDF6F0] min-h-screen">
            <div className="flex justify-end ml-4 sm:ml-8 lg:ml-28">
                <Link to="/" className="flex justify-end items-center my-6 sm:my-8 lg:my-10 text-2xl sm:text-3xl text-[#ED8F44]">
                    بازگشت
                    <LeftArrow className="flex mr-2 w-5 sm:w-6 lg:w-7" />
                </Link>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto">
                {reservation.date ? (
                    <div className="bg-[#FBD2B0] p-4 sm:p-6 lg:p-6 rounded-lg shadow-xl">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#8D5215] mb-4 text-center">جزئیات رزرو</h2>
                        <div className="flex flex-col sm:flex-col lg:flex-row sm:mx-4 lg:mx-20 justify-between items-center gap-4">
                            <div className="w-full lg:w-1/2">
                                <img src={reservation.roomImage} alt="Room" className="w-full h-40 sm:h-44 lg:h-48 object-cover rounded-lg mt-2" />
                            </div>
                            <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
                                <p className="text-sm sm:text-base lg:text-lg flex flex-col sm:flex-row sm:gap-3 lg:gap-5 py-2 sm:py-3 lg:py-5 border-b-2 border-[#ED8F44]">
                                    <strong className="mb-1 sm:mb-0">تاریخ:</strong> {reservation.date}
                                </p>
                                <p className="text-sm sm:text-base lg:text-lg flex flex-col sm:flex-row sm:gap-3 lg:gap-5 py-2 sm:py-3 lg:py-5 border-b-2 border-[#ED8F44]">
                                    <strong className="mb-1 sm:mb-0">ساعت شروع:</strong> {reservation.startTime}
                                </p>
                                <p className="text-sm sm:text-base lg:text-lg flex flex-col sm:flex-row sm:gap-3 lg:gap-5 py-2 sm:py-3 lg:py-5 border-b-2 border-[#ED8F44]">
                                    <strong className="mb-1 sm:mb-0">ساعت پایان:</strong> {reservation.endTime}
                                </p>
                                <p className="text-sm sm:text-base lg:text-lg flex flex-col sm:flex-row sm:gap-3 lg:gap-5 py-2 sm:py-3 lg:py-5 border-b-2 border-[#ED8F44]">
                                    <strong className="mb-1 sm:mb-0">هزینه کل:</strong> {reservation.totalCost.toLocaleString()} تومان
                                </p>
                                <p className="text-sm sm:text-base lg:text-lg flex flex-col sm:flex-row sm:gap-3 lg:gap-5 py-2 sm:py-3 lg:py-5">
                                    <strong className="mb-1 sm:mb-0">مود:</strong> {reservation.mood || "ندارد"}
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-base sm:text-lg lg:text-lg text-[#8D5215] text-center mt-6">هیچ رزرو فعالی وجود ندارد.</p>
                )}
            </div>
        </div>
    )
}

export default UserProfilePage
