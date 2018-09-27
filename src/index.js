import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import Constants from './constants';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
   body {
    margin: 0;
    padding: 0;
    background: ${Constants.COLOR_CARD_BACKGROUND};
   }
`

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
