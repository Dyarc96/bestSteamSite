import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import logo from '../../../public/static/img/logo.png';
import styled from 'styled-components';
import Slide from './Slide';
import './sliderClasses.css';

const StyledContainer = styled.div`
    position: relative;
    margin: 0 auto;
    outline: none;
    overflow: hidden;
`

const StyledLogo = styled.img`
    width: 15rem;
    z-index: 100;
    top: 5%;
    left: 5%;
    height: 15rem;
    position: absolute;
    z-index: 5;

    @media (max-width: 720px) {
        top: 25%;
        width: 10rem;
        height: 10rem;
    }

    @media (max-width: 500px) {
        height: 30rem;
        width: 30rem;
        left: 50%;
        top: 25%;
        transform: translateX(-50%);
    }
`

const SliderContainer = styled.div`
    width: 100%;
    height: 55vh;
    overflow: hidden;
    @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        text-align: center;
    }
`

const DisplayContainer = styled.div`
    height: 100%;
    width: 100%;
    display: block;

    @media (max-width: 500px) {
        display: none;
    }
`
const s = {
    container: "fullW fullH rel overflowH",
    onScreen: "left0",
    offScreenRight: "left100",
    offScreenLeft: "leftM100",
    transition: "transition1l"
};

export default class MainSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide1: {
                id: 0,
                position: s.onScreen,
                transition: true
            }, 
            slide2: {
                id: 1,
                position: s.offScreenRight,
                transition: true
            }
        }
    }

    componentDidMount() {
        this.startCarousel();
    }

    startCarousel = () => {
        this.carouselInterval = setInterval(() => {
            this.transitionSlides();
        }, 4000);
    };

    componentWillUnmount() {
        clearInterval(this.carouselInterval);
    }

    transitionSlides = () => {
        const { slide1, slide2 } = this.state;
        if (slide1["position"] === s.onScreen) {
            slide1["position"] = s.offScreenLeft;
            slide2["position"] = s.onScreen;
        } else {
            slide1["position"] = s.onScreen;
            slide2["position"] = s.offScreenLeft;
        }
        this.setSlideState(slide1, slide2 );
        setTimeout(() => {
            this.resetSlideOffScreen();
        }, 1000);
    };

    setSlideState = (slide1, slide2, currentId) => {
        this.setState({
            slide1: slide1,
            slide2: slide2,
            currentId: currentId
        });
    };

    resetSlideOffScreen = () => {
        const { slide1, slide2 } = this.state;
        if (slide1["position"] === s.offScreenLeft) {
            slide1["transition"] = false;
            slide1["position"] = s.offScreenRight;
        } else {
            slide2["transition"] = false;
            slide2["position"] = s.offScreenRight;
        }
        this.setSlideState(slide1, slide2);
        this.resetSlideTransitions(slide1, slide2);
    }

    resetSlideTransitions = (slide1, slide2) => {
        setTimeout(() => {
            slide1["transition"] = true;
            slide2["transition"] = true;
            this.setSlideState(slide1, slide2);
        }, 500);
    }

    render() {
        const { slide1, slide2 } = this.state;
        const { slides } = this.props;

            return (
                <div>
                <StyledContainer>
                    <SliderContainer>
                        <StyledLogo src={logo}/>
                        <Nav/>
                        <DisplayContainer className="display-container">
                            <Slide image={slides[slide1.id]}
                                   position={slide1.position}
                                   transition={slide1.transition ? s.transition : ""}
                            />
                            <Slide 
                                   image={slides[slide2.id]}
                                   position={slide2.position}
                                   transition={slide2.transition ? s.transition : ""}
                            />
                        </DisplayContainer>
                    </SliderContainer>
                </StyledContainer>
                </div>
            )
    }
}