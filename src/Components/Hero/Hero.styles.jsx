import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  height: 80vh;
  /* background-color: grey; */
  padding: 0 0 0 10vw;
  /* box-shadow: 0 0 1rem #111;  */
  position: relative;
  /* overflow: hidden; */

  .AboutContainer{
    height: 15vh;
    width: 65%;
    position: absolute;
    background-color: ${props => props.theme.body};
    border-radius: 2rem;
    left: 50%;
    transform: translateX(-50%);
    bottom : -7vh;
    box-shadow: 0 0 2rem  ${props => props.theme.shadowLight};;
    z-index: 2;
    padding : 3rem 0rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .AddSideBorders{
      border: 1px solid ${props => props.theme.greyLight};
      border-bottom-color: transparent;
      border-top-color: transparent;
    }

    .Item{
      display: flex;
      align-items: center;
      height: 100%;
      padding : 0 2rem;

      .text{
        color: ${props => props.theme.shadow};
      }

      img{
        margin-right: 2rem;
      }
    }
  }

  .ContentContainer{
    width: 100%;
    height: 100%;
    /* background-color: grey; */
    display: flex;
    flex-direction: column;
    padding-top: 18vh;
    /* justify-content: center; */

    .subText{
      color: ${props => props.theme.primaryColor};
      word-spacing: .4rem;
    }

    .text{
      font-size: 2rem;
    }

    .Title{
      font-size: 5rem;
      font-family: 'Rye', sans-serif;
      margin: 1.5rem 0;
    }

    .highLight{
      font-weight: bold;
    }
  }

  .ImageContainer{
    width: 100%;
    height: 100%;
    /* background-color: grey; */
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    overflow: hidden;

    img{
      position: absolute;
      bottom: 5vh;
      background-color: transparent;
      transform: translateY(30%);
      /* opacity: 0.4; */
      width: 100%;
      /* height: 50%; */
    }
  }
`;


