import { forwardRef } from "react"
import Hamburger from "../assets/icons/humberger-icon.svg?react"

const HamburgerIcon = forwardRef((props, ref) => <Hamburger ref={ref} {...props} />)

export default HamburgerIcon
