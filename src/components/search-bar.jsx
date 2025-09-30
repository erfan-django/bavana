import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AllRoomData from "../data/room-data" // مسیر درست رو بذار

const SearchBar = () => {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])
    const navigate = useNavigate()

    const handleSearch = (e) => {
        const value = e.target.value
        setQuery(value)

        if (value.trim() === "") {
            setResults([])
            return
        }

        const filtered = AllRoomData.filter((room) => room.title.toLowerCase().includes(value.toLowerCase()))
        setResults(filtered)
    }

    const handleSelectRoom = (roomId) => {
        setQuery("") // بعد از انتخاب، سرچ خالی بشه
        setResults([]) // نتایج بسته بشن
        navigate(`/room/${roomId}`) // انتقال به صفحه جزئیات
    }

    return (
        <div className="relative">
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="جستجو..."
                className="pr-14 px-3 py-6 text-xl xl:text-2xl max-h-[25px] w-[261px] md:w-[180px] xl:w-[449px] 
                   placeholder-white dark:placeholder-[#8D5215] 
                   bg-[#ED8F44] rounded-[60px] 
                   focus:outline-none focus:ring-orange-700 focus:ring-2 
                   transition-all duration-200"
            />

            {results.length > 0 && (
                <ul className="absolute top-full mt-2 w-full bg-white dark:bg-[#251D16] shadow-lg rounded-2xl max-h-64 overflow-y-auto z-50">
                    {results.map((room) => (
                        <li key={room.id} onClick={() => handleSelectRoom(room.id)} className="flex items-center gap-3 p-2 hover:bg-gray-100 dark:hover:bg-[#3a2c21] cursor-pointer rounded-lg">
                            <img src={room.image} alt={room.title} className="w-12 h-12 rounded-lg object-cover" />
                            <div>
                                <p className="text-sm font-medium text-gray-900 dark:text-white">{room.title}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{room.price}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default SearchBar
