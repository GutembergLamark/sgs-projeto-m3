import { log } from "console";
import styled from "styled-components";
import Image from "../../assets/Fundo.png";

export const DivGeneral = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: fixed;
`;

export const SectionGeneral = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding-bottom: 100px;
  background: url(${(Image: any) => Image.Image});

  .div-image {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 80%;
    height: 80%;
    max-width: 392px;
    border-radius: 50%;
  }

  .div-button {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  button {
    width: 80%;
    max-width: 450px;
    height: 50px;
    white-space: nowrap;
    border: none;
    border-radius: 10px;
    background-color: rgba(11, 136, 153, 1);
    color: white;

    &:hover {
      border: 4px solid white;
      cursor: pointer;
      transition: 0.3s;
    }
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    padding: 0;

    img {
      width: 400px;
      height: 400px;
      border-radius: 50%;
      /* transform: translateX(40px); */
    }
  }
`;
