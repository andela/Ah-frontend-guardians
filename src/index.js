import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import './css/articlestyle.scss';
import 'react-tagsinput/react-tagsinput.css';
import { Provider } from 'react-redux';
import store from './store/combineStore';
import './components/navBar/css/nav.css';
import './components/Footer/css/footer.css';
import './css/styleLogin.css';
import 'react-tagsinput/react-tagsinput.css';
import 'react-quill/dist/quill.snow.css';
import './css/main.scss';
import './css/main.scss';
import './components/navBar/css/nav.css';
import './components/Footer/css/footer.css';
import './components/profiles/css/main.scss';
import './components/profiles/css/style.scss';
import 'react-quill/dist/quill.snow.css';
import './components/search/css/main.scss';
import './components/search/css/style.scss';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
);
