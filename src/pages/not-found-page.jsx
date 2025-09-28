import React from "react"
import err from "../assets/404err.png"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center mt-20 gap-6">
            <img src={err} alt="Error 404 - Page Not Found" className="" />
            <h1 className="text-[#8D5215] text-4xl ">این صفحه پیدا نشد !</h1>
            <p className="mt-4 text-xl opacity-50">
                برای پیدا کردن مسیر درست ،
                <Link to="/" className="text-[#FA9C3A] hover:underline mr-1">
                    اینجا کلیک کن
                </Link>
            </p>
        </div>
    )
}

export default NotFoundPage
