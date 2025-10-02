import { useState } from "react"
import PersianDate from "persian-date"

const CustomCalendar = ({ availableDates, selectedDate, onDateSelect }) => {
    const [currentMonth, setCurrentMonth] = useState(new PersianDate().month() - 1)
    const [currentYear, setCurrentYear] = useState(new PersianDate().year())
    const persianMonths = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"]

    const getDaysInMonth = (year, month) => {
        return new PersianDate()
            .year(year)
            .month(month + 1)
            .daysInMonth()
    }

    const getFirstDayOfMonth = (year, month) => {
        return new PersianDate()
            .year(year)
            .month(month + 1)
            .date(1)
            .day()
    }

    const changeMonth = (delta) => {
        let newMonth = currentMonth + delta
        let newYear = currentYear
        if (newMonth > 11) {
            newMonth = 0
            newYear++
        } else if (newMonth < 0) {
            newMonth = 11
            newYear--
        }
        setCurrentMonth(newMonth)
        setCurrentYear(newYear)
    }

    const renderCalendar = () => {
        const rows = []
        let cells = []
        const days = getDaysInMonth(currentYear, currentMonth)
        const firstDay = getFirstDayOfMonth(currentYear, currentMonth)

        for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
            cells.push(<td key={`empty-${i}`} className="p-1 sm:p-1.5"></td>)
        }

        for (let day = 1; day <= days; day++) {
            const pd = new PersianDate()
                .year(currentYear)
                .month(currentMonth + 1)
                .date(day)
            const dateStr = pd.format("YYYY/MM/DD")
            const isAvailable = availableDates.includes(dateStr)
            const isSelected = selectedDate === dateStr
            const isToday = dateStr === new PersianDate().format("YYYY/MM/DD")

            cells.push(
                <td
                    key={day}
                    className={`p-1 sm:p-1.5 cursor-pointer text-center rounded-full text-sm sm:text-xs ${isAvailable ? (isSelected ? "bg-[#ED8F44] text-white" : "bg-[#1BC300] text-white hover:bg-[#D77A3A]") : "bg-gray-300 text-gray-500 cursor-not-allowed"} ${isToday ? "border-2 border-black" : ""}`}
                    onClick={() => {
                        if (isAvailable) onDateSelect(dateStr)
                    }}>
                    {day}
                </td>
            )

            if (cells.length === 7 || day === days) {
                rows.push(<tr key={rows.length}>{cells}</tr>)
                cells = []
            }
        }

        return (
            <table className="w-full border-collapse text-right">
                <thead>
                    <tr>
                        <th colSpan="7" className="p-2 sm:p-3 text-center bg-[#FDDEC3] text-[#8D5215]">
                            <button onClick={() => changeMonth(-1)} className="cursor-pointer hover:scale-125 mx-1">
                                &lt;
                            </button>
                            <span className="mx-1 sm:mx-2">
                                {persianMonths[currentMonth]} {currentYear}
                            </span>
                            <button onClick={() => changeMonth(1)} className="cursor-pointer hover:scale-125 mx-1">
                                &gt;
                            </button>
                        </th>
                    </tr>
                    <tr className="text-center text-xs sm:text-[10px]">
                        {["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"].map((d, i) => (
                            <th key={i} className="p-1 sm:p-1.5">
                                {d}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }

    return (
        <div className="border border-[#ED8F44] rounded-lg p-2 sm:p-3 w-full overflow-x-hidden">
            {renderCalendar()}
            {selectedDate && <p className="mt-2 sm:mt-3 text-sm text-[#8D5215] dark:text-white font-bold">تاریخ انتخاب شده: {selectedDate}</p>}
        </div>
    )
}

export default CustomCalendar
