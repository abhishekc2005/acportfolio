import ChetanImage from "../assets/ChetanYadav.jpeg";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import { Mail } from "lucide-react";
import { Linkedin } from "lucide-react";

const Intro = () => {
  return (
    <section className="flex flex-row">
      <div>
        <img src={ChetanImage} alt="Chetan_Yadav" className="w-20" />
      </div>
      <div>
        {/* name, basic about, social buttons */}
        <h1>Chetan Yadav</h1>
        <p>Full Stack Developer & UI Designer</p>
        <div>
          <ul>
            <li>
              <a
                href="https://github.com/Chetan0724"
                target="_blank"
                rel="noopener noreferrer"
                className="border"
              >
                <Github />
                <span>Github</span>
              </a>
            </li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intro;
