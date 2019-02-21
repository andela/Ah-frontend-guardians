import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from '../components/navBar/NavBar';
import Footer from '../components/Footer/Footer';

const Routes = () => (
  <div>
    <Router>
      <div>
        <NavBar />
      </div>
    </Router>
    <Footer/>
  </div>
);

export default Routes;
