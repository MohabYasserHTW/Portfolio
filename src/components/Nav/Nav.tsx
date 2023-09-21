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
      className={`nav ${width > 1200 ? "show" : ""}`}
      data-aos="fade-right"
      data-aos-duration="3000"
      data-aos-delay="100"
    >
      <img src="imgs/meOnAtos.jpg" alt="me" />
      <h3>Mohab Rageh</h3>
      <div className="nav_icons">
        <AiFillLinkedin />
        <AiFillGithub />
        <SiGmail />
        <AiOutlineWhatsApp />
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
      <img src="/imgs/meOnAtos.jpg" alt="me" />
      <h3>Mohab Rageh</h3>
      <div className="nav_icons">
        <AiFillLinkedin />
        <AiFillGithub />
        <SiGmail />
        <AiOutlineWhatsApp />
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
  if (width > 1200) {
    return navForBigDevices;
  } else {
    return navForSmallDevices;
  }
}

export default Nav;
