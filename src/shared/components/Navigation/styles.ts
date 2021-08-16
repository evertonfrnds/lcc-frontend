import styled from "styled-components";

export const Container = styled.div`
  background-color: #2b2b30;
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const NavigationContainer = styled.div`
  width: 100%;
  max-width: 1216px;

  color: #c4c4c4;

  display: flex;
  justify-content: center;

  ul {
    list-style: none;
    display: flex;

    height: 100%;

    li {
      height: 100%;

      a {
        display: flex;
        justify-content: center;

        padding: 18px 12px;

        color: #a4a4a4;
        font-size: 16px;
        font-weight: 400;

        text-decoration: none;

        border-bottom: 2px solid transparent;

        &.active {
          border-bottom: 2px solid #845EC2;
          color: #fff;
          font-weight: 500;
        }
      }
    }
  }
`;
