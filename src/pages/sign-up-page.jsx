import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import loginbg from "../assets/login-bg.png"
import mobilebg from "../assets/mobile-bg.png"

const SignupPage = () => {
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSignup = (e) => {
        e.preventDefault()
        if (phone && email && password) {
            navigate("/login")
        } else {
            alert("لطفاً تمام فیلدها را پر کنید")
        }
    }

    return (
        <div className="dark:bg-[#251D16] h-dvh flex justify-center lg:justify-between pr-0 lg:pr-10 bg-cover bg-center lg:bg-none" style={{ backgroundImage: `url(${mobilebg})` }}>
            <div className="mt-[156px] flex flex-col items-center w-[90%] max-w-[500px]">
                <h1 className="text-5xl font-bold text-[#8D5215] dark:text-[#DF7F1D]">ثبت نام در باوانا</h1>
                <form className="mt-[100px] space-y-4" onSubmit={handleSignup}>
                    <input type="text" className="border border-[#ED8F44] py-[23px] px-10 rounded-[30px] w-full max-w-[450px] text-white" placeholder="شماره تلفن" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <input type="email" className="border border-[#ED8F44] py-[23px] px-10 rounded-[30px] w-full max-w-[450px] text-white" placeholder="ایمیل" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" className="border border-[#ED8F44] py-[23px] px-10 rounded-[30px] w-full max-w-[450px] text-white" placeholder="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="bg-[#ED8F44] text-white py-[23px] px-10 rounded-[30px] w-full max-w-[450px] hover:bg-[#ED8F44]/90 dark:text-[#251D16]">
                        ثبت نام
                    </button>
                </form>
                <p className="mt-4 text-[#8D5215] dark:text-white">
                    قبلا ثبت‌نام کرده‌اید؟{" "}
                    <Link to="/login" className="text-[#4D2B09] dark:text-white/70 hover:underline">
                        وارد شوید
                    </Link>
                </p>
            </div>

            {/* عکس فقط در lg نمایش داده شود */}
            <img src={loginbg} alt="loginbg" className="hidden lg:block w-[840px] h-[880px]" />
        </div>
    )
}

export default SignupPage
