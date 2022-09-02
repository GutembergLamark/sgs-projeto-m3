import styled from "styled-components";

export const Aside = styled.aside`
  color: #fff;

  min-height: 100%;
  height: 100vh;
  width: 30%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

    font-size: 0.75rem;

    .header__containerLogo__img {
      width: 30px;
    }
  }

  @media only screen and (min-width: 586px) {
    .menu__side__header {
      flex-direction: row;
      gap: 0.625rem;
    }
  }

  .menu__side__footer {
    background-color: var(--color-primary);

    padding: 0.625rem;

    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 5px;

    .footer__name {
      font-size: 0.75rem;
    }

    button {
      padding: 5px 15px;

      background-color: red;
      color: white;

      display: flex;
      justify-content: center;
      gap: 5px;
    }
  }
`;
