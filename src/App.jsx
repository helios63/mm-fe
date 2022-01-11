import React, { useState } from "react"
import GlobalStyle from "./styles";
import Header from "./components/header";
import Menu from "./components/menu";
import Container from "./components/container";
import MenuPanel from "./components/menuPanel";

const App = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <>
    <GlobalStyle />
      <Header />
      <Menu onClick={handleToggle} />
      <MenuPanel className={`${navbarOpen ? " showMenu" : ""}`}/>
      <Container />
    </>
  );
}

export default App;
