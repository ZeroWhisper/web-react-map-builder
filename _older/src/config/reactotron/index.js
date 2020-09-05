import Reactotron from 'reactotron-react-js';
import sagaPlugin from 'reactotron-redux-saga';
import apisaucePlugin from 'reactotron-apisauce';
import { reactotronRedux } from 'reactotron-redux';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(apisaucePlugin({}))
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
} else {
  if (!console.tron) console.tron = console;
}

export default console.tron;
