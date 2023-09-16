import React from "react";
import "./navbar.css"
import logo from "../../assets/pk.png"
import { Link } from "react-scroll"
import contactimg from "../../assets/contact.png"

const Navbar = () => {
    return <div>
        <nav id="nav-menu">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <Link id="home" className="desktopMenuList">Home</Link>
                <Link id="about" className="about section desktopMenuList">About</Link>
                <Link id="skills" className="desktopMenuList">Skills</Link>
                <Link id="projects" className="desktopMenuList">Projects</Link>
            </div>
            <button className="desktopMenuBtn" id="contact">
                <img src={contactimg} alt="" className="desktopMenuImg" />Contact Me</button>
        </nav>
    </div>
}
export default Navbar;