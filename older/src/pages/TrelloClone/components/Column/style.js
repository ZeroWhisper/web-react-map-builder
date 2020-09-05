import styled from 'styled-components';
// import styled from 'styled-components/native';

export const Content = styled.div`
  display: flex;
  flex: 1;
  max-width: 400px;
  padding: 5px;
`;

export const ShowColumn = styled.div`
  display: flex;
  flex: 1;
  flex-shrink: 1;
  flex-direction: column;
  background-color: #dee;
  /* background-color: #3d474d; */
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding: 10px;
`;

export const Header = styled.div`
  display: flex;
  height: 80px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  color: steelblue;
`;

export const Add = styled.button`
  background-color: darkseagreen;
  padding: 5px;
  border-radius: 6px;
  color: white;
`;

export const Space = styled.div`
  display: flex;
  flex: 1;
  max-height: ${props => (props.hover ? '20px' : '5px')};
  border: 1px solid red;
`;
