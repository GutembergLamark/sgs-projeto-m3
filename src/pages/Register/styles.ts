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
    font-weight: bold;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export const Div = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 4.5%;
  }
`;

export const DoctorImg = styled.img`
  width: 0%;

  @media (min-width: 1024px) {
    width: 40%;
  }
`;

export const PacientImg = styled.img`
  width: 230px;
  margin-top: 50px;
  margin-bottom: 80px;

  @media (min-width: 1024px) {
    width: 0%;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 20px;
  background-color: #077e8e;
  position: fixed;
  bottom: 0;
`;
