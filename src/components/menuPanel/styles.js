import styled from "styled-components";
import {ReactComponent as LogoSVG} from '../../assets/logo.svg'
import {ReactComponent as ArrowSVG} from '../../assets/arrow2.svg'
import {ReactComponent as CloseSVG} from '../../assets/close.svg'

export const MenuPanelContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #E9FC9E;
  color: #110346;

  font-size: 28px;
  font-family: 'Neptun-NordMedium', sans-serif;
  font-weight: 300;
  line-height: 1;
  letter-spacing: .2pt;

  overflow: overlay;
  z-index: 15;
  transform: translateX(${({state}) => (state === 'entering' || state === 'entered' ? '0' : '-100%')});
  transition: transform 0.7s ease-in-out;

  @media (max-width: 450px) {
    font-size: 22px;
  }
`

export const Logo = styled(LogoSVG)`
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
`

export const Close = styled(CloseSVG)`
  width: 88px;
  cursor: pointer;
  position: fixed;
  bottom: 24px;
  right: 24px;

  @media (max-width: 450px) {
    width: 66px;
    bottom: 0;
    right: 16px;
  }
`
export const Arrow = styled(ArrowSVG)`
  width: 40px;
  height: auto;
  margin-left: 8px;

  @media (max-width: 450px) {
    width: 26px;
  }
`
