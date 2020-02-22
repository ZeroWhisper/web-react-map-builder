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
  background-color: white;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding: 10px;
`;

export const Title = styled.h3`
  color: steelblue;
`;

export const Space = styled.div`
  display: flex;
  flex: 1;
  max-height: ${props => (props.hover ? '20px' : '5px')};
  border: 1px solid red;
`;
