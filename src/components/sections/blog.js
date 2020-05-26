import React from "react"
import styled from "styled-components"
import BlogRoll from "../BlogRoll"
import { Container, Section } from "../global"

const Blog = () => (
  <StyledSection>
    <BlogContainer id="blog">
      <BlogTitle>Blog</BlogTitle>
      <BlogRoll />
    </BlogContainer>
  </StyledSection>
)

export default Blog

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
`

const BlogContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const BlogTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`

