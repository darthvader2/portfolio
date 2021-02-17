import React from 'react';
import ReactDOM from 'react-dom';
import './pages/index.css';
import Page from './pages/App';
import * as serviceWorker from './pages/serviceWorker';

ReactDOM.render(<Page/>, document.getElementById('root'));

serviceWorker.unregister();
