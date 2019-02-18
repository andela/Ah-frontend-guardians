import React , { Component } from 'react';
import store from '../../store/combineStore'
import {connect} from 'react-redux';
import avatar from '../../images/avatar.png';

export class NavBar extends Component{
    render(){
        return (
            <div className="nav">
                <nav className="navbar navbar-dark bg-dark" id="nav-bar">
                    <a href="#" id="logo">Author's Haven</a>
                    <span className="nav-links">
                        <span className="business-logic">
                            <a href="#">Home</a>
                            <a href="#">Articles</a>
                        </span>
                        <span>
                            {this.props.isLoggedIn ? <a id="avatar" href="#"><img src={avatar} className="avatar"></img></a>:
                                    <span className="auth-links">
                                        <a href="#">Signin</a>
                                        <a href="#">Register</a>
                                    </span>
                            }
                        </span>
                        
                    </span>
                </nav>
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return state.navBarReducer
}

export default connect(MapStateToProps)(NavBar);
