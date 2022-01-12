import styled from "styled-components";
import { Logo } from "../menuPanel/styles";

export const HeaderContainer = styled.header`
  width: 100vw;
  height: auto;
  padding: 0;
  margin: 0;
`

export const LogoHome = styled(Logo)`
  mix-blend-mode: difference;
  filter: invert(1);
  transform: scaleY(1);
  transform-origin: 0 0;
  transition: all 1s ease-in-out;
`

export const Intro = styled.div`
  margin-top: calc(100vw - 85%);
  padding: 0 24px;
  max-width: 756px;

  @media (max-width: 450px) {
    margin-top: 90px;
    padding: 0 16px;
  }

`
