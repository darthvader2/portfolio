import React from 'react';
import ReactDOM from 'react-dom';
import './pages/index.css';
import App from './pages/App';
import * as serviceWorker from './pages/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
