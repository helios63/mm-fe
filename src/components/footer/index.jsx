import { H2 } from '../../styles'
import { Arrow, Link } from "../container/styles"
import { FooterContainer } from "./styles"

const Footer = () => {
  return (
    <FooterContainer>
      <a href="http://design.mondetmaxi.me" target="_blank" rel="noreferrer">
        <Link>
          <H2>I'm also a designer</H2>
          <Arrow />
        </Link>
      </a>
    </FooterContainer>
  )
}

export default Footer
