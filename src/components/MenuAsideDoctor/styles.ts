import styled from "styled-components";

export const Aside = styled.aside`
  color: #fff;

  min-height: 100%;
  height: 100vh;
  width: 30%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;

  box-shadow: 9px 5px 9px -5px rgba(0, 0, 0, 0.25);

  @media only screen and (min-width: 768px) {
    & {
      width: 215px;
    }
  }

  .menu__side__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0.625rem;

    background-color: var(--color-primary);

    .header__title {
      font-size: 1rem;
    }

    .header__containerLogo__img {
      width: 100px;
    }
  }

  @media only screen and (min-width: 768px) {
    .menu__side__header {
      flex-direction: row;
      gap: 0.625rem;
      padding: 30px 0.625rem;

      .header__title {
        font-size: 20px;
      }

      .header__containerLogo__img {
        width: 40px;
      }
    }
  }

  main {
    height: 100%;
    width: 100%;
  }

  .menu__side__footer {
    background-color: var(--color-primary);

    padding: 0.625rem;

    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    .footer__name {
      font-size: 0.75rem;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    button {
      padding: 5px 15px;

      background-color: red;
      color: white;

      border: 1px solid white;

      display: flex;
      justify-content: center;
      gap: 5px;
    }
  }

  @media only screen and (min-width: 586px) {
    .menu__side__footer {
      align-items: center;
      padding: 25px 0.625rem;

      button {
        width: 156px;
      }
    }
  }
`;
