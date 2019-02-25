import React from 'react';
import LoginView from "../components/views/loginView/loginView";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/toast.css';
import { ToastContainer } from 'react-toastify';
import App from '../components/App';
import SignUpView from '../components/views/signup/SignUpView'

const Routes = () => (
  <div>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LoginView} />
        <Route exact path="/signup" component={SignUpView} />
        <ToastContainer />
      </div>
    </Router>
  </div>
)

export default Routes;
