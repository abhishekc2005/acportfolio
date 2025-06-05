import { Link } from "react-router"
import ChetanImage from "../assets/ChetanProfile.jpg";

const About = () => {
  return (
    <>
    <Link to="/" >Back to Home</Link>
    <h3>About me</h3>
    <p>Get to know more about my journey, passion, and what drives me as a developer.</p>
    <img src={ChetanImage} alt="chetan_profile" />

    <h4>Hello, I'm Chetan Yadav</h4>
    <p>A passionate frontend developer and UI designer based in Indore, India. I specialize in creating beautiful, functional, and accessible web experiences that make a difference.</p>
    <p>Indore, India</p>
    <p>1+ year experience</p>
    </>
  )
}

export default About