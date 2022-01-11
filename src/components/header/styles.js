import styled from "styled-components";
import {ReactComponent as LogoSVG} from '../../assets/logo.svg'

export const HeaderContainer = styled.header`
  width: 100vw;
  height: auto;
  padding: 0;
  margin: 0;
`

export const Logo = styled(LogoSVG)`
  width: 100%;
  height: auto;
  mix-blend-mode: difference;
  filter: invert(1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  transform: scaleY(1);
  transform-origin: 0 0;
  transition: all 1s ease-in-out;
`

export const Intro = styled.div`
  margin-top: calc(100vw - 85%);
  padding: 0 24px;
  max-width: 756px;

`
