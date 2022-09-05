import styled from "styled-components";

export const Main = styled.main`
  display: flex;

  .content__main {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 70%;

    position: relative;

    svg {
      position: absolute;
      left: 10px;
      top: 5px;

      color: var(--color-primary);
    }

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
      width: calc(100% - 215px);
    }
  }
`;
