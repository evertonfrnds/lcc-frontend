import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.div`
  width: 100%;
  max-width: 600px;
  min-height: 100px;
  background-color: #202024;
  border-radius: 5px;
  padding: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 16px;
  }

  div.row {
    display: flex;
    width: 100%;
    gap: 15px;
    margin-top: 15px;
  }
  div.right {
    justify-content: flex-end;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px 8px;
  border-radius: 5px;
  background-color: #2b2b30;
  color: #fff;
  font-weight: 500;
  height: 50px;
  font-size: 16px;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 120px;
  padding: 12px 8px;
  border-radius: 5px;
  background-color: #845ec2;
  color: #fff;
  font-weight: 500;
  height: 50px;
  font-size: 16px;

  &.red {
    background-color: #c34a36;
  }
`;
