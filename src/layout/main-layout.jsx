import { Outlet } from "react-router-dom"
import Header from "../components/header"
import Footer from "../components/footer"

const MainLayout = () => {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <div className="@container dark:bg-[#251D16] bg-[#FDF6F0] w-full xl:w-[90%] max-w-[1440px] mx-auto flex-0 justify-center items-center flex flex-col">
                <Header />
                <main className="flex-1 mt-[100px]">
                    <div className="mx-auto">
                        <Outlet />
                    </div>
                </main>
                <Footer className="mx-auto" />
            </div>
        </div>
    )
}

export default MainLayout
