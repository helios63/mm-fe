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
  max-width: 480px;
  padding: 12px 0;

`
