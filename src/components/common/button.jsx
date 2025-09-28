const Button = ({ children, className, onClick, ...props }) => {
    return (
        <button className={`px-2 py-1 rounded font-medium transition-all duration-200 cursor-pointer ${className}`} onClick={onClick} {...props}>
            {children}
        </button>
    )
}

export default Button
