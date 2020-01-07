import styled from "styled-components";
// import styled from 'styled-components/native';

export const Content = styled.div`
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  width: 50px;
  height: 50px;
  background-color: red;
`;
