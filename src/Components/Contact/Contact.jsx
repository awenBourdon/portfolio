import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Travaillons ensemble</div>
        <div className="BigCard">
          <Email>
            <span>awen.bourdon@gmail.com</span>
            <a
              className="btn PrimaryBtn"
              href="mailto:awen.bourdon@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Me Contacter
            </a>
          </Email>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;