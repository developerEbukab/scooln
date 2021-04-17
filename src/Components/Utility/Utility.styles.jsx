import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroDashedLines = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  position: absolute;
  width: 120%;
  /* bottom: 5vh; */
  /* left: 50%; */
  transform: rotate(25deg) translate(4vw, -15vh);

  .Line{
    background-color: ${props => props.theme.primaryColorLight} ;
    border-radius: 1000rem;
    height: 12vh;
  }

  .Line1{
    width: 35%;
    margin: 0 0 5vh 12vw;
  }

  .Line2{
    width: 70%;
    margin: 0 0 5vh 5vw;
  }

  .Line3{
    width: 100%;
  }
`;

export const GetStartedLink = styled(Link)`
  /* height: 4.5rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 1000rem 1000rem 1000rem;
  transition: .2s all ease;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.body};
  /* width: 30rem; */
  /* display: inline-block; */
  width: fit-content;
  padding : 1rem 5rem;
  height: 6rem;
  font-size: 2rem;
  margin-top: 2.5rem;
  /* font-family: 'Rye', sans-serif; */
  font-weight: bold;
  /* transform: rotateY(180deg); */

  :hover{
    background-color: ${props => props.theme.primaryColorDark};
  }
`;