import styled from 'styled-components';
import React from 'react';
import { colors } from '../../utils/colors';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
// import logo from './../../public/static/img/logo.png';

const NavBar = styled.nav`
    position: absolute;
    top: 70%;
    right: 2.5%;
    height: 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;

    @media (max-width: 720px) {
        right: 0;
        width: 100%;
        top: 0;
    }

`

const StyledList = styled.ul`
  display: flex;
  background: ${colors.black};
  height: 100%;
  opacity: .85;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 720px) {
    position: absolute;
    width: 100%;
    top: 0;
    opacity: 1;
    margin: 0;
}
`

const StyledListItem = styled.li`
  color: ${colors.primary};
  text-transform: uppercase;
  list-style: none;
  display: inline;
  font-size: 2rem;
  margin: 5rem;

  @media (max-width: 720px) {
    display: none;
}
`


const HamburgerIcon = styled.div`
    display: none;

    @media (max-width: 720px) {
        display: inline-block;
    }
    
`

const Bar1 = styled.div`
    width: 35px;
    height: 5px;
    background-color: ${colors.white};
    margin: 6px 0;
    transition: 0.4s;
`
const Bar2 = styled.div`
    width: 35px;
    height: 5px;
    background-color: ${colors.white};
    margin: 6px 0;
    transition: 0.4s;

    ${HamburgerIcon}:checked &  {
        opacity: 0;
    }
`
const Bar3 = styled.div`
    width: 35px;
    height: 5px;
    background-color: ${colors.white};
    margin: 6px 0;
    transition: 0.4s;
`


const StyledLink = styled(props => <Link {...props}/>)`
    color: ${colors.primary};
    text-decoration: none;
`
const StyledHref = styled.a`
    color: ${colors.primary};
    text-decoration: none;
`



class Nav extends React.Component {
    showSettings(event) {
        event.preventDefault();

    }

    render() {

        var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '35px',
    top: '20px'
  },
  bmBurgerBars: {
    background: 'white'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#0b0b0b',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    marginTop: '-32px'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}



        return (
            <>
            <NavBar>
                <StyledList>
                    <StyledListItem><StyledLink to="/about">o nas</StyledLink></StyledListItem>
                    <StyledListItem><StyledHref href="https://www.facebook.com/pg/beststeam.autodetailing/photos/" target="_blank">galeria</StyledHref></StyledListItem>
                    <StyledListItem><StyledLink to="/offer">oferta</StyledLink></StyledListItem>
                    <StyledListItem><StyledLink to="/contact">kontakt</StyledLink></StyledListItem>
                </StyledList>

                <HamburgerIcon onClick={this.showSettings}>
                <Menu styles={styles} right>
                <StyledListItem><StyledLink className="menu-item" to="/about">o nas</StyledLink></StyledListItem>
                    <StyledListItem><StyledHref href="https://www.facebook.com/pg/beststeam.autodetailing/photos/" target="_blank">galeria</StyledHref></StyledListItem>
                    <StyledListItem><StyledLink className="menu-item" to="/offer">oferta</StyledLink></StyledListItem>
                    <StyledListItem><StyledLink className="menu-item" to="/contact">kontakt</StyledLink></StyledListItem></Menu>
                </HamburgerIcon>
            </NavBar>
            </>
        )
    }
}


export default Nav;