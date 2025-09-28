import logoImage from "../assets/logo-1.png"
const Logo = () => {
    return (
        <div className="flex justify-center items-center lg:mr-3 lg:ml-[30px] lg:w-[138px] lg:h-[46px]">
            <img src={logoImage} alt="logo" width={170} height={56} />
        </div>
    )
}

export default Logo
