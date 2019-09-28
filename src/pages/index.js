import React from "react";
import Layout from '../Layout/Layout';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import MainSlider from '../components/Slider/MainSlider';
import BeforeAfterSlider from '../components/Slider/BeforeAfterSlider';
import H1 from '../components/Typography/H1/H1';
import P from '../components/Typography/P/P1';
import Span from '../components/Span/Span';
import carInside from './../../public/static/img/carInside.jpeg';
import eye from './../../public/icons/eye.png';
import heart from './../../public/icons/heart-outline.png';
import userTie from './../../public/icons/manager.png';
import first from '../../public/static/img/sliderPhotos/1.jpg';
import second from '../../public/static/img/sliderPhotos/2.jpg'
import third from '../../public/static/img/sliderPhotos/3.jpg';
import '../components/Slider/sliderClasses.css';

const slides = [first, second, third];

const IndexContainer = styled.div`
  background-color: ${colors.black};
  width: 90%;
  height: 100%;
  margin: 0 auto;
  box-shadow: 0px 0px 50px ${colors.lightGray};
  @media (max-width: 1100px) {
    width: 100%;
  }
`

const BeforeAfterContainer = styled.div`
  position: relative;
  margin: 25px auto 0 auto;
  background-color: ${colors.whitish};
  padding: 40px;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  background:    
      linear-gradient(
      ${colors.backgroundFilter1},
      ${colors.backgroundFilter2}, 
    ), url(${carInside});

  @media (max-width: 800px) {
    padding: 10px;
    height: 300px;
  }

  @media (max-width: 500px) {
    padding: 0;
    height: 250px;
  }
`

const AttributesContainer = styled.div`
  position: relative;
  margin: 25px auto 0 auto;
  background-color: ${colors.whitish};
  padding: 40px;
  display: flex;
  height: 400px;
  justify-content: space-around;
  

  @media (max-width: 720px) {
    height: 500px;
    flex-wrap: wrap;
    height: 100%;
    margin: 10px auto;
  }
  
`

const IconContainer = styled.div`
  position: relative;
  height: 250px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: space-around;

  @media (max-width: 720px) {
    width: 250px;
    margin-top: 25px;
  }

  @media (max-width: 400px) {
    margin: 20px 0;
  }
`

const Icon = styled.img`
  position: absolute;
  height: 50px;
  width: 50px;
  margin-top:10px;
`

const ImgContainer = styled.div`
 overflow: hidden;
 width: 90%;
 margin: 0 auto;
 display: flex;
 justify-content: center;

  @media (max-width: 800px) {
    width: 500px;
    height: 300px;
  }

  @media (max-width: 520px) {
    width: 400px;
    height: 250px;
  }

  @media (max-width: 450px) {
    width: 100%;
    overflow: hidden;
  }
`

const H = styled.h2`
  color: ${colors.black};
  font-size: 20px;
  text-align: center;
  position: absolute;
  top: 25%;
`


const P1 = styled.p`
  color: ${colors.paragraphGray};
  font-size: 16px;
  text-align: left;
  position: absolute;
  top: 35%;
  padding: 15px;
  @media (max-width: 720px) {
    padding: 10px;
  }
`

const IndexPage = () => {

  return (
    <Layout>
      <IndexContainer>
      <MainSlider slides={slides}/>
      <H1>Best<Span>Steam</Span> Autodetailing</H1>
      <P>Co nas wyróznia</P>
      <AttributesContainer>
        <IconContainer>
          <Icon src={eye}></Icon>
          <H>Dokładność</H>
          <P1> Każda oferowana przez nas usługa jest wykonanywana z najwyższą jakością. Zajmujemy się szczegółowo każdym elementem w samochodzie i posiadamy wiedzę o czyszczeniu różnego rodzaju powierzchni, takich jak metal, szkło czy skóra.</P1>
        </IconContainer>
        <IconContainer>
          <Icon src={heart}></Icon>
          <H>Pasja</H>
          <P1>Auto detailing to nasza pasja. Każdy samochód jest traktowany jakby miał być używany przez nas.
              Nie uznajemu kompromisów w zakresie poświęconego czasu i pracy.
          </P1>
        </IconContainer>
        <IconContainer>
          <Icon src={userTie}></Icon>
          <H>Profesjonalizm</H>
          <P1>Cechuje nas pełen profesjonalizm. Posiadamy wieloletnie doświadczenie w pielęgnacji samochodów.
            Korzystamy z preparatów najwyższej klasy.
          </P1>
        </IconContainer>
      </AttributesContainer>
      <P>Jak to robimy?</P>
      <BeforeAfterContainer>
        <ImgContainer>
          <BeforeAfterSlider/>
        </ImgContainer>

      </BeforeAfterContainer>
      </IndexContainer>
    </Layout>
  )
}

export default IndexPage;
