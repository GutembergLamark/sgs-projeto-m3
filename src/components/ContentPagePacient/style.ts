import styled from "styled-components";

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

  @media only screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;
