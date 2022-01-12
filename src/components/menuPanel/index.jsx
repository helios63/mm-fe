import React from "react"
import { MenuPanelContainer } from "./styles"
import { Logo } from "./styles"
import { Intro } from "../header/styles"
import { Link } from "../container/styles"
import { H2, P } from "../../styles"
import { Close, Arrow } from "./styles"

const menuPanel = ({closeMenu, state}) => {

  return (
    <MenuPanelContainer state={state}>
      <Logo />
      <Intro>
        <P>Originally from Paris, I graduated from the full-stack web development bootcamp @ Le Wagon Barcelona.</P>
        <P>Highly skilled in Design and Communication, I worked as a Graphic Designer freelance in the past 8 years.</P>
        <P>Feel free to say hi, I’m always open for collaborations.</P>
        <a href="mailto:hello@mondetmaxi.me" target="_blank" rel="noreferrer">
          <Link>
            <H2>Email-me</H2><Arrow />
          </Link>
        </a>
        <a href="https://www.linkedin.com/in/maxime-mondet/" target="_blank" rel="noreferrer">
          <Link>
            <H2>Linkedin</H2><Arrow />
          </Link>
        </a>
        <a href="https://github.com/helios63" target="_blank" rel="noreferrer">
          <Link>
            <H2>Github</H2><Arrow />
          </Link>
        </a>
      </Intro>

      <Close onClick={closeMenu} state={state}/>
    </MenuPanelContainer>
  )
}

export default menuPanel
