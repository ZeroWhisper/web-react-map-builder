import styled from 'styled-components';
// import styled from 'styled-components/native';

export const Content = styled.div`
  /* display: flex;
  flex: 1; */
  height: ${props => (props.hover ? '120px' : '20px')};
  background-color: ${props => (props.hover ? 'gray' : 'transparent')};
  /* border: 1px solid red; */
`;
