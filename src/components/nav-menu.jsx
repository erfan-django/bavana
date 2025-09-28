import { useState, useContext } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "./auth-context"

const links = [
    { name: "خانه", href: "/" },
    { name: "اتاق من", href: "/myroom" },
    { name: "درباره ما", href: "/about-us" },
    { name: "تماس با ما", href: "/contact-us" },
]

const NavMenu = ({ onLinkClick }) => {
    const { isAuthenticated } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false)

    const handleLinkClick = (link) => {
        if (link.href === "/myroom" && !isAuthenticated) {
            setShowModal(true)
            setTimeout(() => {
                setShowModal(false)
                navigate("/login")
                if (onLinkClick) onLinkClick()
            }, 1000)
        } else {
            if (onLinkClick) onLinkClick()
        }
    }

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-[#251D16] p-6 rounded-lg shadow-lg text-center">
                        <p className="text-lg text-[#8D5215] dark:text-[#DF7F1D]">ابتدا باید وارد شوید</p>
                    </div>
                </div>
            )}
            <nav className="flex gap-4 lg:gap-5 lg:flex-row flex-col mt-4">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href}
                        onClick={(e) => {
                            e.preventDefault()
                            handleLinkClick(link)
                            if (link.href !== "/myroom" || isAuthenticated) {
                                navigate(link.href)
                            }
                        }}
                        className={`text-lg transition-colors pb-1 px-1 lg:border-b-2
              ${location.pathname === link.href ? "border-[#8D5215] text-[#8D5215]" : "border-transparent text-gray-800 dark:text-[#DF7F1D]"}
              hover:text-[#8D5215]"`}>
                        {link.name}
                    </Link>
                ))}
            </nav>
        </>
    )
}

export default NavMenu
