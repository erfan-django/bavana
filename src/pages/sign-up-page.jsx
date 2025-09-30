import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import loginbg from "../assets/login-bg.png"
import mobilebg from "../assets/mobile-bg.png"

const SignupPage = () => {
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    // ✅ کنترل سایز صفحه (همون لاجیک LoginPage)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const handleSignup = (e) => {
        e.preventDefault()
        if (phone && email && password) {
            navigate("/login")
        } else {
            alert("لطفاً تمام فیلدها را پر کنید")
        }
    }

    return (
        <div
            className="
                dark:bg-[#251D16] h-dvh lg:bg-white flex justify-center lg:justify-between pr-0 lg:pr-20 xl:pr-40
                bg-cover bg-center
            "
            style={{
                backgroundImage: isMobile ? `url(${mobilebg})` : "none",
            }}>
            <div className="mt-[156px] flex flex-col items-center w-[90%] max-w-[500px]">
                <h1 className="lg:text-5xl text-2xl shadow-black shadow-3xl font-bold text-[#8D5215] dark:text-[#DF7F1D]">ثبت نام در باوانا</h1>

                <form className="mt-[100px] lg:space-y-4 mx-6 flex flex-col gap-2" onSubmit={handleSignup}>
                    <input type="text" className="bg-white dark:text-[#DF7F1D] border text-xl border-[#ED8F44] py-[23px] px-10 rounded-[30px] w-full max-w-[450px] placeholder:text-[#DF7F1D]" placeholder="شماره تلفن" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <input type="email" className="bg-white dark:text-[#DF7F1D] border text-xl border-[#ED8F44] py-[23px] px-10 rounded-[30px] w-full max-w-[450px] placeholder:text-[#DF7F1D]" placeholder="ایمیل" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="bg-white dark:text-[#DF7F1D] border text-xl border-[#ED8F44] py-[23px] px-10 rounded-[30px] w-full max-w-[450px] placeholder:text-[#DF7F1D]" placeholder="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="bg-[#ED8F44] text-xl text-white py-[23px] px-10 rounded-[30px] w-full max-w-[450px] hover:bg-[#ED8F44]/90 dark:text-white">
                        ثبت نام
                    </button>
                </form>

                <p className="mt-4 text-xl text-black dark:text-white lg:text-[#8D5215]">
                    قبلا ثبت‌نام کرده‌اید؟
                    <Link to="/login" className="lg:text-[#4D2B09] text-black dark:text-white hover:underline">
                        وارد شوید
                    </Link>
                </p>
            </div>

            {/* عکس فقط در lg نمایش داده شود */}
            <img src={loginbg} alt="loginbg" className="hidden lg:block lg:w-[640px] lg:h-[680px] xl:w-[840px] xl:h-[880px]" />
        </div>
    )
}

export default SignupPage
