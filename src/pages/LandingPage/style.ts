import styled from "styled-components";

interface IClickDropdown {
  click: boolean;
}

export const Header = styled.header`
  width: 100%;

  background-color: #0b8899;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  box-shadow: 0px 0px 10px 2px grey;

  img {
    height: 50px;
    margin-left: 1rem;
  }

  .dropdown {
    position: relative;
    display: inline-block;

    svg {
      width: 30px;
      height: 30px;

      color: white;

      margin-right: 1rem;
    }

    .dropdown__content {
      display: none;
      flex-direction: column;

      position: absolute;
      right: 0;

      background-color: #f9f9f9;

      min-width: 160px;

      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

      padding: 12px 16px;
      margin: 0;

      border-radius: 5px;

      z-index: 1;

      gap: 0.625rem;
    }
    .dropdown__content {
      display: ${(e: IClickDropdown) => (e.click ? "flex" : "none")};
    }
  }

  button {
    border: none;

    background-color: #0b8899;
    color: white;

    text-align: left;
    font-weight: bold;

    border-radius: 5px;

    padding: 0.625rem;
  }

  @media only screen and (min-width: 480px) {
    padding: 0.625rem;

    .dropdown {
      position: inherit;

      svg {
        display: none;
      }

      .dropdown__content {
        display: flex;
        flex-direction: row;
        gap: 1.25rem;

        background-color: #0b8899;

        position: inherit;
        box-shadow: none;
      }
    }

    button {
      background-color: white;
      color: #0b8899;

      padding: 0.9375rem 1.25rem;
    }
  }

  @media only screen and (min-width: 768px) {
    height: 5rem;

    button {
      margin-right: 2rem;
      height: 3rem;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  .main__info {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 100vh;

    padding: 15px 0;

    figure {
      display: flex;
      justify-content: center;

      .info__image {
        width: 200px;

        margin: 0 auto;
      }
    }

    .info__description {
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;

      margin-top: 1rem;

      h1 {
        width: 70%;

        text-align: center;
        font-size: bold;

        font-family: "Bebas Neue", cursive;
      }

      p {
        width: 70%;

        text-align: center;
        font-size: medium;
      }
    }

    @media only screen and (min-width: 586px) {
      figure {
        .info__image {
          width: 300px;
        }
      }
    }

    @media only screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row-reverse;

      figure {
        width: 50%;
      }

      .info__description {
        width: 50%;
      }

      h1 {
        font-size: x-large;
      }

      p {
        font-size: larger;
      }
    }

    @media only screen and (min-width: 992px) {
      figure {
        .info__image {
          width: 400px;
        }
      }
    }
  }

  .main__ferramentas {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.5rem;

    width: 100%;
    height: 100vh;

    background-color: #0b8899;

    padding: 15px 0;

    h2 {
      font-weight: bold;

      color: white;
    }

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }

    li {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      align-items: center;

      border: 1px solid black;
      border-radius: 5px;
      padding: 1rem;
      background-color: white;
      border: none;

      img {
        width: 40px;
      }

      p {
        font-weight: bold;
        font-size: 0.9rem;
      }
    }

    @media only screen and (min-width: 768px) {
      li {
        max-width: 550px;
        p {
          font-size: 1rem;
        }
      }
    }
  }

  .main__avaliacoes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.5rem;

    width: 100%;
    height: 100vh;

    padding: 15px 0;

    h2 {
      font-weight: bold;
      font-size: x-large;
      color: #0b8899;
      padding-top: 1rem;
    }

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    li {
      width: 70%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      align-items: flex-start;

      margin-bottom: 1rem;
      padding: 1rem;

      border-radius: 5px;

      background-color: #0b8899;

      p {
        font-weight: bold;
        font-size: 0.9rem;
        color: white;
      }

      svg {
        color: #ffca4f;
      }
    }

    @media only screen and (min-width: 768px) {
      ul {
        flex-direction: row;
        gap: 1.25rem;

        li {
          max-width: 200px;
          height: 100%;

          justify-content: space-between;
          p {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: black;

  padding: 5px 0;

  p {
    font-size: 12px;
    color: white;
  }

  @media only screen and (min-width: 768px) {
    height: 1rem;
  }
`;
