import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const ActionBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    color: #fff;
    font-size: 28px;
  }
  border-bottom: 1px solid rgb(41, 41, 46);
  padding-bottom: 28px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  padding: 12px;
  background-color: #845ec2;
  color: #fff;
  font-weight: 500;
  min-width: 120px;

  &:hover {
    background-color: #957cbd;
    transition: .2s;
  }
`;
