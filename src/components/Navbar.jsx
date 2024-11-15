
import logo from "../assets/methon.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className="mb-15 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href=""><img className="mx-1 w-4/12" src={logo} alt="Methon" /></a>
            </div>
            <div className="m-8 flex item-center justify-center gap-4 text-2xl">
                <a href="https://linkedin.com/in/methon" target="_blank"><FaLinkedin /></a>
                <a href="https://github.com/nimethon" target="_blank"><FaGithub /></a>
                <a href="https://x.com/Methon_" target="_blank"><FaTwitterSquare /></a>
                <a href="https://www.facebook.com/nimethon/" target="_blank"><FaFacebookSquare /></a>
                <a href="https://www.instagram.com/ni._.methon/" target="_blank"><FaInstagram /></a>
            </div>
        </nav>

    );
};

export default Navbar;
