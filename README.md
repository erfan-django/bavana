# باوانا (Bavana) — سامانه هوشمند رزرو فضای مطالعه

**نسخه نمایشی (دمو):** [bavana-demo.vercel.app](https://bavana-demo.vercel.app/)

یه پروژه شخصی برای رزرو آنلاین فضای مطالعه. توی این سایت کاربرا می‌تونن از بین چند تا فضا (صندلی اشتراکی، اتاق جلسه، دفتر اختصاصی) یکی رو انتخاب کنن، تاریخ و ساعتش رو مشخص کنن و رزروش کنن.

نکته جالبش اینه که قبل از رزرو ازت می‌پرسه "حالت چطوره؟" و بر اساس حسی که داری یه پلی‌لیست از اسپاتیفای پیشنهاد میده. مثلا اگه بی‌حوصله باشی یه پلی‌لیست شاد، اگه ناراحت باشی یه پلی‌لیست آروم. اینجوری فضا و موسیقی با هم هماهنگن.

## چیکار می‌کنه؟

- رزرو آنلاین سه نوع فضا (صندلی اشتراکی، اتاق جلسه، دفتر اختصاصی)
- تقویم شمسی برای انتخاب تاریخ
- انتخاب ساعت شروع و پایان
- انتخاب حس و حال و دریافت پلی‌لیست پیشنهادی
- سیستم ورود و ثبت‌نام (با localStorage)
- نمایش آخرین رزرو توی پروفایل کاربر
- قابلیت جستجوی فضاها
- حالت تاریک و روشن
- پلیر موزیک شناور برای دسکتاپ (قابل درگ کردن)

## توی پروژه از چی استفاده شده؟

- **React 19** + **Vite 7** برای ساختار اصلی
- **React Router DOM v7** برای مسیریابی
- **Tailwind CSS v4** برای استایل‌دهی
- **Zustand** برای مدیریت state (هرچند فعلا خیلی استفاده نشده)
- **react-draggable** برای پلیر موزیک شناور
- **date-fns** + **persian-date** برای کار با تاریخ شمسی
- **Vazirmatn** فونت فارسی
- **SVGR** برای استفاده از SVGها به صورت کامپوننت

## ساختار پروژه

```
src/
├── assets/          # عکس‌ها و آیکون‌ها
├── components/      # کامپوننت‌های shared
│   ├── common/      # دکمه، اسکلتون، سرچ
│   ├── header.jsx
│   ├── footer.jsx
│   ├── nav-menu.jsx
│   ├── search-bar.jsx
│   ├── auth-buttons.jsx
│   ├── auth-provider.jsx
│   ├── auth-context.jsx
│   ├── Theme-Toggle.jsx
│   ├── custom-calendar.jsx
│   ├── Logo.jsx
│   ├── playlist-context.jsx
│   ├── playlist-player.jsx
│   └── useplaylist.jsx
├── pages/           # صفحه‌های اصلی
│   ├── home.jsx
│   ├── about-us.jsx
│   ├── contact-us.jsx
│   ├── login-page.jsx
│   ├── sign-up-page.jsx
│   ├── my-room-page.jsx
│   ├── room-details-page.jsx
│   ├── user-profile-page.jsx
│   └── not-found-page.jsx
├── layout/          # لایه‌بندی اصلی
├── data/            # دیتای اتاق‌ها
├── store/           # Zustand store
├── App.jsx
└── main.jsx
```

## چطور اجراش کنم؟

```
npm install
npm run dev
```

سایت روی `http://localhost:3000` باز می‌شه.

برای build:

```
npm run build
```

## صفحه‌بندی

| مسیر | توضیح |
|------|--------|
| `/` | صفحه اصلی با معرفی فضاها و نظرات |
| `/myroom` | لیست کامل اتاق‌ها (نیاز به ورود) |
| `/room/:id` | جزئیات فضا + رزرو + انتخاب حس و حال |
| `/about-us` | درباره ما + سوالات متداول |
| `/contact-us` | فرم تماس و اطلاعات ارتباطی |
| `/login` | ورود |
| `/signup` | ثبت‌نام |
| `/user-profile` | پروفایل و آخرین رزرو |

## نکته‌های فنی

- همه دیتاها فعلا mock هستن و خبری از بک‌اند نیست.
- احراز هویت با localStorage انجام می‌شه.
- پلیر اسپاتیفای به صورت iframe اضافه شده و روی دسکتاپ قابل درگ کردنه.
- تاریخ‌های موجود توی تقویم به صورت خودکار از تاریخ روز往后 تولید می‌شن.
- اگه یه کاربر ثبت‌نام کنه، مستقیما به صفحه اصلی هدایت می‌شه و لاگین می‌مونه.

## چیزایی که می‌شه بعدا اضافه کرد

- اتصال به API واقعی برای رزرو و احراز هویت
- پنل ادمین برای مدیریت فضاها
- سیستم نوتیفیکیشن
- قابلیت لغو و ویرایش رزرو از سمت کاربر
- صفحه‌بندی و فیلتر پیشرفته برای اتاق‌ها

## ارتباط با من

اگه سوالی بود یا پیشنهادی داشتی، خوشحال می‌شم باهات صحبت کنم.

**تلگرام:** [erfanDjango](https://t.me/erfanDjango)

---

# English Description

**Bavana** is a personal project for online study space reservation.

**Live Demo:** [bavana-demo.vercel.app](https://bavana-demo.vercel.app/) Users can choose between different types of spaces (shared seats, meeting rooms, private offices), pick a date and time, and make a reservation.

The interesting part? Before reserving, the app asks "How are you feeling?" and suggests a Spotify playlist based on your mood. Happy, sad, anxious, bored — there's a playlist for each mood. It combines workspace with music to create a better study experience.

### Features
- Online reservation for 3 types of spaces
- Persian (Shamsi) calendar for date picking
- Start/end time selection
- Mood-based Spotify playlist suggestions
- Login / Signup system (localStorage-based)
- Last reservation details in user profile
- Search functionality for rooms
- Dark / Light mode toggle
- Draggable floating music player (desktop)

### Tech Stack
- **React 19** + **Vite 7**
- **React Router DOM v7**
- **Tailwind CSS v4**
- **Zustand** (state management)
- **react-draggable** (floating player)
- **date-fns** + **persian-date** (Persian calendar)
- **Vazirmatn** (Persian font)
- **SVGR** (SVG as components)

### How to Run
```bash
npm install
npm run dev     # opens on http://localhost:3000
npm run build   # production build
```

### Routes
| Path | Description |
|------|-------------|
| `/` | Homepage with room previews and testimonials |
| `/myroom` | Full room listing (requires login) |
| `/room/:id` | Room details + reservation + mood selection |
| `/about-us` | About page + FAQ |
| `/contact-us` | Contact form and info |
| `/login` | Login page |
| `/signup` | Signup page |
| `/user-profile` | Profile and last reservation |

### Technical Notes
- All data is mocked; no backend yet.
- Authentication is handled via localStorage.
- Spotify player is embedded as an iframe, draggable on desktop.
- Calendar availability is generated dynamically from the current date.
- Signup creates the user immediately and logs them in.

### Future Plans
- Real API integration for reservations and auth
- Admin panel for managing rooms
- Notification system
- Cancel / edit reservation from user profile
- Advanced filtering and pagination for rooms

### Contact
**Telegram:** [erfanDjango](https://t.me/erfanDjango)
