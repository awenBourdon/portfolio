import React from "react";
import { stackList } from "../assets/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">À Propos</div>
        <div className="BigCard">
          <Image
            src=""
            alt=""
          />
          <div className="AboutBio">
            Enchanté, moi c'est <strong>Awen</strong> . Après cinq années de bons et loyaux services en restauration, j'ai pris la décision de me reconvertir dans l'informatique. Actuellement, je suis en formation à Ada Tech School à Nantes pour préparer un diplôme de développeur.
          </div>
          <div className="AboutBio tagline2">
            Mes stacks :
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;