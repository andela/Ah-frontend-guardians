import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import PropTypes from 'prop-types';

const SocialAuthLogin = props => {
  return (
    <div>
      <ul className='social-icons'><li><a>
            <FacebookLogin
              appId='2000970983314615'
              fields='name,email'
              callback={props.responseFacebook}
              textButton=''
              render={renderProps => (
                <span
                  className='fab fa-facebook-square fa-2x mr-4 Tom'
                  onClick={renderProps.onClick}
                />
              )}
            />
          </a></li><li>
          <a>
            <GoogleLogin
              clientId='134067846796-b8h2pdc1j74mmbjd4l3v62s9n390q5nb.apps.googleusercontent.com'
              onSuccess={props.googleResponseSuccess}
              onFailure={props.googleResponseFailure}
              icon={false}
              buttonText=''
              render={renderProps => (
                <span
                  className='fab fa-google text-danger fa-2x'
                  onClick={renderProps.onClick}
                />
              )}
            />
          </a></li></ul>
    </div>
  );
};

SocialAuthLogin.prototype = {
  responseFacebook: PropTypes.func.isRequired,
  googleResponseSuccess: PropTypes.func.isRequired,
  googleResponseFailure: PropTypes.func.isRequired
};

export default SocialAuthLogin;
