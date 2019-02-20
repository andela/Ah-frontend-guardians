import React from 'react';
import LoginView from "../components/views/loginView/loginView";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/toast.css';
import { ToastContainer } from 'react-toastify';
import App from '../components/App';
import SignUpView from '../components/views/signup/SignUpView';
import Profile from "../views/Profile/ProfileView";
import Articles from "../components/MyArticles/Edit Article";

const Routes = () => (
  <div>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/login" component={LoginView} />
        <Route exact path="/signup" component={SignUpView} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/article/:slug/edit" render={(props) => <Articles {...props} />} />
        <ToastContainer />
      </div>
    </Router>
  </div>
);

export default Routes;
{/* <NavBar /> */}