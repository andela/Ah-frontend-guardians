import React from 'react';
import PropTypes from 'prop-types';
import '../../css/signup.css';
import Input from './Input'

const SignUpForm = (props) => {
    const { onChange, onSubmit, errors } = props
    const errorMessages = errors.errors

    return (
        < form onSubmit={onSubmit} noValidate id="login_form">
            <Input type="text" name="username"
                onChange={onChange} placeholder="User Name"
                id="username" error={errorMessages && errorMessages.username}
            />
            <Input type="email" name="email"
                onChange={onChange} placeholder="Email" id="email"
                error={errorMessages && errorMessages.email}
            />
            <Input type="password" name="password"
                onChange={onChange} placeholder="Password" id="password"
                error={errorMessages && errorMessages.password}
            />
            <button className=" form_button">Sign up</button>
        </form >
    )
}

SignUpForm.propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
}

export default SignUpForm;
