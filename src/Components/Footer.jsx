import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-image: url(https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/footer_wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    left: 3rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;

function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          Créer avec ❤️ par{" "}
          <a
            href="https://www.linkedin.com/in/awen-bourdon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Awen Bourdon
          </a>{" "}
          © 2024
      </span>
      </div>
    </FooterSection>
  );
}

export default Footer;