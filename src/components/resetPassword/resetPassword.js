import React, { Component } from 'react';
import { NavBar } from '../navBar/NavBar';
import '../../css/resetPassword.css';
import axios from 'axios';
import fetchResetPassword from '../../actions/resetPassword/resetNewPasswordAction';
import { connect } from 'react-redux';
import toast from 'react-toastify';


export class ResetPassword extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    onSubmit = (e) => {
        e.preventDefault()
        
        let slug = this.props.match.params.slug;
        this.props.fetchResetPassword(this.state.new_password, this.state.confirm_password, slug)
        
        
    }
    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        
    };
    onChange2 = event => {
        this.setState({ [event.target.name]: event.target.value });
        
    };

    render() {
        return (
        <div className="reset-email">
            <a href="/"><h1>Author's Haven</h1></a>
            <p>Enter your new password</p>
            <div className="reset-email-div">
                <form className="email-form" onSubmit={this.onSubmit}>
                    <input onChange={this.onChange} type="password" name='new_password' placeholder="New password . . ." id="new-password" /><br /><br />
                    <input onChange={this.onChange2} type="password" name='confirm_password' placeholder="Confirm password . . ." id="confirm-password" /><br /><br />
                    <input type="submit" value="Reset" id="submit-btn"/><br /><br />
                    <a href="/login">Cancel</a><br/><br/>
                    <a href="/login">Go back to login</a>
                </form>
            </div>
        </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return state.resetPasswordReducer
}

export default connect(mapStateToProps, { fetchResetPassword })(ResetPassword);
