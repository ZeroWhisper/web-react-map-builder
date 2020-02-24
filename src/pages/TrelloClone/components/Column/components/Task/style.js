import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  height: 150px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  padding: 10px;
  /* margin: 20px 0; */
  box-shadow: 10px 11px 5px -8px rgba(0, 0, 0, 0.5);
  background-color: ${props => props.color || 'orange'};
  flex-direction: column;

  & p {
    padding: 5px;
  }
`;

export const TitleTask = styled.div`
  display: flex;
  flex: 8;
  border: 1px solid red;
`;

export const ButtonDelete = styled.button`
  flex: 2;
  padding: 10px 20px;
  border: 1px solid #eaeaea;
`;
