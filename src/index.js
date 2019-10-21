import React from 'react';
import ReactDOM from 'react-dom';
import './pages/index.css';
import App from './pages/App';
import * as serviceWorker from './pages/serviceWorker';
import PortFolio from './pages/portfolio'

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<PortFolio/>,document.getElementById('portfolio'));
serviceWorker.unregister();
