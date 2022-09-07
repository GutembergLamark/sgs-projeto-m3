import styled from "styled-components";

interface IProps {
  route: string;
}

export const Aside = styled.aside`
  .p__alergias {
    color: ${(data: IProps) =>
      data.route === "allergies" && "rgba(142, 7, 7, 1)"};
    border-bottom: 2px solid transparent;
  }

  .p__alergias:hover {
    cursor: pointer;
    border-bottom: 2px solid
      ${(data: IProps) => data.route === "allergies" && "rgba(142, 7, 7, 1)"};
    transition: 0.3s;
  }

  .p__doencas {
    color: ${(data: IProps) =>
      data.route === "disease" && "rgba(142, 7, 7, 1)"};
    border-bottom: 2px solid transparent;
  }

  .p__doencas:hover {
    cursor: pointer;
    border-bottom: 2px solid
      ${(data: IProps) => data.route === "disease" && "rgba(142, 7, 7, 1)"};
    transition: 0.3s;
  }

  .p__exames {
    color: ${(data: IProps) => data.route === "exams" && "rgba(142, 7, 7, 1)"};
    border-bottom: 2px solid transparent;
  }

  .p__exames:hover {
    cursor: pointer;
    border-bottom: 2px solid
      ${(data: IProps) => data.route === "exams" && "rgba(142, 7, 7, 1)"};
    transition: 0.3s;
  }

  .p__remedios {
    color: ${(data: IProps) =>
      data.route === "medicines" && "rgba(142, 7, 7, 1)"};
    border-bottom: 2px solid transparent;
  }

  .p__remedios:hover {
    cursor: pointer;
    border-bottom: 2px solid
      ${(data: IProps) => data.route === "medicines" && "rgba(142, 7, 7, 1)"};
    transition: 0.3s;
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
  }
`;
