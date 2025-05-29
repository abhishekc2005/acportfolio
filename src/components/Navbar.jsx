import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Download } from "lucide-react";
import { NavLink, Link } from "react-router";
import LogoImage from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="flex flex-row h-16 sticky top-0 bg-white/70 backdrop-blur-sm border-b border-gray-300 items-center justify-around">
      <Link to="/">
      <img src={LogoImage} alt="logo" className="w-[30px] rounded" />
      </Link>
      <nav>
        <ul className="flex flex-row gap-3 text-gray-500">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-blue-500 ${isActive ? "text-black font-medium" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-blue-500 ${isActive ? "text-black font-medium" : ""}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `hover:text-blue-500 ${isActive ? "text-black font-medium" : ""}`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-blue-500 ${isActive ? "text-black font-medium" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row">
        <button className="border cursor-pointer">
          <Moon />
          {/* <Sun /> */}
        </button>
        <a href="" className="flex flex-row border">
          <Download /> <span>Resume</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
