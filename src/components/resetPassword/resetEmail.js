import React, { Component } from 'react';
import { NavBar } from '../navBar/NavBar';
import '../../css/resetPassword.css';
import axios from 'axios';
import fetchResetEmail from '../../actions/resetPassword/resetPasswordAction';
import { connect } from 'react-redux';
import toast from 'react-toastify';


export class ResetEmail extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    onSubmit = (e) => {
        e.preventDefault()
        
        this.props.fetchResetEmail(this.state.reset_email)
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        
    };

    render() {
        return (
        <div className="reset-email reset">
            <a href="/"><h1>Author's Haven</h1></a>
            <p>Enter your email address here and an email will be sent to you for you to complete this request.</p>
            <div className="reset-email-div">
                <form className="email-form" onSubmit={this.onSubmit}>
                    <input type="email" onChange={this.onChange} placeholder="Enter email . . ." name="reset_email" id="reset_email" required/><br /><br />
                    <input type="submit" value="Reset" id="submit-btn"/><br /><br />
                    <a href="/login">Cancel</a>
                </form>
            </div>
        </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return state.resetEmailReducer
}

export default connect(mapStateToProps, { fetchResetEmail })(ResetEmail);
