import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeView from '../views/HomeView.js';
import LoginView from '../views/LoginView';
import Header from '../components/Header';

const Routes = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={HomeView} />
      <Route exact path="/login" component={LoginView} />
    </div>
  </Router>
);

export default Routes;