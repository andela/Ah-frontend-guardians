import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchSignUp } from '../../../actions/signup/signUpAction';
import SignUpForm from '../../SignUp/SignUpForm';
import SocialLinks from '../../SignUp/SocialLinks';
import '../../../css/signup.css';


export class SignUpView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            error: {
                username: "",
                password: "",
                email: "",
            },
            message: {},
        }
    }
    componentWillReceiveProps(nextProps) {
        const { error, history, message } = nextProps
        if (error) {
            this.setState({ error: error.data })
        }
        if (message) {
            this.setState({ message: message });
            history.push('/');
            toast.success('Go to your email to verify your account')
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        this.props.fetchSignUp(data);
    }


    render() {
        return (
            <div >

                <h1>Author's Haven</h1>
                <p id="join_text">Join Author’s Haven today and enjoy the best stories of your interest
                and create your own  stories</p>
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-4 m-2">
                        <div className="form_outline">
                            <SignUpForm onChange={this.onChange} onSubmit={this.handleSubmit} errors={this.state.error} />
                            <p id="signup_text">or Sign up with your social media</p>
                            <SocialLinks />
                            <p id="login_text">Have an account? <a href="/login" className="login_span">Login</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = state => ({

    error: state.signup.error,
    message: state.signup.message

})

export default connect(mapStateToProps, { fetchSignUp })(SignUpView);
