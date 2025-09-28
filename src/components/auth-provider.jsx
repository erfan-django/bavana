import { useState, useEffect } from "react"
import { AuthContext } from "./auth-context"

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    // بازیابی وضعیت لاگین از localStorage هنگام بارگذاری اولیه
    useEffect(() => {
        const storedAuth = localStorage.getItem("isAuthenticated")
        const storedUser = localStorage.getItem("user")
        if (storedAuth === "true" && storedUser) {
            setIsAuthenticated(true)
            setUser(JSON.parse(storedUser))
        }
    }, [])

    const login = (userData) => {
        setIsAuthenticated(true)
        setUser(userData)
        localStorage.setItem("isAuthenticated", "true")
        localStorage.setItem("user", JSON.stringify(userData))
    }

    const logout = () => {
        setIsAuthenticated(false)
        setUser(null)
        localStorage.removeItem("isAuthenticated")
        localStorage.removeItem("user")
        localStorage.removeItem("lastReservation")
    }

    return <AuthContext.Provider value={{ isAuthenticated, user, login, logout, setIsAuthenticated, setUser }}>{children}</AuthContext.Provider>
}
