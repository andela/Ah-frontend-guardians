import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/combineStore';
import "./components/navBar/css/nav.css";
import "./components/Footer/css/footer.css";
import "./css/styleLogin.css";
import Routes from "./routes";
import "react-tagsinput/react-tagsinput.css";
import "react-quill/dist/quill.snow.css";
import "./css/main.scss";
import "./css/main.scss";
import "./components/navBar/css/nav.css";
import "./components/Footer/css/footer.css";
import './components/profiles/css/main.scss';
import './components/profiles/css/style.scss';

ReactDOM.render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('app')
);
