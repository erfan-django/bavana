import logoImage2 from "../assets/LOGO-2.png"
import WhatsappIcon from "../assets/icons/Whatsapp.svg?react"
import InstagramIcon from "../assets/icons/Instagram.svg?react"
import LinkedinIcon from "../assets/icons/Linkedin.svg?react"
import TelegramIcon from "../assets/icons/Telegram.svg?react"

const Footer = () => {
    return (
        <footer>
            <div className="bg-white dark:bg-[#FDDEC3] rounded-[500px] lg:w-[1440px] w-[359px] h-[500px]  flex lg:flex-row flex-col items-center justify-center lg:gap-[100px] lg:mt-[60px] mb-[30px]">
                <div className="flex items-center flex-col">
                    <link to="/">
                        <img src={logoImage2} alt="logo" className="w-[192px] h-[70px] lg:w-[378px] lg:h-[156px]" />
                    </link>
                    <span className="lg:text-2xl w-[177px] lg:w-[350px] mt-5 lg:mt-[31px] text-wrap">هر لحظه ای که با تمرکز سپری میکنی یک قدم به رویاهات نزدیک تر هستی !</span>
                    <div className="lg:mt-10 flex mt-5 gap-5">
                        <Link to="/contact-us" className=" bg-[#A16C4B] lg:px-[48px] py-2 px-1.5 lg:py-[14px] rounded-[20px] lg:text-xl text-sm text-white dark:text-[#251D16] dark:bg-[#DF7F1D] cursor-pointer hover:shadow-2xl/10">
                            ارتباط با ما
                        </Link>
                        <Link to="/myroom" className="border-[#A16C4B] border-2 py-2 px-1.5 lg:px-[12px] lg:py-[14px] rounded-[20px] text-sm lg:text-xl dark:text-[#251D16] dark:border-[#251D16] text-[#A16C4B] cursor-pointer hover:text-white hover:bg-[#251D16] hover:border-[#251D16] dark:hover:text-[#A16C4B]">
                            رزرو فضای مطالعه
                        </Link>
                    </div>
                </div>
                <div className="mt-5 lg:mt-0 flex flex-col-reverse lg lg:flex-col items-center gap-[18px] ">
                    <div className="flex gap-[6px]">
                        <a href="https://wa.me/989123456789" target="_blank" rel="noopener noreferrer">
                            <WhatsappIcon className=" hover:scale-110 transition-transform w-6 h-6 lg:w-[82px] lg:h-[82px]" />
                        </a>

                        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <InstagramIcon className="hover:scale-110 transition-transform w-6 h-6 lg:w-[82px] lg:h-[82px]" />
                        </a>

                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <LinkedinIcon className="hover:scale-110 transition-transform w-6 h-6 lg:w-[82px] lg:h-[82px]" />
                        </a>

                        <a href="https://t.me/yourprofile" target="_blank" rel="noopener noreferrer">
                            <TelegramIcon className="hover:scale-110 transition-transform w-6 h-6 lg:w-[82px] lg:h-[82px]" />
                        </a>
                    </div>
                    <div className="flex flex-col gap-1.5 items-center">
                        <div className="flex items-center lg:gap4 lg:mt-[70px]">
                            <span className="text-sm lg:text-2xl">پشتیبانی :45241359-031 </span>
                            <span className="text-sm lg:text-2xl">09926639501</span>
                        </div>
                        <span className="text-sm lg:text-2xl">اگر پاسخگو نبودیم پیامک دهید</span>
                        <span className="text-sm lg:text-2xl">ایمیل : bavana@gmail.com</span>
                    </div>
                </div>
            </div>

            <p className=" flex justify-center items-center h-10 bg-[#ED8F44] dark:text-[#251D16] text-white p-4 text-center">کلیه حقوق مطلق به سایت باوانا مطالعه میباشد</p>
        </footer>
    )
}

export default Footer
