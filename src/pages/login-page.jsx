import { useState, useContext } from "react"
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
        <div className="dark:bg-[#251D16] h-dvh lg:bg-white flex justify-center lg:justify-between pr-0 lg:pr-10 bg-cover bg-center lg:bg-none" style={{ backgroundImage: `url(${mobilebg})` }}>
            <div className="mt-[156px] flex flex-col items-center w-[90%] max-w-[500px]">
                <h1 className="text-5xl font-bold text-[#8D5215] dark:text-[#DF7F1D]">ورود به حساب کاربری</h1>
                <form className="mt-[100px] space-y-4" onSubmit={handleLogin}>
                    <input type="text" className="border text-xl border-[#ED8F44] py-[23px] px-10 rounded-[30px] w-full max-w-[450px] dark:text-white" placeholder="نام کاربری" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type="password" className="border text-xl border-[#ED8F44] py-[23px] px-10 rounded-[30px] w-full max-w-[450px] dark:text-white" placeholder="رمز عبور" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit" className="bg-[#ED8F44] text-xl text-white py-[23px] px-10 rounded-[30px] w-full max-w-[450px] dark:text-[#251D16] hover:bg-[#ED8F44]/90">
                        ورود
                    </button>
                </form>
                <p className="mt-4 text-xl text-[#8D5215] dark:text-white">
                    ثبت‌نام نکرده‌اید؟{" "}
                    <Link to="/signup" className="text-[#4D2B09] dark:text-white/70 hover:underline">
                        اینجا کلیک کنید
                    </Link>
                </p>
            </div>

            {/* عکس فقط در lg نمایش داده شود */}
            <img src={loginbg} alt="loginbg" className="hidden lg:block w-[840px] h-[880px]" />
        </div>
    )
}

export default LoginPage
