import React from "react"
import contactus from "../assets/contactus.png"
import emailform from "../assets/email-form.png"
import Emailicon from "../assets/icons/emailicon.svg?react"
import Phoneicon from "../assets/icons/phoneicon.svg?react"
import Homeicon from "../assets/icons/homeicon.svg?react"
import Logo from "../assets/icons/logo bavana.svg?react"
import PostAdrress from "../assets/icons/postAdrress.svg?react"

const ContactUs = () => {
    return (
        <div>
            <div className="hidden lg:flex relative  justify-center items-center ">
                <img src={contactus} className="w-[1372px] h-auto  " alt="Contact Us Background" />
                <div className="absolute bottom-0 w-[1272px] dark:bg-[#FDDEC3] bg-white rounded-[50px] p-6 flex items-center flex-col justify-center">
                    <div className="flex items-center justify-between w-full mx-[120px]">
                        <div className="mr-[80px]">
                            <h2 className="text-3xl font-bold text-[#8D5215] dark:text-[#8D5215]">تماس با باوانا</h2>
                            <p className="text-lg text-gray-600 mt-5 dark:text-black">از این راه با ما در ارتباط باشید</p>
                        </div>
                        <Logo className="w-[200px] h-[200px]" />
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-[40px] mt-6">
                        <div className="flex  gap-8">
                            <div className="flex items-center justify-center bg-[#846749] rounded-[20px] w-[120px] h-[120px]">
                                <Phoneicon />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-xl">تماس</span>
                                <span className="text-[#846749]">09926639501</span>
                                <span className="text-[#846749]">031-45241359</span>
                            </div>
                        </div>
                        <div className="flex  gap-8">
                            <div className="flex items-center justify-center bg-[#846749] rounded-[20px] w-[120px] h-[120px]">
                                <Homeicon />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-xl">آدرس</span>
                                <span className="text-[#846749] text-wrap w-[60%] ">شاهین شهر _ خیابان عطار فرعی 5 غربی فضای مطالعه باوانا</span>
                            </div>
                        </div>
                        <div className="flex  gap-8">
                            <div className="flex items-center justify-center bg-[#846749] rounded-[20px] w-[120px] h-[120px]">
                                <Emailicon />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-xl">ایمیل</span>
                                <span className="text-[#846749]">bavana@gmail.com</span>
                            </div>
                        </div>
                        <div className="flex  gap-8">
                            <div className="flex items-center justify-center bg-[#846749] rounded-[20px] w-[120px] h-[120px]">
                                <PostAdrress />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-xl">کد پستی</span>
                                <span className="text-[#846749]">8314935651</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:mr-12 mt-[60px] flex flex-col items-center lg:flex-row lg:justify-between">
                <div className="max-sm:flex max-sm:flex-col">
                    <h3 className="text-[#8D5215] dark:text-[#DF7F1D]  text-2xl/loose font-semibold lg:text-3xl">ارسال پیام به ما</h3>
                    <p className=" dark:text-[#DF7F1D] mt-3 text-xl lg:text-2xl">پذیرای پیشنهادات و انتقادات شما هستیم</p>
                    <form className="flex flex-col items-center gap-5">
                        <input type="text" placeholder="نام شما" className="pr-7 px-3 py-8 text-xl xl:text-2xl max-h-[25px] w-[261px] md:w-[180px] xl:w-[449px] placeholder-[#8D521580]/60 dark:placeholder-[#fff] border-2 border-[#ED8F44] rounded-[60px] focus:outline-none focus:ring-orange-700 focus:ring-2 transition-all duration-200 mt-10 " />
                        <input type="email" placeholder="ادرس ایمیل" className="pr-7 px-3 py-8 text-xl xl:text-2xl max-h-[25px] w-[261px] md:w-[180px] xl:w-[449px] placeholder-[#8D521580]/60 dark:placeholder-[#fff] border-2 border-[#ED8F44] rounded-[60px] focus:outline-none focus:ring-orange-700 focus:ring-2 transition-all duration-200 " />
                        <input type="text" placeholder="پیام ...." className="pr-7 px-3 py-8 text-xl xl:text-2xl h-[250px] w-[261px] md:w-[180px] xl:w-[449px] placeholder-[#8D521580]/60 dark:placeholder-[#fff] border-2 border-[#ED8F44] rounded-[30px] focus:outline-none focus:ring-orange-700 focus:ring-2 transition-all duration-200  " />
                        <button type="submit" className="bg-[#ED8F44] text-xl text-white py-[23px] px-10 p-2 rounded-[30px] w-[232px] dark:text-[#251D16] hover:bg-[#ED8F44]/90 cursor-pointer z-50 relative">
                            ارسال پیام
                        </button>
                    </form>
                </div>
                <div className="my-5 lg:my-0 mx-4 rounded-[200px] p-12 flex justify-center items-center bg-[#ED8F44]">
                    <img src={emailform} alt="email" className="rounded-[36px]" />
                </div>
            </div>
        </div>
    )
}

export default ContactUs
