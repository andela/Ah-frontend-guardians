import React from 'react';
import LoginView from "../components/views/loginView/loginView";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../css/toast.css';
import { ToastContainer } from 'react-toastify';
import App from '../components/App';
import SignUpView from '../components/views/signup/SignUpView'
import HomeView from '../views/homeView/homeView';
import CreateArticle from '../components/articles/CreateArticle';
import '../css/toast.css';
import { Article } from '../components/articles/';

const Routes = () => (
  <div>
    <Router>
      <div>
        {/* <Route exact path="/" component={App} /> */}
        <Route path="/login" component={LoginView} />
        <Route exact path="/signup" component={SignUpView} />
        <Route exact path="/" component={HomeView} />
        <Route exact path="/articles/" component={CreateArticle} />
        <Route exact path="/article/:slug" component={Article} />
        <ToastContainer />
      </div>
    </Router>
  </div>
)
export default Routes;

