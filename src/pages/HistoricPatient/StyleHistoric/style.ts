import styled from "styled-components";

interface IProps {
  Image: string;
}

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
  background: url(${(Image: IProps) => Image.Image});
  h1 {
    color: #0b8899;
    border-bottom: 2px solid #0b8899;
  }
  .div-ul {
    width: 80%;
    max-width: 950px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul {
    width: 100%;
    max-height: 500px;
    overflow-x: auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    padding: 1.5rem;
    border-radius: 10px;
    ::-webkit-scrollbar {
      width: 10px;
      margin-left: 10px;
      background-color: white;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(11, 136, 153, 1);
      border-radius: 10px;
    }
  }
  li {
    width: 95%;
    border: none;
    border-radius: 10px;
    background-color: rgba(11, 136, 153, 1);
    color: white;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    .p-description {
      max-width: 100%;
      height: max-content;
      white-space: wrap;
    }
    &:hover {
      border: 1px solid white;
      cursor: pointer;
      transition: 0.3s;
    }
  }
`;
