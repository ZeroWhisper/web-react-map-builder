import React from 'react';
import { Button, Container } from 'react-nes-component';

import AppContainer from '~/components/AppContainer';
import AppHeader from '~/components/AppHeader';
import AppBody from '~/components/AppBody';

const Main = props => {
  return (
    <AppContainer>
      <AppHeader>
        <Container>HEADER</Container>
      </AppHeader>
      <AppBody>
        <Container>
          <Button>TESTE</Button>
        </Container>
      </AppBody>
    </AppContainer>
  );
};

export default Main;
