import React from 'react'
import { Helmet } from 'react-helmet'
import './all.sass'
import Navigation from './navigation/navigation'
import useSiteMetadata from './SiteMetadata'
import "../../static/fonts/fonts.css"

import { ThemeProvider } from "styled-components"

import theme from "../../styles/theme"
import GlobalStyles from "../../styles/GlobalStyles"
import ReactGA from 'react-ga';

ReactGA.initialize('UA-167215828-1');
ReactGA.pageview(window.location.pathname);

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="https://goodmananalytics.com" />
      </Helmet>
      <GlobalStyles />
      <Navigation />
      <div>{children}</div>
    </ThemeProvider>
  )
}

export default TemplateWrapper
