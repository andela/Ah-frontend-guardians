import PropTypes from 'prop-types';
import React from 'react';

const Input = props =>
    <div className="form-group">
        <input
            type={props.type}
            name={props.name}
            onChange={props.onChange}
            placeholder={props.placeholder}
            className={props.className}
            autoComplete="off"
            id={props.id}
            className="login_input"
        />
        <div className="error-message">
            <small>{props.error}</small>
        </div>
    </div>


Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    id: PropTypes.string,
}

export default Input;
