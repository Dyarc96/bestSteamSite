import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import after from '../../../public/static/img/after.jpg';
import before from '../../../public/static/img/before.jpg';
import ReactCompareImage from 'react-compare-image';


const StyledContainer = styled.div`
    position: relative;
    overflow: hidden;
`

// const StyledBeforeImg = styled.img`
//     width: 80%;
//     display: block;
//     position: absolute;
//     height: 75%;
// `

const ResizeContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    overflow: hidden;
`

const Handle = styled.span`
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    margin-left: -2px;
    background: rgba(0, 0, 0, 0.5);
    cursor: ew-resize;

    &:after {
        position: absolute;
        top: 50%;
        width: 64px;
        height: 64px;
        margin: -32px 0 0 -32px;

        content: '';
        color: white;
        font-weight: bold;
        font-size: 36px;
        text-align: center;
        line-height: 64px;
        background: #ffb800;
        border: 1px solid #e6a600;
        border-radius: 50%;
        transition: all 0.3s ease;
        box-shadow:      
         0 2px 6px rgba(0,0,0,.3), 
        inset 0 2px 0 rgba(255,255,255,.5),
        inset 0 60px 50px -30px #ffd466;
    }
`

class ChangeToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: null }
    }

    componentDidMount() {
        if(window) {
            this.setState({ width: window.innerWidth });
            window.addEventListener('resize', this.updateDimensions);
        }
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    drag = (dragElement, resizeElement, container) => {
        dragElement.addEventListener('dragstart', console.log(dragElement));
    }

    render() {
        return (
            <StyledContainer>
                    {/* <StyledImg src={before}/>
                    <ResizeContainer>
                    <StyledImg src={after}/>
                    </ResizeContainer>
                    <Handle/>
                    <p>window width: {this.state.width}</p> */}
                    <ReactCompareImage
                    leftImage={after}
                    rightImage={before}
                    />
            </StyledContainer>
    )
    }
}

export default ChangeToggle;