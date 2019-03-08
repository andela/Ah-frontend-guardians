import React from 'react';

const SocialMediaLinks = (props) => {
  return (
    <div className="links_outline">
      
      <button type="submit" className="form_button">Login</button>
      <p className="social_media_login">or Login with your social Media</p>
      <ul className="social-icons">
        <li>
          <a href="http://www.facebook.com">
            <span className="fab fa-facebook-square fa-2x mr-4" />
          </a>
        </li>
        <li>
          <a href="http://www.twitter.com">
            <span className="fab fa-twitter fa-2x" />
          </a>
        </li>
        <li>
          <a href="http://www.google.com">
            <span className="fab fa-google text-danger fa-2x" />
          </a>
        </li>
      </ul>
      <p className="social_media_login"> Don't have an account, <font color="red"><a href='/signup' id="register_link">Register</a></font>
      </p><p>{props.data}</p>
    </div>
  );
};

export default SocialMediaLinks;
