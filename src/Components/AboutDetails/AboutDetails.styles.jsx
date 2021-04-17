import styled  from 'styled-components';

export const AboutDetailsContainer = styled.div`
  width: 100%;
  /* background-color: red; */
  overflow : hidden;
  padding : ${props => props.firstDetail ? "10vw" : "7vw"} 10vw 5vw 10vw;
  display: grid;
  direction: ${props => props.reverse ? "rtl" : "ltr"};
  /* direction: rtl; */
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5vw;
  /* background-color: grey; */

  .ImageContainer{
    width: 100%;
    /* background-color: blue; */
    display: flex;
    /* justify-content: center; */
    align-items: center;
    position: relative;

    .DetailsBox{
      height: 14vw;
      width: 20vw;
      z-index: 3;
      background-color: ${props => props.theme.body};
      box-shadow: 0 0 5rem ${props => props.theme.shadow};
      border-radius: 3rem;
      position: absolute;
      left: ${props => props.reverse ? "0%" : "40%"};
      bottom: 18%;
      padding: 0 2rem;
      /* -webkit-transform: perspective(300) rotateY(4deg);
        -webkit-transform-origin: 0% 0%;  */
      -webkit-transform: perspective(300) rotateY(${props => props.reverse ? "-4deg" : "4deg"});
      -webkit-transform-origin: ${props => props.reverse ? "50% 0%" : "0% 0%"};

      .Heading{
        height: 40%;
        width: 100%;
        /* background-color: grey; */
        position: relative;
        display : flex;
        flex-direction: column;
        justify-content: center;
        align-items: ${props => props.reverse ? "flex-end" : "flex-start"};
        border-bottom: 3px dashed ${props => props.theme.shadow};
        padding-left: ${props => props.reverse ? "3vw" : "0"};
        /* align-items: center; */

        .Title{
          font-size: 2.2rem;
          font-weight: bold;
        }

        .Time{
          font-size: 1.4rem;
          font-weight: bold;
          margin-top: .5rem;
          color: ${props => props.theme.shadow};
        }

        .IconContainer{
          position: absolute;
          background-color: red;
          height: 5.6vw;
          width: 5.6vw;
          top: -15%;
          left: ${props => props.reverse ? "-18%" : "80%"}; 
          display : flex;
          justify-content: center;
          align-items: center;
          border-radius: 1000rem;
          border: 2rem solid ${props => props.theme.body};
          background-color: #e5f2e5;
          box-shadow: 0 0 2rem ${props => props.theme.shadowLight};
        }
      }

      .Content{
        display: flex;
        flex-direction: ${props => props.reverse ? "row-reverse" : "row"}; 
        justify-content: center;
        align-items: center;
        /* background-color : red; */
        height: 50%;
        width: 100%;

        .Text{
          margin-left: 2rem;
          font-weight: bold;
          text-align: ${props => props.reverse ? "end" : "start"};
        }
      }
    }

    .Image{
      height: 25vw;
      width: 25vw;
      /* display: block; */
      /* background-color: grey; */
      object-fit: cover;
      border-radius: 3rem;
      z-index: 2;
      -webkit-transform: perspective(300) rotateY(${props => props.reverse ? "-3deg" : "3deg"});
        -webkit-transform-origin: ${props => props.reverse ? "50% 0%" : "0% 0%"}; 
      box-shadow: 0 0 5rem ${props => props.theme.shadow};
      /* clip-path: polygon(0 0, 100% 0, 100% 97%, 0% 100%);
      transform: rotateY(-10deg) */
    }

    .DotPattern{
      height: 20vw;
      width: 20vw;
      position: absolute;
      color: red;
      /* background-color: white; */
      /* opacity: .2; */
      /* z-index: 3; */
    }

    .Left{
      /* left: -30%; */
      top: -10%;
      left: ${props => props.reverse ? "90%" : "-30%"};
      /* z-index: 3; */
    }

    .Right{
      /* left: 47%; */
      left: ${props => props.reverse ? "0%" : "47%"};
      top: 30%;
      /* z-index: 3; */
    }
  }

  .ContentsContainer{
    /* background-color: grey; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: flex-end; */
    text-align: ${props => props.reverse ? "end" : "start"};
    align-items: ${props => props.reverse ? "flex-end" : "flex-start"};
    /* font-size: 1.8rem; */

    .subTitle{
      color: #004c00;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: .2rem;
    }

    .Title{
      font-size: 3rem;
      font-weight: bold;
      margin: 1.5rem 0;
      font-family: "Rye";
      letter-spacing: .1rem;
      word-spacing: .5rem;
      
    }

    .Text{
      line-height: 2.5rem;
    }
  }
`;
