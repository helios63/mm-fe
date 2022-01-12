import React, { useState } from "react"
import GlobalStyle from "./styles";
import Header from "./components/header";
import Menu from "./components/menu";
import Container from "./components/container";
import MenuPanel from "./components/menuPanel";
import Footer from "./components/footer";
import { Transition } from 'react-transition-group'

const App = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const openMenu = () => {
    setNavbarOpen(true)
  }

  const closeMenu = () => {
    setNavbarOpen(false)
  }

  return (
    <>
    <GlobalStyle />
      <Header />
      <Menu openMenu={openMenu}/>
      <Transition in={navbarOpen} timeout={500}>
        {(state) => <MenuPanel closeMenu={closeMenu} state={state}/>}
      </Transition>
      <Container />
      <Footer />
    </>
  );
}

export default App;
