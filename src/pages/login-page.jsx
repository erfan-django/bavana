import { useState, useEffect, useContext } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { AuthContext } from "../components/auth-context"
import loginbg from "../assets/login-bg.png"
import mobilebg from "../assets/mobile-bg.png"

const LoginPage = () => {
    const { login } = useContext(AuthContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from || "/"

    // ✅ کنترل سایز صفحه
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const handleLogin = (e) => {
        e.preventDefault()
        if (username && password) {
            const userData = { name: username, email: `${username}@example.com` }
            login(userData)
            navigate(from, { replace: true })
        } else {
            alert("لطفاً نام کاربری و رمز عبور را وارد کنید")
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
                <h1 className="lg:text-5xl text-2xl shadow-black shadow-3xl font-bold text-[#8D5215] dark:text-[#DF7F1D]">ورود به حساب کاربری</h1>

                <form className="mt-[100px] lg:space-y-4 mx-6 flex flex-col gap-2" onSubmit={handleLogin}>
                    <input type="text" className="bg-white dark:text-[#DF7F1D] border text-xl border-[#ED8F44] py-[23px] px-10 rounded-[30px] w-full max-w-[450px] placeholder:text-[#DF7F1D]" placeholder="نام کاربری" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" className="bg-white dark:text-[#DF7F1D] border text-xl border-[#ED8F44] py-[23px] px-10 rounded-[30px] w-full max-w-[450px] placeholder:text-[#DF7F1D]" placeholder="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="bg-[#ED8F44] text-xl text-white py-[23px] px-10 rounded-[30px] w-full max-w-[450px] hover:bg-[#ED8F44]/90 dark:text-white">
                        ورود
                    </button>
                </form>

                <p className="mt-4 text-xl max-lg:text-black  dark:max-lg:text-shadow-amber-50/30 shadow-2xl dark:text-white text-[#8D5215]">
                    ثبت‌نام نکرده‌اید؟
                    <Link to="/signup" className=" max-lg:text-black  text-[#4D2B09] dark:text-white hover:underline">
                        اینجا کلیک کنید
                    </Link>
                </p>
            </div>

            {/* عکس فقط در lg نمایش داده شود */}
            <img src={loginbg} alt="loginbg" className="hidden lg:block lg:w-[640px] lg:h-[680px] xl:w-[840px] xl:h-[880px]" />
        </div>
    )
}

export default LoginPage
