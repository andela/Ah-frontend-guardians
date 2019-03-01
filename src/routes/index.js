import React from 'react';
import '../css/toast.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import LoginView from '../components/views/loginView/loginView';
import SignUpView from '../components/views/signup/SignUpView';
import Profile from '../views/Profile/ProfileView';
import Articles from '../components/MyArticles/Edit Article';
import GetProfileView from '../views/profiles/GetProfileView';
import EditProfileView from '../views/profiles/EditProfileView';
import HomeView from '../views/homeView/homeView';
import CreateArticle from '../components/articles/CreateArticle';
import { Article } from "../components/articles";
import ResetEmail from '../components/resetPassword/resetEmail';
import ResetPassword from '../components/resetPassword/resetPassword';

const Routes = () => (
  <div>
    <Router>
      <div>
        <Route path="/login" component={LoginView} />
        <Route exact path="/signup" component={SignUpView} />
        <Route exact path="/profile" component={GetProfileView} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/edit" component={EditProfileView} />
        <Route exact path="/article/:slug/edit" render={props => <Articles {...props} />} />
        <Route exact path="/" component={HomeView} />
        <Route exact path="/articles/" component={CreateArticle} />
        <Route exact path="/article/:slug" component={Article} />
        <ToastContainer />
        <Route path="/reset-email" component={ResetEmail} />
        <Route path="/reset-password/:slug" component={ResetPassword} />
      </div>
    </Router>
  </div>
);

export default Routes;
