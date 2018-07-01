import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from 'styled-components';

import registerServiceWorker from './registerServiceWorker';

import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * {
    font-family: 'Ubuntu Mono', monospace;
    font-size: 14px
  }

  h1 { font-size: 2em; }
  h2 { font-size: 1.5em; }
  h3 { font-size: 1.17em; }
  h4 { font-size: 1.12em; }
  h5 { font-size: .83em; }
  h6 { font-size: .75em; }
  
  body {
    margin: 0 auto;
    padding: 0;
  }
`;
