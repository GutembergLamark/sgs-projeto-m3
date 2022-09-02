import styled from "styled-components";

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
    background: url(${(Image: any) => Image.Image});
  }

  .p-alergias {
    color: rgba(142, 7, 7, 1);
    opacity: 1;
  }

  p {
    padding-left: 0.2rem;
    padding-top: 2rem;
    color: rgba(7, 126, 142, 1);

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid rgba(7, 126, 142, 1);
      transition: 0.3s;
    }
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

  .footer__button {
    padding: 5px 15px;

    background-color: red;
    color: white;

    display: flex;
    justify-content: center;
    gap: 5px;

    border: 1px solid white;
    border-radius: 2px;

    &:hover {
      border: 2px solid white;
      cursor: pointer;
      transition: 0.3s;
    }
  }

  span {
    color: white;
  }
`;
