// THIS PAGE IS A FEATURE WHEN I LEARNED BACKEND :)
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// // src/pages/reservation.jsx
// import { useState } from "react"

// const ReservationPage = () => {
//     const [date, setDate] = useState("")
//     const [guests, setGuests] = useState(1)

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log("رزرو انجام شد:", { date, guests })
//     }

//     return (
//         <div className="p-4">
//             <h1 className="text-2xl font-bold">صفحه رزرو</h1>
//             <form onSubmit={handleSubmit} className="mt-4 space-y-4">
//                 <div>
//                     <label className="block">تاریخ:</label>
//                     <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="border p-2 rounded w-full" />
//                 </div>
//                 <div>
//                     <label className="block">تعداد نفرات:</label>
//                     <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" className="border p-2 rounded w-full" />
//                 </div>
//                 <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90">
//                     ثبت رزرو
//                 </button>
//             </form>
//         </div>
//     )
// }

// export default ReservationPage
