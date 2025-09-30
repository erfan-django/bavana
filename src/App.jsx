import { Routes, Route } from "react-router-dom"
import "./app.css"
import LoginPage from "./pages/login-page"
import SignupPage from "./pages/sign-up-page"
// import ReservationPage from "./pages/reservation"
import MainLayout from "./layout/main-layout"
import HomePage from "./pages/home"
import MyRoomPage from "./pages/my-room-page"
import NotFoundPage from "./pages/not-found-page"
import RoomDetailPage from "./pages/room-details-page"
import UserProfilePage from "./pages/user-profile-page"
import AboutUs from "./pages/about-us"
import ContactUs from "./pages/contact-us"
import { AuthProvider } from "./components/auth-provider"
import { PlaylistProvider } from "./components/playlist-context"
import PlaylistPlayer from "./components/playlist-player"

const App = () => {
    return (
        <AuthProvider>
            <PlaylistProvider>
                <div className="relative dark:bg-[#251D16] bg-[#FDF6F0">
                    <PlaylistPlayer />
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<HomePage />} />
                            <Route path="myroom" element={<MyRoomPage />} />
                            <Route path="room/:id" element={<RoomDetailPage />} />
                            <Route path="about-us" element={<AboutUs />} />
                            <Route path="contact-us" element={<ContactUs />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Route>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        {/* <Route path="/reservation" element={<ReservationPage />} /> */}
                        <Route path="/user-profile" element={<UserProfilePage />} />
                    </Routes>
                </div>
            </PlaylistProvider>
        </AuthProvider>
    )
}

export default App
