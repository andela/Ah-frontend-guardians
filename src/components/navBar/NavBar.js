import React, { Component } from 'react';
import store from '../../store/combineStore';
import { connect } from 'react-redux';
import NavLink from 'react-router-dom/NavLink';

export class NavBar extends Component {
  render() {
    return (
      <div className='nav'>
        <nav id='nav-bar'>
          <a href='#' id='logo'>
            Author's Haven
          </a>
          <span className='nav-links'>
            <span className='business-logic'>
              <NavLink to='/'>Home</NavLink>
              <a href='#'>Articles</a>
            </span>
            <span>
              {this.props.signin.success ||
              this.props.social.isAuthenticated ? (
                <NavLink to='/profile' id='avatar'>
                  <i className='fas fa-user-circle fa-2x' />
                </NavLink>
              ) : (
                <span className='auth-links'>
                  <NavLink to='/login'>Signin</NavLink>
                  <NavLink to='/signup'>Register</NavLink>
                </span>
              )}
            </span>
          </span>
          <div className='col-md-1' />
        </nav>
      </div>
    );
  }
}

export const MapStateToProps = state => {
  return state.navBarReducer;
};

export default connect(MapStateToProps)(NavBar);
