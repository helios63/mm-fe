import React from "react";
import { MenuContainer, MenuImg1, MenuImg2 } from "./styles";

const Menu = ({openMenu}) => {
  return (
    <MenuContainer onClick={openMenu}>
      <MenuImg1 />
      <MenuImg2 />
    </MenuContainer>
  )
}

export default Menu
