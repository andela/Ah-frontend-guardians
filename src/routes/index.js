import React from 'react';
import App from "../components/App";
import LoginView from "../components/views/loginView/loginView";
import {Route, BrowserRouter as Router } from 'react-router-dom';

import NavBar from '../components/navBar/NavBar';
import Footer from '../components/Footer/Footer';

const Routes = () => (
  <div>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LoginView} />
      </div>
    </Router>
  </div>
);

export default Routes;