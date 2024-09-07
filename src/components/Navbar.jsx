
import logo from "../assets/methon.png"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaTwitterSquare} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

const Navbar = () => {
    return (
        <nav className="mb-15 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href=""><img className="mx-1 w-4/12" src={logo} alt="Methon" /></a>
            </div>
            <div className="m-8 flex item-center justify-center gap-4 text-2xl">
                <a href=""><FaLinkedin /></a>
                <a href=""><FaGithub /></a>
                <a href=""><FaTwitterSquare /></a>
                <a href=""><FaInstagram /></a>
            </div>
        </nav>

    );
};

export default Navbar;