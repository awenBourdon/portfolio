import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
background-image: url("data:image/svg+xml,%3Csvg width='1200' height='300' viewBox='0 0 1200 300' fill='none' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cg clip-path='url(%23clip0_13079_77)'%3E%3Crect width='1200' height='300' fill='%23E5E1D5'/%3E%3Crect width='1200' height='300' fill='url(%23pattern0_13079_77)'/%3E%3Cpath d='M-56 49C-56 49 538 35.84 778 349C1018 662.16 31 349 31 349L-60 224L-56 49Z' fill='%23111111'/%3E%3C/g%3E%3Cdefs%3E%3Cpattern id='pattern0_13079_77' patternContentUnits='objectBoundingBox' width='1' height='1'%3E%3Cuse xlink:href='%23image0_13079_77' transform='scale(0.000833333 0.00333333)'/%3E%3C/pattern%3E%3CclipPath id='clip0_13079_77'%3E%3Crect width='1200' height='300' fill='white'/%3E%3C/clipPath%3E%3Cimage id='image0_13079_77' width='1200' height='300' xlink:href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAEsAQMAAADpc9gTAAAAAXNSR0IB2cksfwAAAANQTFRF+vr/3HgtZgAAAENJREFUeJztwTEBAAAAwqD1T20ND6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgEcDsPQAAfqwblsAAAAASUVORK5CYII='/%3E%3C/defs%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 2rem;
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