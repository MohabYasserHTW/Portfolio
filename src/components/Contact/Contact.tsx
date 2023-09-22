import React, { useEffect } from "react";
import Section from "../Section/Section";
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { AiOutlineMobile, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import "./Contact.css";
import "aos/dist/aos.css";
import Aos from "aos";
export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Section sectionTitle={"Contact"}>
      <p
        className="contact_text"
        id="contact"
        data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-delay="100"
      >
        I would greatly appreciate the opportunity to connect with you.
      </p>
      <div className="contact_div">
        <div
          className="contact_info"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="100"
        >
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
        <div
          className="contact_form"
          data-aos="fade-down"
          data-aos-duration="3000"
          data-aos-delay="100"
        >
          <form onSubmit={(e) => e.preventDefault()}>
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
              <textarea name="message" id=""></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Section>
  );
}
