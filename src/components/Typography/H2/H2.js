import styled from 'styled-components';
import { colors } from '../../../utils/colors';

const H2 = styled.h2`
    font-size: 3.5rem;
    color: ${colors.white};
    text-align: left;
    font-weight: 200;
    margin: 0 auto 0 2.5rem;
    width: 100%;

    @media (max-width: 500px) {
        margin: 0 2px;
        font-size: 3rem;
    }
`

export default H2;