import React from 'react';
import PropTypes from 'prop-types';

const SocialLinks = () => (
    <ul className="social_signup">
        <li>
            <a href={"http://www.facebook.com"}>
                <span className="fab fa-facebook-square fa-2x mr-4" />
            </a>
        </li>
        <li>
            <a href={"http://www.google.com"}>
                <span className="fab fa-google text-danger fa-2x" />
            </a>
        </li>
    </ul>
)

export default SocialLinks;
