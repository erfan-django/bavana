import room1 from "../assets/room-1.png"
import room2 from "../assets/room-2.png"
import room3 from "../assets/room-3.png"
import room4 from "../assets/room-4.png"
import room5 from "../assets/room-5.png"
import meetroom1 from "../assets/meet-room1.png"
import meetroom2 from "../assets/meet-room2.png"
import meetroom3 from "../assets/meet-room3.png"
import specialroom1 from "../assets/special-room-1.png"
import specialroom2 from "../assets/special-room-2.png"
import specialroom3 from "../assets/special-room-3.png"
import specialroom4 from "../assets/special-room-4.png"
import specialroom5 from "../assets/special-room-5.png"
import specialroom6 from "../assets/special-room-6.png"

const AllRoomData = [
    {
        id: 1,
        type: "shared",
        image: room1,
        title: "صندلی اشتراکی",
        description: "صندلی راحت با دسترسی به اینترنت پرسرعت و فضایی آرام.",
        price: "15000 تومان ",
        availableDates: ["2025-09-25", "2025-09-27", "2025-09-29"], // تاریخ‌های خالی
        availableTimes: { start: "09:00", end: "18:00" },
    },
    {
        id: 2,
        type: "shared",
        image: room2,
        title: "صندلی اشتراکی (VIP)",
        description: "صندلی VIP با امکانات ویژه.",
        price: "25000 تومان ",
        availableDates: ["2025-09-25", "2025-09-28", "2025-09-30"],
        availableTimes: { start: "09:00", end: "18:00" },
    },
    {
        id: 3,
        type: "shared",
        image: room3,
        title: "صندلی اشتراکی روزانه",
        description: "صندلی روزانه با طراحی ارگونومیک.",
        price: "20000 تومان ",
        availableDates: ["2025-09-26", "2025-09-28", "2025-09-30"],
        availableTimes: { start: "09:00", end: "18:00" },
    },
    {
        id: 4,
        type: "shared",
        image: room4,
        title: "صندلی اشتراکی میز گرد",
        description: "صندلی با چیدمان دایره‌ای.",
        price: "20000 تومان ",
        availableDates: ["2025-09-25", "2025-09-27", "2025-09-29"],
        availableTimes: { start: "09:00", end: "18:00" },
    },
    {
        id: 5,
        type: "shared",
        image: room5,
        title: "صندلی پویا",
        description: "صندلی با قابلیت تنظیم پویا.",
        price: "20000 تومان ",
        availableDates: ["2025-09-26", "2025-09-28", "2025-09-30"],
        availableTimes: { start: "09:00", end: "18:00" },
    },
    {
        id: 6,
        type: "meeting",
        image: meetroom1,
        title: "اتاق جلسه چهار نفره",
        description: "اتاق مناسب برای جلسات کوچک.",
        price: "25000 تومان ",
        availableDates: ["2025-09-25", "2025-09-27", "2025-09-29"],
        availableTimes: { start: "09:00", end: "18:00" },
    },
    {
        id: 7,
        type: "meeting",
        image: meetroom2,
        title: "اتاق جلسه هشت نفره",
        description: "اتاق برای جلسات متوسط.",
        price: "30000 تومان ",
        availableDates: ["2025-09-26", "2025-09-28", "2025-09-30"],
        availableTimes: { start: "09:00", end: "18:00" },
    },
    {
        id: 8,
        type: "meeting",
        image: meetroom3,
        title: "اتاق جلسه ده نفره",
        description: "اتاق برای جلسات بزرگ.",
        price: "35000 تومان ",
        availableDates: ["2025-09-25", "2025-09-27", "2025-09-29"],
        availableTimes: { start: "09:00", end: "18:00" },
    },
    {
        id: 9,
        type: "special",
        image: specialroom1,
        title: "دفتر اختصاصی چهار نفره نارنجی",
        description: "دفتر اختصاصی با طراحی مدرن.",
        price: "65000 تومان ",
        availableDates: ["2025-09-26", "2025-09-28", "2025-09-30"],
        availableTimes: { start: "09:00", end: "18:00" },
    },
    {
        id: 10,
        type: "special",
        image: specialroom2,
        title: "دفتر اختصاصی شش نفره",
        description: "دفتر تک‌نفره شیک.",
        price: "40000 تومان ",
        availableDates: ["2025-09-25", "2025-09-27", "2025-09-29"],
        availableTimes: { start: "09:00", end: "18:00" },
    },
    {
        id: 11,
        type: "special",
        image: specialroom3,
        title: "دفتر اختصاصی شش نفره",
        description: "دفتر برای تیم‌های کوچک.",
        price: "45000 تومان ",
        availableDates: ["2025-09-26", "2025-09-28", "2025-09-30"],
        availableTimes: { start: "09:00", end: "18:00" },
    },
    {
        id: 12,
        type: "special",
        image: specialroom4,
        title: "دفتر اختصاصی یک نفره",
        description: "فضای کاری شخصی.",
        price: "30000 تومان ",
        availableDates: ["2025-09-25", "2025-09-27", "2025-09-29"],
        availableTimes: { start: "09:00", end: "18:00" },
    },
    {
        id: 13,
        type: "special",
        image: specialroom5,
        title: "دفتر اختصاصی شش نفره",
        description: "دفتر برای تیم‌های متوسط.",
        price: "75000 تومان ",
        availableDates: ["2025-09-26", "2025-09-28", "2025-09-30"],
        availableTimes: { start: "09:00", end: "18:00" },
    },
    {
        id: 14,
        type: "special",
        image: specialroom6,
        title: "دفتر اختصاصی چهار نفره",
        description: "دفتر با طراحی مینیمال.",
        price: "45000 تومان ",
        availableDates: ["2025-09-25", "2025-09-27", "2025-09-29"],
        availableTimes: { start: "09:00", end: "18:00" },
    },
]

export default AllRoomData
