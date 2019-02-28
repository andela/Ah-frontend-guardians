import React from 'react';
import SocialAuthView from '../../../views/SocialLoginView/SocialLoginView';

const Form = props => {
  const propErrors = props.errors.errors;

  return (
    <div className='row justify-content-center'>
      <div className='col-md-4'>
        <div className='form_outline'>
          <p id='wrong_user'>
            {' '}
            {props.errors.errors ? props.errors.errors.error : ''}
          </p>
          <form onSubmit={props.FormSubmit} id='login_form'>
            <input
              className='login_input'
              type='text'
              placeholder='Email...'
              id='email'
              name='email'
              onChange={props.changed}
            />
            <p className='inputError'>
              {propErrors ? props.errors.errors.email : ''}
            </p>
            <input
              className='login_input'
              type='password'
              placeholder='Password...'
              id='password'
              name='password'
              onChange={props.changed}
            />
            <p className='inputError'>
              {propErrors ? props.errors.errors.password : ''}
            </p>
            <button type="submit" className="form_button">Login</button>
            <a id="forgot-password-link" href="/reset-email">Forgot password?</a>
            <p className="social_media_login">or Login with your social Media</p>
            <div>
              <SocialAuthView />
            </div>
            <p className="social_media_login"> Don't have an account, <font color="red"><a href='/signup' id = "register_link">Register</a></font></p>
            
          </form>


        </div>
      </div>
    </div>
  );
};

export default Form;
