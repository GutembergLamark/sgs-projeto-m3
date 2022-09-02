import styled from "styled-components";

export const DivGeneral = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const Aside = styled.aside`
  width: 25%;
  max-width: 167px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 5px 5px grey;

  .div-logo {
    width: 100%;
    height: 15%;
    background-color: rgba(11, 136, 153, 1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 60px;
    height: 60px;
  }

  h2 {
    color: white;
    font-size: 20px;
    font-weight: bolder;
  }

  .div-central {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    padding-left: 0.2rem;
    padding-top: 2rem;
    color: rgba(7, 126, 142, 1);
  }

  .div-exit {
    width: 100%;
    height: 15%;
    background-color: rgba(11, 136, 153, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    p {
      color: white;
      padding: 0;
    }
  }
`;

export const SectionCentral = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
  }

  h1 {
    font-size: 20px;
    font-weight: bolder;
    color: rgba(7, 126, 142, 1);
  }

  @media only screen and (min-width: 1024px) {
    width: 100%;

    img {
      width: 400px;
      height: 400px;
    }

    h1 {
      font-size: 40px;
    }
  }
`;
