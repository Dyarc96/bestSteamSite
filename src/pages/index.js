import React from "react";
import Layout from '../Layout/Layout';
import styled from 'styled-components';
import H1 from '../components/Typography/H1/H1';
import P from '../components/Typography/P/P1';
import MainSlider from '../components/Slider/MainSlider';
import Span from '../components/Span/Span';
import { colors } from '../utils/colors';
import eye from './../../public/icons/eye.png';
import heart from './../../public/icons/heart-outline.png';
import userTie from './../../public/icons/manager.png';
import before from '../../public/static/img/before.jpg';
import beforeSmall from '../../public/static/img/before-small.jpg';
import beforeExtraSmall from '../../public/static/img/before-extraSmall.jpg';
import afterExtraSmall from '../../public/static/img/after-extraSmall.jpg';
import after from '../../public/static/img/after.jpg';
import afterSmall from '../../public/static/img/after-small.jpg';
// import BeforeAfterSlider from 'react-before-after-slider';

const IndexContainer = styled.div`
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

const BeforeAfterContainer = styled.div`
  position: relative;
  margin: 25px auto 0 auto;
  background-color: ${colors.whitish};
  padding: 40px;

  @media (max-width: 800px) {
    padding: 10px;
    height: 300px;
  }

  @media (max-width: 500px) {
    width: 450px;
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

  @media (max-width: 800px) {
    width: 500px;
  }

  @media (max-width: 520px) {
    width: 400px;
  }

  @media (max-width: 450px) {
    width: 100%
  }
`

const BeforeBox = styled.div`
  position: absolute;
  width: 100px;
  height: 75px;
  background-color: ${colors.primary};
  clip-path: polygon(50% 0%, 100% 0, 95% 50%, 100% 100%, 0 100%, 5% 50%, 0 0);  
  color: white;
  top: 50%;
  left: 5%;
  z-index: 100;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-family: Helvetica;

  @media (max-width: 803px) {
    font-size: 15px;
    height: 50px;
    width: 60px;
    left: 12.5%;
  }

  @media (max-width: 680px) {
    margin-left: -38px;
  }

  @media (max-width: 430px) {
    display: none;
  }
`

const AfterBox = styled.div`
  position: absolute;
  width: 100px;
  height: 75px;
  background-color: ${colors.primary};
  clip-path: polygon(50% 0%, 100% 0, 95% 50%, 100% 100%, 0 100%, 5% 50%, 0 0);  
  color: white;
  top: 50%;
  left: 86%;
  z-index: 100;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-family: Helvetica;

  @media (max-width: 903px) {
    left: 84%;
  }

  @media (max-width: 803px) {
    font-size: 15px;
    height: 50px;
    width: 60px;
    left: 79%;
  }

  @media (max-width: 680px) {
    left: 80%
  }

  @media (max-width: 430px) {
    display: none;
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
  color: ${colors.gray};
  color: #636363;
  font-size: 16px;
  text-align: left;
  position: absolute;
  top: 35%;
  padding: 15px;
  @media (max-width: 720px) {
    padding: 10px;
  }
`

class IndexPage extends React.Component {
  state = { width: null }

  componentDidMount() {
      this.setState({ width: window.innerWidth });
        if (typeof window !== 'undefined') {
            console.log(`Location: ${window.location.href}`);
    }
  }
  render() {

  const handleWidthChange1 = () => {
      if (this.state.width >= 800) {
          return 1000
      } else if (this.state.width < 800){
          return 500
      } else if (this.state.width < 500) {
        return 300
      }
  }

  const handleWidthChange2 = () => {
    if (this.state.width >= 800) {
        return 500
    } else if (this.state.width < 800) {
        return 250
}
  }

  const handleWidthChangeSrc1 = () => {
      if (this.state.width >=800) {
          return before
      } else if (this.state.width < 800) {
          return beforeSmall
      } else if (this.state.width < 500) {
        return beforeExtraSmall
      }
  }

  const handleWidthChangeSrc2 = () => {
        if (this.state.width >= 800) {
          return after
      } else if (this.state.width < 800) {
          return afterSmall
      } else if (this.state.width < 500) {
        return afterExtraSmall
      }
    }

  return (
    <Layout>
      <IndexContainer>
      <MainSlider/>
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
        {/* <BeforeBox>Przed</BeforeBox>
        <ImgContainer>
        <BeforeAfterSlider
        before={handleWidthChangeSrc1()}
        after={handleWidthChangeSrc2()}
        width={handleWidthChange1()}
        height={handleWidthChange2()}
        />
        <AfterBox>Po</AfterBox>
        </ImgContainer> */}

      </BeforeAfterContainer>
      </IndexContainer>
    </Layout>
  )
  }
}

export default IndexPage;
