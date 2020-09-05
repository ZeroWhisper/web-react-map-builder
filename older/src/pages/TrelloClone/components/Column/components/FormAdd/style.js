import styled from 'styled-components';

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5px;

  & input {
    margin: 10px;
    border: 1px solid #eaeaea;
    width: 500px;
    padding: 10px;
  }

  & button {
    border: 1px solid lightgreen;
    border-radius: 6px;
    background-color: lightgreen;
    color: white;
    margin: 10px;
    padding: 10px;
  }
`;
