import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Nav from '../components/Nav/Nav';
import carInside from './../../public/static/img/carInside.jpeg';
import logo from './../../public/static/img/logo.png';
import H2 from '../components/Typography/H2/H2';
import { colors } from '../utils/colors';
import facebook from '../../public/icons/facebook.png';

const AboutContainer = styled.div`
    position: relative;
    background-color: ${colors.black};
    width: 90%;
    height: 100vh;
    margin: 0 auto;
    box-shadow: 0px 0px 50px rgba(29,37,47,0.8);
    overflow-x: hidden;

    @media (max-width: 1100px) {
        width: 100%;
    }
`

const NavContainer = styled.div`
    width: 100%;
    position: relative;
`

const IframeContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 2.5rem;
    height: 25rem;
    display: flex;
    @media (max-width: 500px) {
        padding-top: 400px;
    }
`

const StyledArticle = styled.article`
    width: 100%;
    padding: 0 3rem 0 3rem;
    position: relative;

    @media (max-width: 500px) {
        padding: 0 1rem;
    }

    @media (max-width: 360px) {
        padding: 0 0.2rem;
    }
`

const StyledImg = styled.img`
    width: 100%;
    min-height: 50vh;
    max-height: 50rem;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);

    @media (max-width: 500px) {
        display: none;
    }
`


const StyledLogo = styled.img`
    width: 15rem;
    z-index: 100;
    top: 5%;
    left: 5%;
    height: 15rem;
    position: absolute;
    z-index: 10;

    @media (max-width: 720px) {
        top: 25%;
        width: 10rem;
        height: 10rem;
    }

    @media (max-width: 500px) {
        z-index: 5;
        margin-top: 100px;
        height: 30rem;
        width: 30rem;
        left: 50%;
        transform: translateX(-50%);
    }
`

const StyledLink = styled(props => <Link {...props}/>)`
    color: ${colors.primary};
    text-decoration: none;
    width: 100%;
    height: 100%;
`

const P = styled.p`
    font-size: 2rem;
    color: ${colors.white};
    margin: 0 auto;
    padding-top: 2rem;
    text-align: left;
    width: 90%;
    line-height: 1.3;

    @media (max-width: 500px) {
        margin: 0 2px;
        font-size: 1.8rem;
        width: 95%;
    }
`

const Icon = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    left: 75px;
    bottom: -25px;

    @media (max-width: 500px) {
        bottom: -250px;
        left: 35px;
    }

    @media (max-width: 400px) {
        bottom: -250px;
        left: 5px;
    }
`

class ContactPage extends Component {
    render() {
        return (
            <Layout>
                <AboutContainer>
                <NavContainer>
                    <StyledLink to="/"><StyledLogo src={logo}/></StyledLink>
                    <Nav/>
                    <StyledImg src={carInside}/>
                </NavContainer>
                <IframeContainer>
                    <StyledArticle>
                        <H2>Skontaktuj się z nami!</H2>
                        <P>Znajdziesz nas pod telefonem: 604 651 816</P>
                        <P>Poraj: ul. Okulickiego 1 <br></br>
                        Poniedziałek - Piątek 8:00 - 19:00 <br></br>
                        </P>
                        <P>Nie zapomnij polubić na facebook'u!</P>
                        <a href="https://www.facebook.com/pg/beststeam.autodetailing/photos/" rel="noopener noreferrer" target="_blank"><Icon src={facebook}></Icon></a>
                    </StyledArticle>
                </IframeContainer>

                </AboutContainer>
            </Layout>
        )
    }
}

export default ContactPage;