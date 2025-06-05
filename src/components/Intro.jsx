import ChetanImage from "../assets/ChetanProfile.jpg";
import { FiGithub } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";

const Intro = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row ">
        <div>
          <img
            src={ChetanImage}
            alt="Chetan_Yadav"
            className="w-32 rounded-md"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Chetan Yadav</h1>
          <p className="text-gray-500">Frontend Developer & UI Designer</p>
          <ul className="flex flex-row gap-5">
            <li className="border border-gray-300 rounded-sm">
              <a
                href="https://github.com/Chetan0724"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row justify-center items-center px-2 py-1 font-semibold gap-1 hover:bg-gray-100 text-sm"
              >
                <FiGithub />
                Github
              </a>
            </li>
            <li className="border border-gray-300 rounded-sm">
              <a
                href="https://github.com/Chetan0724"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row justify-center items-center px-2 py-1 font-semibold gap-1 hover:bg-gray-100 text-sm"
              >
                <CiTwitter />
                Twitter
              </a>
            </li>
            <li className="border border-gray-300 rounded-sm">
              <a
                href="https://github.com/Chetan0724"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row justify-center items-center px-2 py-1 font-semibold gap-1 hover:bg-gray-100 text-sm"
              >
                <FiLinkedin />
                LinkedIn
              </a>
            </li>
            <li className="border border-gray-300 rounded-sm">
              <a
                href="https://github.com/Chetan0724"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row justify-center items-center px-2 py-1 font-semibold gap-1 hover:bg-gray-100 text-sm"
              >
                <CiMail />
                Email
              </a>
            </li>
          </ul>
        </div>
      </section>
      <hr className="text-gray-200" />
    </>
  );
};

export default Intro;
