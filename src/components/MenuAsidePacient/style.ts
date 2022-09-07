import styled from "styled-components";

export const Aside = styled.aside`
  .p-alergias {
    color: rgba(142, 7, 7, 1);
    opacity: 1;
  }

  ul {
    padding-left: 6px;

    @media only screen and (min-width: 768px) {
      & {
        padding-left: 15px;
      }
    }
  }

  li {
    padding-left: 0.2rem;
    padding-top: 2rem;
    color: rgba(7, 126, 142, 1);
    width: max-content;

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid rgba(7, 126, 142, 1);
      transition: 0.3s;
    }
  }
`;
