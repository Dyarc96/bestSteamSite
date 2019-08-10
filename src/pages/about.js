import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Nav from '../components/Nav/Nav';
import carInside from './../../public/static/img/carInside.jpeg';
import logo from './../../public/static/img/logo.png';
import H2 from '../components/Typography/H2/H2';
import { colors } from '../utils/colors';

const AboutContainer = styled.div`
    position: relative;
    background-color: ${colors.black};
    width: 90%;
    height: 100%;
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
    display: flex;
    padding: 10px;
    justify-content: space-around;

    @media (max-width: 1100px) {
        flex-wrap: wrap;
    }

    @media (max-width: 500px) {
        padding-top: 400px;
    }
`

const StyledArticle = styled.article`
    padding: 0 1rem 0 1rem;
    flex-basis: 40%;

    @media (max-width: 1100px) {
        flex-basis: 100%;
        margin-bottom: 40px;
    }
`

const StyledImg = styled.img`
    min-width: 100%;
    height: 60vh;
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

const Iframe = styled.iframe`
    

@media (max-width: 1100px) {
    margin: 0 auto;
    width: 100%;
}
`

const P = styled.p`
    font-size: 2rem;
    color: ${colors.white};
    margin: 0 auto;
    padding-top: 2rem;
    text-align: left;
    width: 90%;
    line-height: 1.3;

    @media (max-width: 1000px) {
        flex-basis: 100%;
    }
`

class AboutPage extends Component {
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
                        <H2>Kim jesteśmy?</H2>
                        <P>Świadczymy usługi w zakresie kompleksowej auto kosmetyki, mycia, prania tapicerki, profesjonalnego polerowania lakieru, regeneracji lamp, przygotowania aut pod sprzedaż i wiele innych. Stosujemy powłoki ochronne ceramiczne i kwarcowe.</P>
                        <P>
                        Współpracujemy z różnymi firmami. Myjemy floty samochodowe, dezynfekujemy karetki, czyścimy hale i urzadzenia przemyslowe, pierzemy wykładziny, czyścimy płytki na dużych obiektach hotele biura itp.
                        </P>
                        <P>
                         Zajmujemy się równiez zleceniami niestandardowymi takimi jak: 
                        mycie elewacji, ogrodzeń, kostki brukowej, usuwamy graffiti i wiele innych. Pracujemy tylko na najlepszym sprzęcie i kosmetykach żeby nasza praca była najwyższej jakości a Nasi Klienci zadowoleni.
                        Zapraszam do polubień i udostepniania naszej strony i na skorzystanie z naszych usług.
                        Punkt stacionarny autodetailingu w Poraju przy ulicy Okulickiego 1.
                        </P>
                    </StyledArticle>
                    <Iframe width="50%" height="500" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Okulickiego%201%2C%20Poraj+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/map-my-route/">Create a route on google maps</a></Iframe>

                </IframeContainer>
                </AboutContainer>
            </Layout>
        )
    }
}

export default AboutPage;