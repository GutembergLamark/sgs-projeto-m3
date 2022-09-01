import styled from "styled-components";

export const Form = styled.form`
  width: 320px;
  height: 450px;
  background: #fffbfb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 4px 0px 13px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  bottom: 0;

  h1 {
    font-size: 22px;
    margin-bottom: 18px;
    font-weight: 700;
    color: #0b8899;
  }

  button {
    margin-top: 35px;
    width: 225px;
    height: 40px;
    background: #0b8899;
    border-radius: 10px;
    border: none;
    color: #ffffff;
    font-size: 13px;
  }

  div:nth-child(8),
  div:nth-child(10) {
    display: flex;
    align-items: center;
    background: #d9d9d9;
    border-radius: 4px;
    padding-right: 10px;

    :focus-within {
      outline: 2px solid black;
    }

    input {
      width: 224px;
      :focus {
        outline: none;
      }
    }
  }

  @media (min-width: 1024px) {
    height: 600px;
    padding: 5px;
    justify-content: space-evenly;

    button {
      width: 250px;
      height: 40px;
      font-size: 15px;
    }

    h1 {
      font-size: 26px;
    }
  }
`;

export const DivGeneral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;

  label {
    font-size: 13px;
  }

  input {
    width: 250px;
    height: 30px;
    background: #d9d9d9;
    border-radius: 4px;
    border: none;
    color: #424242;
    padding-left: 8px;
  }

  select {
    width: 260px;
    height: 30px;
    background: #d9d9d9;
    border-radius: 4px;
    border: none;
    color: #424242;
    padding-left: 8px;
  }
  @media (min-width: 1024px) {
    gap: 10px;

    label {
      font-size: 13px;
      font-size: 15px;
    }
  }
`;

export const DivInput = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;

  input {
    width: 500px;
  }
`;
