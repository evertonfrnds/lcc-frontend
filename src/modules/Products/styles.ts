import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
  margin-bottom: 14px;
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
    transition: 0.2s;
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 8px;
`;

export const ItemProduct = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: #202024;
  padding: 12px;
  border-radius: 5px;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  height: 120px;

  display: flex;

  div.left {
    flex: 5;

    h3 {
      margin-bottom: 6px;
    }

    p {
      font-size: 15px;
      color: #c4c4c4;
    }
  }

  div.right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const IconButton = styled.button`
  background-color: #845ec2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 5px;
  color: #fff;
  width: 40px;
  height: 40px;
  cursor: pointer;
  &.mt-1 {
    margin-top: 6px;
  }
  &.red {
    background: #c34a36;
  }
`;
