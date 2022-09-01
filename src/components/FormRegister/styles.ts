import styled from "styled-components";

export const Form = styled.form`
  width: 320px;
  height: 540px;
  background: #fffbfb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 4px 0px 13px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 22px;
    margin-top: 2px;
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
  }
`;

export const DivGeneral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  label {
    font-size: 16px;
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
`;

export const DivInput = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;

  input {
    width: 500px;
  }
`;
