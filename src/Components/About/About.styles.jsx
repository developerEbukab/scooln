import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  /* background-color: blue; */
  padding : 10rem 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 8rem;
`;

export const InfoItem = styled.div`
  width: 100%;
  padding: 2rem;
  /* font-size:  */
  height: 40rem;
  box-shadow: 0 0 3rem ${props => props.theme.shadow};
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${props => props.theme.highlight};

  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }

  .Details{
    width: 100%;
    /* padding: 1rem; */
    height: 40%;
    /* box-shadow: 0 0 4rem ${props => props.theme.shadow}; */
    /* display: flex;
    flex-direction: column;
    align-items: center; */

    .Title{
      font-size: 2.2rem;
      font-weight: bold;
      margin-bottom: 1rem;
      color: ${props => props.theme.textHighlight};
    }
  }
`;

