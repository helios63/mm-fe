import styled from "styled-components";
import {ReactComponent as MenuImg1SVG} from '../../assets/menu-img1.svg'
import {ReactComponent as MenuImg2SVG} from '../../assets/menu-img2.svg'

export const MenuContainer = styled.div`
  width: 88px;
  height: 88px;
  position: fixed;
  bottom: 24px;
  right: 24px;
  cursor: pointer;
  z-index:15;

  @media (max-width: 450px) {
    width: 66px;
    height: 66px;
    bottom: 24px;
    right: 16px;
  }
`

export const MenuImg1 = styled(MenuImg1SVG)`
  width: 88px;
  height: 88px;

  @media (max-width: 450px) {
    width: 66px;
    height: 66px;
  }
`

export const MenuImg2 = styled(MenuImg2SVG)`

  @keyframes menu {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  width: 36px;
  position: relative;
  bottom: 66px;
  left: 26px;
  animation: 15s linear infinite menu;

  @media (max-width: 450px) {
    width: 28px;
    bottom: 55px;
    left: 20px;
  }

`
