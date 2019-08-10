import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import before from '../../../public/static/img/beforeAfterphotos/before.jpg'
import after from '../../../public/static/img/beforeAfterphotos/after.jpg';
import before1 from '../../../public/static/img/beforeAfterphotos/before1.jpg';
import after1 from '../../../public/static/img/beforeAfterphotos/after1.jpg';
import before2 from '../../../public/static/img/beforeAfterphotos/before2.jpg';
import after2 from '../../../public/static/img/beforeAfterphotos/after2.jpg';
import carInside from '../../../public/static/img/carInside.jpeg';
import P2 from '../Typography/P/P2';

const descendImage = keyframes`
    0% {
        top: -100%;
        opacity: 0;
    }

    50% {
        top: -50%;
        opacity: 0.5;
    }

    100% {
        top: 0;
        opacity: 1;
    }
`

const StyledContainer = styled.div`
    width: 90%;
    height: 60rem;
    margin: 10rem auto 0 auto;
    overflow-y: hidden;
    background:    
        linear-gradient(
        rgba(229, 229, 229, 0.7), 
        rgba(229, 229, 229, 0.8)
      ), url(${carInside});
    `
const FlexContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const StyledImageBefore = styled.img`
    width: 35rem;
    height: 35rem;
    position: absolute;
    z-index: 5;
`

const StyledImageAfter = styled.img`
    width: 35rem;
    height: 35rem;
    position: absolute;
    z-index: 0;
`

const ImgContainer = styled.div`
    position: relative;
    margin-top: -10rem;
    height: 35rem;
    width: 35rem;

    &:hover ${StyledImageAfter} {
        z-index: 10;
        animation: ${descendImage} .5s linear;
    }
`

const ChangeToggle = () => {
        return (
                <StyledContainer>
                    <P2>Najedź na obrazek i poczuj różnicę</P2>
                    <FlexContainer>
                        <ImgContainer>                
                            <StyledImageBefore src={before}/>
                                <StyledImageAfter src={after}/>
                        </ImgContainer>
                        <ImgContainer>
                            <StyledImageBefore src={before1}/>
                            <StyledImageAfter src={after1}/>
                        </ImgContainer>
                        <ImgContainer>
                            <StyledImageBefore src={before2}/>
                            <StyledImageAfter src={after2}/>
                        </ImgContainer>
                    </FlexContainer>
                </StyledContainer>
        )
}

export default ChangeToggle;