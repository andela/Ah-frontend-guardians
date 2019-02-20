import React, { Component } from 'react';
import NavBar from './navBar/NavBar';
import Footer from './Footer/Footer';
import '../css/styleLogin.css';

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Author's Haven</h1>
        <p id="welcome_text">Welcome to Author's Haven</p>
        <Footer />
      </div>
    );
  }
}

export default App;
