import React, {Component} from 'react';
import '../../css/socialShare.scss';


class SocialShare extends Component {
    render(){
        const url = window.location.href;
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        const twitterUrl = `https://twitter.com/home?status=${url}`;

        return (
            <div className="social-share">
                <div className="social-share-btn">
                    <a href={facebookUrl} target="_blank"><i className="fab fa-facebook" id="fb-btn"></i></a><br></br>
                    <a href={twitterUrl} target="_blank"><i class="fab fa-twitter" id="twitter-btn"></i></a>
                </div>
            </div>
        )
    }
};

export default SocialShare;
