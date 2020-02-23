import React from 'react';

import AppContainer from '~/components/AppContainer';

import Column from './components/Column';

import { Content } from './style';

const TrelloClone = () => {
  return (
    <AppContainer>
      <Content>
        <Column column={'Teste1'} />
        {/* <Column column={'Teste2'} /> */}
      </Content>
    </AppContainer>
  );
};

export default TrelloClone;
