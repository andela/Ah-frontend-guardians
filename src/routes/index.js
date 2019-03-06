import React from 'react';
import '../css/toast.css';
import LoginView from '../components/views/loginView/loginView';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SignUpView from '../components/views/signup/SignUpView';
import Profile from '../views/Profile/ProfileView';
import Articles from '../components/MyArticles/Edit Article';
import GetProfileView from '../views/profiles/GetProfileView';
import EditProfileView from '../views/profiles/EditProfileView';
import EditRatingsView from '../views/ratings/EditRatingsView';
import HomeView from '../views/homeView/homeView';
import CreateArticle from '../components/articles/CreateArticle';
import { Article } from "../components/articles";
import ResetEmail from '../components/resetPassword/resetEmail';
import ResetPassword from '../components/resetPassword/resetPassword';
import MyBookmarks from '../components/MyBookmarks/MyBookmarks';

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
        <Route exact path="/rating" component={EditRatingsView} />
        <ToastContainer />
        <Route path="/reset-email" component={ResetEmail} />
        <Route exact path="/bookmarks" component={MyBookmarks} />
        <Route path="/reset-password/:slug" component={ResetPassword} />
      </div>
    </Router>
  </div>
);

export default Routes;
