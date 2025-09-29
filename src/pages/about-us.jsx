import { useState } from "react"
import headerline1 from "../assets/headerline1.png"
import headerline2 from "../assets/headerline2.png"
import headerline3 from "../assets/headerline3.png"
import aboutus1 from "../assets/about-us-1.png"
import aboutus2 from "../assets/about-us-2.png"
import Arrowdown from "../assets/icons/arrow-down.svg?react"

const FAQItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <div className={`h-[80px] sm:h-[90px] lg:h-[100px] bg-[#ED8F44] rounded-[50px] flex items-center cursor-pointer`} onClick={() => setIsOpen(!isOpen)}>
                <span className="rounded-full bg-white w-[60px] sm:w-[70px] lg:w-[80px] h-[60px] sm:h-[70px] lg:h-[80px] flex items-center justify-center mr-3 ml-4">
                    <Arrowdown className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </span>
                <p className="text-white text-sm sm:text-base lg:text-lg mx-2 sm:mx-3 lg:mx-4">{faq.question}</p>
            </div>
            {isOpen && (
                <div className="mx-4 sm:mx-5 lg:mx-7 pr-4 sm:pr-5 lg:pr-6 bg-[#F4A261] rounded-[50px] flex items-center p-2 sm:p-3 lg:p-4 mt-2 transition-all duration-300" style={{ overflow: "hidden" }}>
                    <p className="text-white text-xs sm:text-sm lg:text-base mx-2 sm:mx-3 lg:mx-4">{faq.answer}</p>
                </div>
            )}
        </div>
    )
}

const AboutUs = () => {
    const faqs = [
        {
            question: "چطور می‌تونم فضای مطالعه رزرو کنم ؟",
            answer: "بعد از ورود به سایت ، وارد بخش “اتاق من” شو ، فضای مورد نظرتو انتخاب کن ، زمان رو مشخص کن و روی رزرو کلیک کن .",
        },
        {
            question: "پیشنهاد موسیقی بر چه اساسی انجام می‌شود ؟",
            answer: "ما ازت می‌پرسیم که الان چه حسی داری بر اساس حس انتخاب شده ، موزیکی متناسب از لیست آهنگ‌هامون برات پخش میکنیم.",
        },
        {
            question: "آیا می‌توانم بعد از رزرو ، زمان یا فضا را تغییر دهم ؟",
            answer: "بله ، تا یک ساعت قبل از شروع زمان رزرو ، امکان ویرایش یا لغو رزرو از طریق “اتاق من ” وجود دارد.",
        },
        {
            question: "ثبت نام اجباریه یا می‌توانم مهمان باشم ؟",
            answer: "برای استفاده کامل از امکانات مثل رزرو و پخش موسیقی نیاز به ثبت نام داری . اما می‌توانی سایت را به صورت مهمان ببینی.",
        },
        {
            question: "باوانا فقط برای دانشجو هاست ؟",
            answer: "نه ! باوانا برای هر کسیه که دنبال یه فضای تمرکز و حس خوبه ، چه دانشجو چه فریلنسر ، چه عاشق مطالعه !",
        },
    ]

    return (
        <div>
            <div className="flex flex-col lg:flex-row p-4 justify-center lg:justify-evenly items-center">
                <div>
                    <h1 className="text-lg sm:text-xl lg:text-4xl/relaxed lg:w-[417px] font-bold text-[#8D5215] dark:text-[#DF7F1D] mb-4 sm:mb-6 lg:mb-6 pt-6 sm:pt-8 lg:pt-9 mx-2 sm:mx-2 lg:mx-2">درباره باوانا ما اینجا هستیم تا تجربه ارام ، متمرکز و شخصی سازی شده برای مطالعه بسازیم .</h1>
                    <p className="dark:text-white text-xs sm:text-sm lg:text-lg lg:w-[523px] text-justify mx-2 sm:mx-3 lg:mx-3">باوانا یک سامانه رزرواسیون فضای مطالعه است که با ترکیب تکنولوژی و درک احساسات کاربران ، تجربه ای متفاوت از مطالعه را خلق میکند. ما باور داریم حس و حال خوب کلید تمرکز و یادگیری عمیقه برای همین توی باوانا قبل از شروع مطالعه ازت میپرسه چه حسی داری.... و یه موسیقی مخصوص حال اون لحظه ت برات پخش میکنیم .</p>
                </div>
                <div className="flex gap-2 sm:gap-5 lg:gap-[10px] mt-4 mb-10 sm:mb-12 lg:mb-14 items-center justify-center">
                    <img src={aboutus1} alt="gallery" className="h-[150px] sm:h-[200px]  w-[80px] sm:w-[150px]  lg:h-[570px] lg:w-[300px]" />
                    <img src={aboutus2} alt="gallery" className="w-[50px] sm:w-[60px]  h-[120px] sm:h-[130px] lg:h-[570px] lg:w-[300px] hidden sm:flex lg:flex" />
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

            <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 p-2 sm:p-4 lg:p-0">
                <h2 className="text-[#8D5215] text-xl sm:text-2xl lg:text-4xl font-semibold mb-4 sm:mb-6 lg:mb-[28px]">سوالات متداول</h2>
                {faqs.map((faq, index) => (
                    <FAQItem key={index} faq={faq} index={index} />
                ))}
            </div>
        </div>
    )
}

export default AboutUs
