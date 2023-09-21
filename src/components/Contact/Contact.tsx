import React from "react";
import Section from "../Section/Section";
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { AiOutlineMobile, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import "./Contact.css";
export default function Contact() {
  return (
    <Section sectionTitle={"Contact"}>
      <p className="contact_text">
        i would be more than happy to get to know you
      </p>
      <div className="contact_div">
        <div className="contact_info">
          <div>
            <FaLocationDot />
            <div>
              <h2>Location:</h2>
              Shubra Elkhymaa, Cairo, Egypt
            </div>
          </div>
          <div>
            <SiGmail />
            <div>
              <h2>Email:</h2>
              mohabrageh3@gmail.com
            </div>
          </div>
          <div>
            <AiOutlineMobile />
            <div>
              <h2>Phone:</h2>
              01050930033, 01557320445
            </div>
          </div>
          <div>
            <AiFillLinkedin />
            <div>
              <h2>LinkedIn:</h2>
              Mohab Rageh
            </div>
          </div>
          <div>
            <AiFillGithub />
            <div>
              <h2>GitHub:</h2>
              MohabYasserHTW
            </div>
          </div>
        </div>
        <div className="contact_form">
          <form onSubmit={(e)=> e.preventDefault()}>
            
            <div>
              <label htmlFor="name">Your Name:</label>
              <br />
              <input type="text" name="name" />
            </div>

            <div>
              <label htmlFor="email">Your Email:</label>
              <br />
              <input type="email" name="email" />
            </div>
            <div>
              <label htmlFor="sub">Subject:</label>
              <br />
              <input type="text" name="sub" />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <br />
              <textarea name="message" id="" ></textarea>
            </div>
            <button type="submit">
                Submit
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
