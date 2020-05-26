import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"

const Services = () => (
  <StyledSection>
    <ServicesContainer id="services">
      <ServicesTitle>Services</ServicesTitle>
      <ServicesText>
        All engagements are entirely custom and designed in partnership with my clients. Generally, these projects may include one or more of the following steps:
        <h5>Data discovery</h5>
        What can I learn from the data I have?<br/> How can I manage my data more effectively?<br/> What analyses may be appropriate for the data I am collecting?<br/> What additional pieces of information may be relevant for a particular type of analysis?
        <h5>Statistical analysis</h5>
        Are there trends or patterns in my data that I can learn from?<br/>Are there different ways to think about a cost / benefit analysis?<br/> What parts of my data are most meaningful?
        <br/><br/><i>Specific methodologies may include:</i>
        <ul>
          <li>Regression analysis</li>
          <li>Time series forecasting</li>
          <li>Classification or cluster analysis</li>
          <li>Supervised or unsupervised learning</li>
        </ul>
        <h5>Interpretation</h5>
        What exactly do the statistical results mean for my business?<br/>What recommendations can you provide based on these results?
        <h5>Data visualization</h5>
        What is the best way to visualize and monitor my data going forward?
        <br/><br/><i>Specific processes may include:</i>
        <ul>
          <li>Dashboard tool selection</li>
          <li>Dashboard creation & maintenance</li>
        </ul>
        <h5>Stakeholder management</h5>
        How can I effectively communicate the technical results to key stakeholders in my business?
      </ServicesText>
    </ServicesContainer>
  </StyledSection>
)

export default Services

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const ServicesContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const ServicesTitle = styled.h3`
  margin: 0 auto 32px;
`

const ServicesText = styled.span`
  color: ${props => props.theme.color.primary};
  max-width: 600px;
  font-family: ${props => props.theme.font.italic};
  margin-left: 16px;
  margin-right: 16px;

  h5 {
    text-align:center;
    ${props => props.theme.font_size.regular};
    font-family: ${props => props.theme.font.bold};
    line-height: 22px;
    margin: 30px auto 20px;
  }
`
