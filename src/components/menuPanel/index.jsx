import { MenuPanelContainer } from "./styles"
import { Logo } from "./styles"
import { Intro } from "../header/styles"
import { Link, Arrow } from "../container/styles"
import { H2, P } from "../../styles"
import { Close } from "./styles"

const menuPanel = ({setNavbarOpen}) => {

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <MenuPanelContainer>
      <Logo />
      <Intro>
        <P>Originally from Paris, I graduated from the full-stack web development bootcamp @ Le Wagon Barcelona.</P>
        <P>Highly skilled in Design and Communication, I worked as a Graphic Designer freelance in the past 8 years.</P>
        <P>Feel free to say hi, I’m always open for collaborations.</P>
        <Link>
          <H2>Email-me</H2><Arrow />
        </Link>
        <Link>
          <H2>Linkedin</H2><Arrow />
        </Link>
        <Link>
          <H2>Github</H2><Arrow />
        </Link>
      </Intro>

      <Close onClick={closeMenu}/>
    </MenuPanelContainer>
  )
}

export default menuPanel
