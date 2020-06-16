import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Container, Section, Flex } from "../global"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "images" }, name: { eq: "goodman" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <StyledSection>
      <AboutContainer id="about">
        <AboutTitle>About</AboutTitle>
        <Container>
          <Flex>
            <ImageWrapper>
              <StyledImage fluid={data.file.childImageSharp.fluid} />
              <br />
            </ImageWrapper>
            <div>
              <p>Nicole is the founder of Goodman Analytics. She has over 10 years of experience consulting for companies in the healthcare, technology, industrial, and consumer goods industries. Prior to starting Goodman Analytics, she worked at DuckerFrontier/Frontier Strategy Group where she led dozens of analytics consulting engagements for large multinational corporations all over the world. In addition to leading consulting projects, she was responsible for creating, maintaining, and expanding a database of economic data, pulling in data on a monthly basis from over 60 different sources, and partnering with country experts to continually forecast the data series. Her expertise includes working with large, economic data sets, time series forecasting, R and SQL programming, data visualization, and partnering with multiple stakeholders from diverse backgrounds. Prior to joining DuckerFrontier/FSG, Nicole was an analyst at comScore where she analyzed online traffic data and a statistical analyst at BioStat Solutions where she analyzed genetic SNP data. Nicole holds a bachelor’s degree in statistics and economics and a master’s degree in statistical practice, both from Carnegie Mellon University.</p>
              <FormSubtitle>
                <FormSubtitleLink href="https://www.linkedin.com/in/nicole-goodman-120b6718/">View my profile on LinkedIn</FormSubtitleLink>
              </FormSubtitle>
            </div>
          </Flex>
        </Container>
      </AboutContainer>
    </StyledSection>
  )
}




export default About

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const AboutContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const AboutTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`

const FormSubtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  margin-top: 12px;
  display: flex;
`

const FormSubtitleLink = styled.a`
  color: ${props => props.theme.color.secondary};
  padding-bottom: 1px;
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.color.secondary};
`

const ImageWrapper = styled.div`
  justify-self: center;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 320px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 220px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 120px;
    display: none;
  }
`
