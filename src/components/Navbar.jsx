import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Download } from "lucide-react";
import { NavLink } from "react-router-dom";
import LogoImage from "../assets/logo.png";

const Navbar = () => {
  return (
    <header className="flex flex-row h-16 sticky top-0 bg-white/70 backdrop-blur-sm border-b border-gray-300 items-center">
      <img src={LogoImage} alt="logo" className="w-5 h-5" />
      <nav>
        <ul className="flex flex-row gap-3">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
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
