import styled from "styled-components";
import {ReactComponent as LogoSVG} from '../../assets/logo.svg'
import {ReactComponent as CloseSVG} from '../../assets/close.svg'

export const MenuPanelContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #E9FC9E;
  color: #110346;

  font-size: 36px;
  font-family: 'Neptun-NordMedium', sans-serif;
  font-weight: 300;
  line-height: 1;
  letter-spacing: .2pt;

  overflow: overlay;
  z-index: 15;
  transform: translateY(-100%);

`

export const Logo = styled(LogoSVG)`
  width: 100%;
  height: auto;
  position: fixed;
  filter: invert(1);
  mix-blend-mode: difference;
  top: 0;
  left: 0;

`

export const Close = styled(CloseSVG)`
  width: 88px;
  mix-blend-mode: difference;
  filter: invert(1);
  position: fixed;
  bottom: 24px;
  right: 24px;
`
