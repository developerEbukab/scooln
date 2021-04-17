import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 10vw;
  position: relative;

  > * {
    display: flex;
  }

  .ActiveLink{
    background-color: ${props => props.theme.primaryColorLight} !important;
    color: ${props => props.theme.primaryColor};
    font-weight: bold;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Rye";
  font-size: 2.4rem;
`;

export const StyledLink = styled(NavLink)`
  height: 4.5rem;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1000rem;
  margin-right: 2rem;
  transition: .2s all ease; 

  :hover{
    background-color: ${props => props.theme.greyLight};
  }
`;

export const CallToActionButton = styled(NavLink)`
  height: 4.5rem;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1000rem;
  margin-left: 2rem;
  transition: .2s all ease; 
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.body};

  :hover{
    background-color: ${props => props.theme.primaryColorDark};
  }
`;

export const SearchContainer = styled.div`
  height: 4.5rem;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1000rem;
  border: 1px solid ${props => props.theme.primaryColorLight};
  font-size: 1.8rem;
  /* color: ${props => props.theme.body}; */

  i{
    color: ${props => props.theme.primaryColor};
    font-size: 2rem;
  }

  input{
    font-size: inherit;
    border: none;
    width: 20rem;
    margin: 0 1rem;
  }

  .SubmitButtonContainer{
    background-color: ${props => props.theme.primaryColorLight} ;
    /* background-color: red; */
    height: 3rem;
    width: 3rem;
    border-radius: 1000rem;
    display: flex;
    justify-content: center;
    transition: .2s all ;
    align-items: center;
    transform: translateX(.5rem);

    :hover{
      transform: translateX(1.2rem);
      cursor: pointer;
      background-color: ${props => props.theme.body} ;
    }
  }
`;
