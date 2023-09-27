import React, { useEffect } from "react";
import "./Nav.css";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
  AiOutlineHome,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { GiSkills } from "react-icons/gi";
import { RiProfileFill } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import "aos/dist/aos.css";
import Aos from "aos";

function Nav({ width, isOpen, setIsOpen }: any) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const navForBigDevices = (
    <aside
      className={`nav ${width > 1000 ? "show" : ""}`}
      data-aos="fade-right"
      data-aos-duration="3000"
      data-aos-delay="100"
    >
      <img src="imgs/meOnAtos.jpg" alt="me" />
      <h3>Mohab Rageh</h3>
      <div className="nav_icons">
        <a target="blank" href="https://www.linkedin.com/in/mohab-rageh-090079275/" >
        <AiFillLinkedin />
        </a>
        <a target="blank" href="https://github.com/MohabYasserHTW">
        <AiFillGithub />
        </a>
        <a target="blank" href="mailto:mohabrageh3@gmail.com">
        <SiGmail />
        </a >
        <a target="blank" href="https://api.whatsapp.com/send?phone=01050930033">

        <AiOutlineWhatsApp />
        </a>
      </div>
      <div className="nav_elements">
        <div>
          <AiOutlineHome />
          <a href="#home" onClick={()=>{setIsOpen(!isOpen)}}>Home</a>
        </div>
        <div>
          <CgProfile />
          <a onClick={()=>{setIsOpen(!isOpen)}} href="#about">About</a>
        </div>
        <div>
          <GiSkills />
          <a onClick={()=>{setIsOpen(!isOpen)}} href="#skills">Skills</a>
        </div>
        <div>
          <RiProfileFill />
          <a onClick={()=>{setIsOpen(!isOpen)}} href="#education">Education & Work</a>
        </div>
        <div>
          <BsCodeSlash />
          <a onClick={()=>{setIsOpen(!isOpen)}} href="#projects">Projects</a>
        </div>
        <div>
          <BiSolidContact />
          <a onClick={()=>{setIsOpen(!isOpen)}} href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer">© Copyright Mohab Rageh</div>
    </aside>
  );

  const navForSmallDevices = isOpen ? (
    <aside
      className="aside_smallDevices"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-delay="100"
    >
      <img src="imgs/meOnAtos.jpg" alt="me" />
      <h3>Mohab Rageh</h3>
      <div className="nav_icons">
        <a target="blank" href="https://www.linkedin.com/in/mohab-rageh-090079275/">
        <AiFillLinkedin />
        </a>
        <a target="blank" href="https://github.com/MohabYasserHTW">
        <AiFillGithub />
        </a>
        <a target="blank" href="mailto:mohabrageh3@gmail.com">
        <SiGmail />
        </a >
        <a target="blank" href="https://api.whatsapp.com/send?phone=01050930033">

        <AiOutlineWhatsApp />
        </a>
      </div>
      <div className="nav_elements">
        <div>
          <AiOutlineHome />
          <a onClick={()=>{setIsOpen(!isOpen)}} href="#home">Home</a>
        </div>
        <div>
          <CgProfile />
          <a onClick={()=>{setIsOpen(!isOpen)}} href="#about">About</a>
        </div>
        <div>
          <GiSkills />
          <a onClick={()=>{setIsOpen(!isOpen)}} href="#skills">Skills</a>
        </div>
        <div>
          <RiProfileFill />
          <a onClick={()=>{setIsOpen(!isOpen)}} href="#education">Education & Work</a>
        </div>
        <div>
          <BsCodeSlash />
          <a onClick={()=>{setIsOpen(!isOpen)}} href="#projects">Projects</a>
        </div>
        <div>
          <BiSolidContact />
          <a onClick={()=>{setIsOpen(!isOpen)}} href="#contact">Contact</a>
        </div>
      </div>
      <div className="footer">© Copyright Mohab Rageh</div>
    </aside>
  ) : null;
  if (width > 1000) {
    return navForBigDevices;
  } else {
    return navForSmallDevices;
  }
}

export default Nav;
