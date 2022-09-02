import styled from "styled-components";

export const Main = styled.main`
  display: flex;

  .content__main {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 70%;

    .content__empty {
      width: 200px;
    }
  }

  @media only screen and (min-width: 586px) {
    .content__main {
      .content__empty {
        width: 300px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .content__main {
      width: 80%;
    }
  }

  .content__main__form {
    padding: 50px 0 0 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    margin-bottom: 50px;

    .form__input {
      border: 2px solid #d9d9d9;
      padding: 5px;
    }

    .form__input::placeholder {
      color: #d9d9d9;
    }

    .form__input:focus {
      outline: 2px solid #000;
    }

    .form__button {
      background-color: #0b8899;
      color: white;

      padding: 0.625rem;

      border-radius: 5px;
    }
  }

  @media only screen and (min-width: 586px) {
    .content__main__form {
      width: 70%;
    }

    .form__input {
      width: 100%;
    }

    .form__button {
      width: 50%;
    }
  }

  @media only screen and (min-width: 768px) {
    .form__input {
      width: 450px;
    }
    .form__button {
      width: 190px;
    }
  }
`;
