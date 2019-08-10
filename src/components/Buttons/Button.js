import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: ${({width}) => width};
  height: 40px;
  color: ${({theme}) => theme.colors.primary}
  border: 2px solid ${({theme}) => theme.colors.primary};
  border-radius: 5px;
  font-size: 1em;
  font-weight: 800;
  background: ${({theme}) => theme.colors.white}
  transition: box-shadow .3s ease;

  :hover {
    box-shadow: 0 30px 20px -15px red;
  }
`

export default Button;