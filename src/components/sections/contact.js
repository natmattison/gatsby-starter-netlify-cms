import React from "react"
import styled from "styled-components"

import { Container, Section } from "../global"
import ContactForm from "./contactForm"

const Contact = () => (
  <StyledSection>
    <ContactContainer id="contact">
      <ContactTitle>Contact</ContactTitle>
      <ContactForm/>
    </ContactContainer>
  </StyledSection>
)

export default Contact

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const ContactContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const ContactTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`
