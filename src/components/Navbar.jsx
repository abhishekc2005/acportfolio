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
                `hover:text-blue-500 ${
                  isActive ? "text-black font-medium" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-blue-500 ${
                  isActive ? "text-black font-medium" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                `hover:text-blue-500 ${
                  isActive ? "text-black font-medium" : ""
                }`
              }
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `hover:text-blue-500 ${
                  isActive ? "text-black font-medium" : ""
                }`
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-blue-500 ${
                  isActive ? "text-black font-medium" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row gap-3">
        <button className="border cursor-pointer rounded-md border-gray-300 px-1.5 py-1.5">
          <Moon size={17} strokeWidth={2} />
          {/* <Sun /> */}
        </button>
        <a href="" className="flex flex-row border rounded border-gray-300 px-2 justify-center items-center gap-0.5">
          <Download size={17} strokeWidth={2} /> <span>Resume</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
