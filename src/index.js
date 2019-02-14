import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/combineStore';
import NavBar from './components/navBar/NavBar';
import Footer from './components/Footer/Footer';
import "./css/main.scss";
import "./components/navBar/css/nav.css";
import "./components/Footer/css/footer.css";
import Routes from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('app')
);