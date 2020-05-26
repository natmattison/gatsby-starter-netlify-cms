import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Header = () => {

  return (
    <HeaderWrapper id="top">
      <StyledContainer>
        <HeaderTextGroup>
          <h1>
            Goodman Analytics
          </h1>
          <h2>
            Nicole Goodman, finding and monitoring untapped value in your datasets using the best statistical and data science techniques
          </h2>
        </HeaderTextGroup>
      </StyledContainer>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 160px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`
const StyledContainer = styled(Container)``

const HeaderTextGroup = styled.div`
  margin: 0;
  padding-bottom: 100px;
  text-align: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    text-align: left;
  }


  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
    margin-left: auto;
    margin-right: auto;
    max-width: 680px;
  }

  p {
    margin-bottom: 48px;
  } 
`

