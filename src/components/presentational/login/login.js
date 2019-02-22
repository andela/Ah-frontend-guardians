import React from 'react';
import SocialMediaLinks from './social_media_links';

const Form = (props) => {
  const propErrors = props.errors.errors;

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="form_outline">
          <p id="wrong_user"> {props.errors.errors ? props.errors.errors.error : '' }</p>
          <form onSubmit={props.FormSubmit} id="login_form">
            <input className="login_input" type="text" placeholder="Email..." id="email" name="email" onChange={props.changed}
            />
            <p className="inputError">{propErrors ? props.errors.errors.email : ''}</p>
            <input className="login_input" type="password" placeholder="Password..." id="password" name="password" onChange={props.changed}
            />
            <p className="inputError">{propErrors ? props.errors.errors.password : ''}</p>
            <SocialMediaLinks />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
