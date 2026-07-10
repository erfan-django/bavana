import { useState, useEffect, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../components/auth-context"
import loginbg from "../assets/login-bg.png"
import mobilebg from "../assets/mobile-bg.png"

const SignupPage = () => {
    const { login } = useContext(AuthContext)
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const handleSignup = (e) => {
        e.preventDefault()
        const errs = {}
        if (!phone.trim()) errs.phone = "شماره تلفن الزامی است"
        else if (!/^09\d{9}$/.test(phone.trim())) errs.phone = "شماره تلفن معتبر نیست (مثال: 09123456789)"
        if (!email.trim()) errs.email = "ایمیل الزامی است"
        else if (!/\S+@\S+\.\S+/.test(email)) errs.email = "ایمیل معتبر نیست"
        if (!password.trim()) errs.password = "رمز عبور الزامی است"
        else if (password.length < 4) errs.password = "رمز عبور حداقل ۴ کاراکتر باشد"
        setErrors(errs)
        if (Object.keys(errs).length > 0) return
        const userData = { name: phone, email }
        login(userData)
        navigate("/", { replace: true })
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
                    <input type="text" className="bg-white dark:text-[#DF7F1D] border text-xl border-[#ED8F44] py-[23px] px-10 rounded-[30px] w-full max-w-[450px] placeholder:text-[#DF7F1D]" placeholder="شماره تلفن" value={phone} onChange={(e) => { setPhone(e.target.value); if (errors.phone) setErrors((p) => ({ ...p, phone: undefined })) }} />
                    {errors.phone && <p className="text-red-500 text-sm -mt-2 mr-2">{errors.phone}</p>}
                    <input type="email" className="bg-white dark:text-[#DF7F1D] border text-xl border-[#ED8F44] py-[23px] px-10 rounded-[30px] w-full max-w-[450px] placeholder:text-[#DF7F1D]" placeholder="ایمیل" value={email} onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: undefined })) }} />
                    {errors.email && <p className="text-red-500 text-sm -mt-2 mr-2">{errors.email}</p>}
                    <input type="password" className="bg-white dark:text-[#DF7F1D] border text-xl border-[#ED8F44] py-[23px] px-10 rounded-[30px] w-full max-w-[450px] placeholder:text-[#DF7F1D]" placeholder="رمز عبور" value={password} onChange={(e) => { setPassword(e.target.value); if (errors.password) setErrors((p) => ({ ...p, password: undefined })) }} />
                    {errors.password && <p className="text-red-500 text-sm -mt-2 mr-2">{errors.password}</p>}
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
            <img src={loginbg} alt="loginbg" className="hidden lg:block lg:w-[640px] lg:h-[680px] xl:w-[840px] xl:h-[880px]" />
        </div>
    )
}

export default SignupPage
