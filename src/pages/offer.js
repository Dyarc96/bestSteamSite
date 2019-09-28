import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Nav from '../components/Nav/Nav';
import carInside from './../../public/static/img/carInside.jpeg';
import logo from './../../public/static/img/logo.png';
import { colors } from '../utils/colors';
import  felga  from '../../public/static/img/offerPhotos/felga.jpg';
import korektaLakieru from '../../public/static/img/offerPhotos/korektaLakieru.jpg';
import powloka from '../../public/static/img/offerPhotos/powloka.jpeg';
import tapicerka from '../../public/static/img/offerPhotos/tapicerka.jpg';
import lakier  from '../../public/static/img/offerPhotos/lakier.jpg';


const AboutContainer = styled.div`
    position: relative;
    background-color: ${colors.black};
    width: 90%;
    height: 100%;
    margin: 0 auto;
    box-shadow: 0px 0px 50px rgba(29,37,47,0.8);
    @media (max-width: 1100px) {
        width: 100%;
    }
`

const NavContainer = styled.div`
    width: 100%;
    position: relative;
`


const PhotoContainer = styled.div`
    position: relative;
    width: 310px;
    height: 207px;
    margin: 25px;
    overflow: hidden;

`

const PhotosContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 40px 40px 0 40px;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
        padding: 400px 10px 10px 10px;
    }
`

const HeadingContainer = styled.div`
    position: absolute;
    height: 50px;
    width: 100%;
    bottom: 0;
    background: ${colors.black};
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    transition: transform 0.5s ease-in-out;

    ${PhotoContainer}:hover &  {
        transform: translateX(-100%);
    }

    @media (max-width: 500px) {
        z-index: 5;
    }
`

const PhotoHeading = styled.h3`
    font-size: 25px;
    color:  #f7d20d;
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
`

const StyledImg = styled.img`
    width: 100%;
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


const PhotoMask = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${colors.black};
    left: 100%;
    transition: transform 0.5s ease-in-out;
    display: flex;
    align-items: center;

    ${PhotoContainer}:hover &  {
        background-color: ${colors.primary};
        opacity: 0.9;
        z-index: 100;
        transform: translateX(-100%);
    }
`

const MaskP = styled.p`
    font-size: 19px;
    color: ${colors.white};
    padding: 10px;
`

const Photo = styled.img`
    position: absolute;
    overflow: hidden;
    z-index: 5;
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
                <PhotosContainer>
                    <PhotoContainer>
                        <Photo src={powloka}></Photo>
                        <HeadingContainer>
                            <PhotoHeading>powłokowanie</PhotoHeading>
                        </HeadingContainer>
                        <PhotoMask>
                            <MaskP>
                            Powłoki przez nas oferowane są starannie wyselekcjonowane i przetestowane, charakteryzuje je największa odporność na uszkodzenia mechaniczne, trwałość i hydrofobowość. 
                            </MaskP>
                        </PhotoMask>
                    </PhotoContainer>
                    <PhotoContainer>
                        <Photo src={lakier}></Photo>
                        <HeadingContainer>
                            <PhotoHeading>polerownie lakieru</PhotoHeading>
                        </HeadingContainer>
                        <PhotoMask>
                            <MaskP>
                            Dzięki polerowaniu lakier odzyska swój połysk i głębie. Dzięki długiemu doświadczeniu gwarantujemy Państwu wykonanie profesjonalnej usługi.
                            </MaskP>
                        </PhotoMask>
                    </PhotoContainer>
                    <PhotoContainer>
                        <Photo src={tapicerka}></Photo>
                        <HeadingContainer>
                            <PhotoHeading>czyszczenie i pranie tapicerki</PhotoHeading>
                        </HeadingContainer>
                        <PhotoMask>
                            <MaskP>
                            Czyszczenie tapicerki wykonujemy z użyciem preparatów najwyższej klasy, które gwarantują skuteczność i dostosowane są do struktury i rodzaju materiału, z jakiego wykonane są fotele, czy podsufitka.
                            </MaskP>
                        </PhotoMask>
                    </PhotoContainer>
                    <PhotoContainer>
                        <Photo src={korektaLakieru}></Photo>
                        <HeadingContainer>
                            <PhotoHeading>Korekcja lakieru</PhotoHeading>
                        </HeadingContainer>
                        <PhotoMask>
                            <MaskP>
                            Gwarantujemy usunięcie maksymalnej ilości uszkodzeń przy minimalnej ingerencji w lakier i zachowaniu bezpieczeństwa powierzchni.
                            </MaskP>
                        </PhotoMask>
                    </PhotoContainer>
                    <PhotoContainer>
                        <Photo src={felga}></Photo>
                        <HeadingContainer>
                            <PhotoHeading>polerowanie felg</PhotoHeading>
                        </HeadingContainer>
                        <PhotoMask>
                            <MaskP>
                            Dzięki polerowaniu felgi odzyska swój połysk. Dzięki długiemu doświadczeniu gwarantujemy Państwu wykonanie profesjonalnej usługi.
                            </MaskP>
                        </PhotoMask>
                    </PhotoContainer>
                </PhotosContainer>
                </AboutContainer>
            </Layout>
        )
    }
}

export default AboutPage;