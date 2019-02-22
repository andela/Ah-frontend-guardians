import React, { Component } from 'react';
import Form from '../../presentational/login/login';
import { connect } from 'react-redux';
import signinAction from '../../../action/actionCreator/login/loginCreator';
import '../../../css/styleLogin.css';

export class LoginView extends Component {
  state = {
    value: '',
    errors: {},
    data: ''
  };
  componentDidMount() {}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentWillReceiveProps(nextProps) {
    const { data, errors } = nextProps;
    if (errors) {      
      this.setState({ errors: errors.data});
    } else if (data) {
      this.setState({ data: data});
      this.props.history.push('/');
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.signinAction(data);
  };

  render() {
    return (
      <div>
        <h1>Author's Haven</h1>
        <p id="welcome_text">We are glad to have you back at Author's Haven</p>
        <Form
          changed={this.handleChange}
          FormSubmit={this.handleFormSubmit}
          errors={this.state.errors}
          data={this.state.data}
        />
      </div>
    );
  }
}
export const mapStateToProps = (state) => {
  
  return {
    data: state.signin.data,
    errors: state.signin.errors,
  };
};
export default connect(
  mapStateToProps,
  { signinAction }
)(LoginView);
