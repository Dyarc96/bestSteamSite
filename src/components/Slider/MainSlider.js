import React, { Component } from 'react';
// import { window, document } from 'browser-monads';
import Nav from '../Nav/Nav';
import logo from '../../../public/static/img/logo.png';
import styled from 'styled-components';
import first from '../../../public/static/img/sliderPhotos/1.jpg';
import firstSmall from '../../../public/static/img/sliderPhotos/1-small.jpg';
import second from '../../../public/static/img/sliderPhotos/2.jpg'
import secondSmall from '../../../public/static/img/sliderPhotos/2-small.jpg';
import third from '../../../public/static/img/sliderPhotos/3.jpg';
import thirdSmall from '../../../public/static/img/sliderPhotos/3-small.jpg';

const StyledContainer = styled.div`
    position: relative;
    margin: 0 auto;
    outline: none;
`

const StyledLogo = styled.img`
    width: 15rem;
    z-index: 100;
    top: 5%;
    left: 5%;
    height: 15rem;
    position: absolute;
    z-index: 0;

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

const StyledImg = styled.img`
    width: 100%;
    min-width: 1300px;
    
    @media (max-width: 720px) {
        height: 296px;
        max-width: 720px;
        margin: 20px 0;
      }
`

const DisplayContainer = styled.div`
    height: 100%;
    width: 100%;
    display: block;
`

// Modus operandi
// We need to move it from render to componentDidMount

export default class MainSlider extends Component {

    state = { width: null, render: false }

    componentDidMount() {
        this.setState({ width: window.innerWidth, render: true });
        if (typeof window !== 'undefined') {
            console.log(`Location: ${window.location.href}`);
          }
    }

    render() {
        if (typeof window !== 'undefined') {
            let iInnerHeight = window.innerHeight;
          }
    
        const { render } = this.state.render;

        const srcSetter1 = () => {
            if (this.state.width <= 725) {
                return firstSmall
            } else {
                return first
            }
        }
    
        const srcSetter2 = () => {
            if (this.state.width <= 725) {
                return secondSmall
            } else {
                return second
            }
        }
    
        const srcSetter3 = () => {
            if (this.state.width <= 725) {
                return thirdSmall
            } else {
                return third
            }
        }
    
        const displayStyle = {
            display: 'block'
        }
    
        const notDisplayStyle = {
            display: 'none'
        }
    
        const displayTrigger = () => {
            if (this.state.width < 500) {
                return notDisplayStyle
            } else {
                return displayStyle
            }
        }

        const settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            fade: true,
            easing: 'ease-in',
            speed: 1000
        };
        
        if({render}) {
            return (
                <div>
                <StyledContainer>
                    <SliderContainer>
                        <StyledLogo src={logo}/>
                        <Nav/>
                        <DisplayContainer style={displayTrigger()}>
                        <StyledImg src={srcSetter1()}></StyledImg>
                        {/* <Slider {...settings}>
                            <div>
                                <StyledImg src={srcSetter1()}/>
                            </div>
                            <div>
                                <StyledImg src={srcSetter2()}/>
                            </div>
                            <div>
                                <StyledImg  src={srcSetter3()}/>
                            </div>
                        </Slider> */}
                        </DisplayContainer>
                    </SliderContainer>
                </StyledContainer>
                </div>
            )
        } else {
            return null
        }
            
    }
}