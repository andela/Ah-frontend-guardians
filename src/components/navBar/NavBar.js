import React, { Component } from 'react';
import store from '../../store/combineStore'
import { connect } from 'react-redux';
export class NavBar extends Component {
    render() {
        return (
            <div className="nav">
                <nav id="nav-bar">
                    <a href="#" id="logo">Author's Haven</a>
                    <span className="nav-links">
                        <span className="business-logic">
                            <a href="#">Home</a>
                            <a href="#">Articles</a>
                        </span>
                        <span>
                            {this.props.signin.success ? <a id="avatar" href="#"><i className="fas fa-user-circle fa-2x"></i></a> :
                                <span className="auth-links">
                                    <a href="/login">Signin</a>
                                    <a href="/signup">Register</a>
                                </span>
                            }
                        </span>

                    </span>
                    <div className="col-md-1"></div>

                </nav>
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return state.navBarReducer
}

export default connect(MapStateToProps)(NavBar);
