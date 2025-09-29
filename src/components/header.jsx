import { useState } from "react"
import Logo from "./Logo"
import NavMenu from "./nav-menu"
import SearchBar from "./search-bar"
import AuthButtons from "./auth-buttons"
import ThemeToggle from "./theme-toggle"
import SearchBtn from "./common/search-btn"
import HamburgerIcon from "../assets/icons/humberger-icon.svg?react" // SVG همبرگری خودت

const Header = ({ isAuthenticated, setIsAuthenticated, user, setUser }) => {
    console.log("Header props:", { isAuthenticated, setIsAuthenticated, user, setUser })

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="flex justify-between items-center lg:gap-[7%] h-[98px] bg-[#FDF6F0] dark:bg-[#251D16] px-4">
            {/* حالت موبایل */}
            <div className="flex justify-between items-center w-full md:hidden">
                <button onClick={toggleMenu}>
                    <HamburgerIcon className="w-11 py-2 px-2 h-11 flex justify-center items-center  rounded-full bg-[#ED8F44] text-white dark:text-[#251D16]" />
                </button>
                <div>
                    <Logo />
                </div>

                <AuthButtons isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} user={user} setUser={setUser} className="" />
            </div>

            {/* منوی موبایل (بازشونده) */}
            {isMenuOpen && (
                <div className="fixed flex gap-8 flex-col  inset-0 bg-white dark:bg-[#251D16] z-50 p-4 md:hidden">
                    <button onClick={toggleMenu} className="absolute top-4 right-4">
                        <HamburgerIcon className="w-6 h-6 text-[#8D5215] dark:text-[#DF7F1D]" />
                    </button>
                    <Logo />
                    <NavMenu isAuthenticated={isAuthenticated} onLinkClick={() => setIsMenuOpen(false)} />
                    <ThemeToggle />
                </div>
            )}

            {/* حالت دسکتاپ */}
            <div className="hidden md:flex items-center w-full">
                <div className="flex items-center w-50% lg:basis-[50%]">
                    <Logo />
                    <NavMenu isAuthenticated={isAuthenticated} />
                </div>
                <div className="flex items-center w-50% lg:basis-[48%]">
                    <SearchBar />
                    <div className="hidden lg:flex bg-white rounded-full w-[35px] h-[35px] z-10 relative right-[-166px] xl:right-[-436px] justify-center items-center cursor-pointer">
                        <SearchBtn />
                    </div>
                    <AuthButtons isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} user={user} setUser={setUser} />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}

export default Header
