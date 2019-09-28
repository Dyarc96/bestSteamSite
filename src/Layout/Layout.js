import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 56.5%
  }
  
  body {
    padding: 0;
    margin: 0;
    font-family: Montserrat, sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const StyledWrapper = styled.div`
  height: 100%;
  position: relative;
  background: #fff; 

  `

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
        <>
          <GlobalStyle/>
            <StyledWrapper>
                {children}
            </StyledWrapper>
        </>
        </ThemeProvider>
    )
}

export default Layout;