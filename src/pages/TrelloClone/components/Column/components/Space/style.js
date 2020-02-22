import styled from 'styled-components';
// import styled from 'styled-components/native';

export const Content = styled.div`
  /* display: flex;
  flex: 1; */
  height: ${props => (props.hover ? '120px' : '15px')};
  border: 1px solid red;
`;
