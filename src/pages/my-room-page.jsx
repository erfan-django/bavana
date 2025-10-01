import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { AuthContext } from "../components/auth-context"
import LeftArrow from "../assets/icons/left-arrow.svg?react"
import allRoomData from "../data/room-data"

const MyRoomPage = () => {
    const { isAuthenticated } = useContext(AuthContext)
    const navigate = useNavigate()
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }
    return (
        <div className="dark:bg-[#251D16] bg-[#FDF6F0] min-h-screen">
            <h1 className="text-3xl font-bold text-[#8D5215] dark:text-[#DF7F1D] my-[60px] text-center">صندلی اشتراکی</h1>
            <div className="flex flex-wrap justify-center gap-[30px] max-w-[1400px] mx-auto mb-[145px]">
                {allRoomData
                    .filter((room) => room.type === "shared")
                    .map((room) => (
                        <div key={room.id} className="hover:shadow-lg/30 flex flex-col rounded-[50px] border-2 border-[#5C4033] dark:border-[#DF7F1D] w-[320px] h-[340px] lg:w-[432px] lg:h-[437px]">
                            <img src={room.image} alt={room.title} className="px-3 py-3" />
                            <div className="flex justify-between mr-3 ml-[35px]">
                                <span className="text-2xl dark:text-[#DF7F1D]">{room.title}</span>
                            </div>
                            <span className="opacity-60 mr-3 mt-1 dark:text-[#A58380]">{room.location}</span>
                            <div className="flex justify-between mt-2 mx-[46px]">
                                <div className="flex rounded-xl bg-[#FBC9A2] lg:pt-1 py-[3px] px-1">
                                    <span className="text-center opacity-60">{room.price}</span>
                                </div>
                                <a className="cursor-pointer rounded-xl py-[3px] px-1.5 flex bg-[#F4A261]" onClick={() => navigate(`/room/${room.id}`)}>
                                    <span className="text-white flex items-center dark:text-[#251D16]">رزرو آنلاین</span>
                                    <LeftArrow className="text-[#ED8F44] dark:text-[#251D16] mt-1" />
                                </a>
                            </div>
                        </div>
                    ))}
            </div>

            <h1 className="text-3xl font-bold text-[#8D5215] dark:text-[#DF7F1D] my-[60px] text-center">اتاق جلسه</h1>
            <div className="flex flex-wrap justify-center gap-[30px] max-w-[1400px] mx-auto mb-[145px]">
                {allRoomData
                    .filter((room) => room.type === "meeting")
                    .map((room) => (
                        <div key={room.id} className="hover:shadow-lg/30 flex flex-col rounded-[50px] border-2 border-[#5C4033] dark:border-[#DF7F1D] w-[320px] h-[340px] lg:w-[432px] lg:h-[437px]">
                            <img src={room.image} alt={room.title} className="px-3 py-3" />
                            <div className="flex justify-between mr-3 ml-[35px]">
                                <span className="text-2xl dark:text-[#DF7F1D]">{room.title}</span>
                            </div>
                            <span className="opacity-60 mr-3 mt-1 dark:text-[#A58380]">{room.location}</span>
                            <div className="flex justify-between mt-2 mx-[46px]">
                                <span className="flex rounded-xl bg-[#FBC9A2] py-[3px] px-1 opacity-60">{room.price}</span>
                                <a className="cursor-pointer rounded-xl py-[3px] px-1.5 flex bg-[#F4A261]" onClick={() => navigate(`/room/${room.id}`)}>
                                    <span className="text-white dark:text-[#251D16]">رزرو آنلاین</span>
                                    <LeftArrow className="text-[#ED8F44] dark:text-[#251D16] mt-1" />
                                </a>
                            </div>
                        </div>
                    ))}
            </div>

            <h1 className="text-3xl font-bold text-[#8D5215] dark:text-[#DF7F1D] my-[60px] text-center">دفتر اختصاصی</h1>
            <div className="flex flex-wrap justify-center gap-[30px] max-w-[1400px] mx-auto mb-[145px]">
                {allRoomData
                    .filter((room) => room.type === "special")
                    .map((room) => (
                        <div key={room.id} className="hover:shadow-lg/30 flex flex-col rounded-[50px] border-2 border-[#5C4033] dark:border-[#DF7F1D] w-[320px] h-[340px] lg:w-[432px] lg:h-[437px]">
                            <img src={room.image} alt={room.title} className="px-3 py-3" />
                            <div className="flex justify-between mr-3 ml-[35px]">
                                <span className="text-2xl dark:text-[#DF7F1D]">{room.title}</span>
                            </div>
                            <span className="opacity-60 mr-3 mt-1 dark:text-[#A58380]">{room.location}</span>
                            <div className="flex justify-between mt-2 mx-[46px]">
                                <span className="flex rounded-xl bg-[#FBC9A2] py-[3px] px-1 opacity-60">{room.price}</span>
                                <a className="cursor-pointer rounded-xl py-[3px] px-1.5 flex bg-[#F4A261]" onClick={() => navigate(`/room/${room.id}`)}>
                                    <span className="text-white dark:text-[#251D16]">رزرو آنلاین</span>
                                    <LeftArrow className="text-[#ED8F44] dark:text-[#251D16] mt-1" />
                                </a>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default MyRoomPage
