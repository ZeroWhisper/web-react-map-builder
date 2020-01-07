import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const Content = styled.div`
  position: relative;
  border: 1px solid blue;
  background-color: gray;
  height: 720px;
  width: 1280px;
`;

export const Box = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50px;
  left: 50px;
  background-color: green;
  border: 1px solid red;
`;
