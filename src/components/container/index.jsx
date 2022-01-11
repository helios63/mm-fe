import React from "react";

import { BodyContainer, Project, ProjectIMG, Link, Arrow, Description } from "./styles";
import { H2 } from "../../styles";
import planetExchange from '../../assets/planet-exchange.jpg';

const Container = () => {
  return (
    <BodyContainer>
      <Project>
          <a href="http://planetexchange.org" target="_blank" rel="noreferrer">
            <ProjectIMG src={planetExchange}/>
            <Link>
              <H2>planetexchange.org</H2>
              <Arrow />
            </Link>
          </a>
        <Description>Mobile website to connect people who wants to save money, space and the planet. Built in 2 weeks. My main responsibility was the Front-End development and Design conception of this mobile application.</Description>
      </Project>

      <Project>
        <ProjectIMG src={planetExchange}/>
        <Link>
          <H2>Link</H2>
          <Arrow />
        </Link>
        <Description>Description</Description>
      </Project>
    </BodyContainer>
  )
}

export default Container
