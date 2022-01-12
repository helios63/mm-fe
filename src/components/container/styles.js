import styled from "styled-components";
import {ReactComponent as ArrowSVG} from '../../assets/arrow.svg'

export const BodyContainer = styled.main`
  margin: 0 auto;
  max-width: 1392px;
  padding: 0 24px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 450px) {
    padding: 0 16px;
  }
`

export const Project = styled.div`
  max-width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 96px;

  @media (max-width: 450px) {
    margin-bottom: 48px;
  }
`

export const ProjectIMG = styled.img`
  width: 100%;
  object-fit: cover;
`

export const Link = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 24px 0;

  @media (max-width: 450px) {
    padding: 8px 0;
  }
`

export const Arrow = styled(ArrowSVG)`
  width: 40px;
  height: auto;
  margin-left: 8px;

  @media (max-width: 450px) {
    width: 32px;
  }
`

export const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`

export const Text = styled.div`
  max-width: 480px;
  margin-right: 12px;

  @media (max-width: 450px) {
    margin-right: 0;
  }
`

export const Stacks = styled.div`

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    font-family: 'Neptun-NordMedium', sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 1.4;
    list-style: none;
  }

  @media (max-width: 450px) {
    padding-top: 24px;
  }
`
