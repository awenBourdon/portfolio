import React, { useState } from "react";
import Dropdown from "../Dropdown";
import Header from "../Header/Header";
import scrollDownImage from '../assets/scroll_down.svg';
import photo from "../assets/photo.webp"
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hey ! Moi c'est Awen</h1>
            <h5>Développeur Fullstack</h5>
            <p>
              Je vous accompagne de A à Z pour créer vos produits Web.
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src={photo}
              alt="photo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scrollez
            <img
              src={scrollDownImage}
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;