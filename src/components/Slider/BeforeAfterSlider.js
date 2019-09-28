import React from 'react';
import styled from 'styled-components';
import after from '../../../public/static/img/after.jpg';
import before from '../../../public/static/img/before.jpg';
import ReactCompareImage from 'react-compare-image';


const StyledContainer = styled.div`
    position: relative;
    overflow: hidden;
    height: 100%;
`

class ChangeToggle extends React.Component {

    render() {
        return (
            <StyledContainer>
                    <ReactCompareImage
                    leftImage={after}
                    rightImage={before}
                    />
            </StyledContainer>
        )
    }
}

export default ChangeToggle;