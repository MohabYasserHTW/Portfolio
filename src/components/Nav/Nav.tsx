import React from "react";
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

function Nav({ width, isOpen }: any) {
  const navForBigDevices = (
    <aside className={`nav ${width > 1200 ? "show" : ""}`}>
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
          Home
        </div>
        <div>
          <CgProfile />
          About
        </div>
        <div>
          <GiSkills />
          Skills
        </div>
        <div>
          <RiProfileFill />
          Education & Work
        </div>
        <div>
          <BsCodeSlash />
          Projects
        </div>
        <div>
          <BiSolidContact />
          Contact
        </div>
      </div>
      <div className="footer">© Copyright Mohab Rageh</div>
    </aside>
  );

  const navForSmallDevices = isOpen?(
    <aside className="aside_smallDevices">
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
          Home
        </div>
        <div>
          <CgProfile />
          About
        </div>
        <div>
          <GiSkills />
          Skills
        </div>
        <div>
          <RiProfileFill />
          Education & Work
        </div>
        <div>
          <BsCodeSlash />
          Projects
        </div>
        <div>
          <BiSolidContact />
          Contact
        </div>
      </div>
      <div className="footer">© Copyright Mohab Rageh</div>
    </aside>
  ):null;
  if (width > 1200) {
    return navForBigDevices;
  } else {
    return navForSmallDevices;
  }
}

export default Nav;
