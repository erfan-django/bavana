import { useState, useEffect } from "react"
import Button from "./common/button"
import SunIcon from "../assets/icons/sun.svg?react"
import MoonIcon from "../assets/icons/moon.svg?react"

const ThemeToggle = () => {
    const [theme, setTheme] = useState(null)

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
        document.documentElement.classList.toggle("dark", newTheme === "dark")
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
            setTheme(savedTheme)
            document.documentElement.classList.toggle("dark", savedTheme === "dark")
        }
    }, [])

    if (theme === null) return null

    return (
        <div>
            <Button onClick={toggleTheme} className="hidden lg:flex justify-center items-center bg-[#ED8F44] rounded-full w-[50px] h-[50px] px-2 py-1 ml-3  shadow-amber-600 hover:shadow-xl/20">
                {theme === "light" ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
            </Button>

            <Button onClick={toggleTheme} className="flex lg:hidden justify-center items-center bg-[#ED8F44] rounded-full w-auto px-4 py-2 ml-3 shadow-amber-600 hover:shadow-xl/20 gap-2">
                {theme === "light" ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
                <span className="dark:text-black text-white">{theme === "light" ? "حالت تاریک" : "حالت روشن"}</span>
            </Button>
        </div>
    )
}

export default ThemeToggle
