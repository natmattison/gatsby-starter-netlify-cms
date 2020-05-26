import styled from "styled-components"

import theme from "../../styles/theme"

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${theme.screen.lg}) {
    max-width: 1200px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`

export const Section = styled.section`
  padding: 80px 0;
  overflow: hidden;
  background-color: ${props => {
    switch (props.accent) {
      case "secondary":
        return theme.color.white.dark
      case "main":
        return theme.color.primary
      default:
        return "white"
    }
  }};

  @media (max-width: ${theme.screen.md}) {
    padding: 80px 0;
  }

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === "secondary"
        ? theme.color.white.dark
        : theme.color.primary
    }`};
`

export const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`
