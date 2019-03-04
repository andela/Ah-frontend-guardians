import React, {Component} from 'react';
import '../../css/socialShare.scss';


class SocialShare extends Component {
    constructor(props){
        super(props)
        this.state = {
            share: 'close',
            toggleButtonText: 'Share!'
        };

    };

    shareToggle = () => {
        if (this.state.share === 'close'){
            this.setState({
                share: 'open',
                toggleButtonText: "Hide!"
            });
        }else{
            this.setState({
                share: 'close',
                toggleButtonText: 'Share!'
            });
        };
    };

    render(){
        const url = window.location.href;
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        const twitterUrl = `https://twitter.com/home?status=${url}`;

        return (
            <div className="social-share">
                <div>
                    <button className="social-share-btn" onClick={this.shareToggle}>{this.state.toggleButtonText}</button>
                </div>
                <div className={this.state.share}>
                    <a href={facebookUrl} target="_blank"><i className="fab fa-facebook-square"></i></a>
                    <a href={twitterUrl} target="_blank"><i class="fab fa-twitter-square"></i></a>
                </div>
            </div>
        )
    }
};

export default SocialShare;
