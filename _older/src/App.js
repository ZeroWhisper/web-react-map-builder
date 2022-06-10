import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotron';
import './service/firebase';
import store from './store';

import GlobalStyle from '~/styles/global';

// import Main from '~/pages/Main';
import TrelloClone from '~/pages/TrelloClone';
// teste

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <TrelloClone />
    </Provider>
  );
}

export default App;
