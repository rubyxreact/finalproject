import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from "./App";
import {Route, BrowserRouter as Router} from "react-router-dom";
import PrivateRoute from './services/PrivateRoute';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';


ReactDOM.render(
    <Router>
      <PrivateRoute path="/app" component={App}/>
      <Route path="/login" exact component={LoginComponent}/>
      <Route path="/register" exact component={RegisterComponent}/>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
