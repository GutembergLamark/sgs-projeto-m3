import styled from "styled-components";

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
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export const Div = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  img {
    margin-bottom: 20px;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    img {
      width: 400px;
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
