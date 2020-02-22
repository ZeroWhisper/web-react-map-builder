import React from 'react';

import './config/reactotron';

import GlobalStyle from '~/styles/global';

// import Main from '~/pages/Main';
import TrelloClone from '~/pages/TrelloClone';

function App() {
  return (
    <>
      <GlobalStyle />
      <TrelloClone />
    </>
  );
}

export default App;
