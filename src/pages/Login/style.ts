import styled from "styled-components";

export const LoginContaine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  height: 100vh;

  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
  }

  img {
    width: 30%;
  }

  @media (max-width: 1024px) {
    main {
      min-height: 100vh;
      flex-direction: column;
      justify-content: center;
    }

    img {
      width: 230px;
      margin-top: 30px;
      margin-bottom: 25px;
    }
  }
`;
export const Footer = styled.footer`
  width: 100%;
  height: 20px;
  background-color: #077e8e;
  position: fixed;
  bottom: 0;
`;

export const Header = styled.header`
  width: 100%;

  div {
    width: 100%;
    background-color: #077e8e;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 25px;
    color: #ffffff;
    text-align: center;
    font-weight: bold;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 30px;
    }
  }
`;
