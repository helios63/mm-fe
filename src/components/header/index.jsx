import React from "react";
import { HeaderContainer, LogoHome, Intro } from "./styles";
import { H1 } from "../../styles"


const Header = () => {

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos < 80) {
      document.getElementById("logo").style.transform = "scaleY(1)";
    } else {
      document.getElementById("logo").style.transform = "scaleY(0.5)";
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <HeaderContainer>
      <LogoHome id="logo"/>
      <Intro>
        <H1>Maxime Mondet<br/>Front-end Developer</H1>
      </Intro>
    </HeaderContainer>
  )
}

export default Header
