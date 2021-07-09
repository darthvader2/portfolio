import   React from 'react';
import { ThemeProvider } from "styled-components";
import DarkMode from '../components/theme/themes';
import BodyTheme from '../components/global-components/modes'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './home.js'
import Quotes from './quotes';
function App() {
  return (
    <Router>
    <ThemeProvider theme = {DarkMode}>
      
    <BodyTheme/>
    </ThemeProvider>
    <Switch>
    <Route path = "/" exact component = {Home}></Route>
    <Route path = "/quotes" exact component = {Quotes}></Route>
    </Switch>
    </Router>
    );
}

export default App;
