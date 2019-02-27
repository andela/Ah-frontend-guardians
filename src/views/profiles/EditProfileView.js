import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/Footer/Footer';

import EditProfile from '../../components/profiles/EditProfile';
import {
  getProfile,
  updateProfile
} from '../../actions/profiles/profileActions';

export class EditProfileView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      bio: '',
      image: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    const { first_name, last_name, bio, image } = nextProps.profile;
    this.setState({
      first_name,
      last_name,
      bio,
      image
    });
  }
  componentWillMount() {
    this.props.getProfile();
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const updProfile = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      bio: this.state.bio,
      image: window.localStorage.getItem('newImage')
    };
    this.props.updateProfile(updProfile);
    toast.success('Profile edited');
    this.props.history.push('/profile');
  };
  onClick = e => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: 'myrdstom',
        upload_preset: 'ianoy71i',
        cropping: true,
        folder: 'widgetdocs',
        sources: [
          'local',
          'url',
          'camera',
          'facebook',
          'dropbox',
          'search',
          'instagram'
        ]
      },
      (error, result) => {
        if (result.event === 'success') {
          let newImage = result.info.secure_url;
          window.localStorage.setItem('newImage', newImage);
          window.localStorage.setItem('image', newImage);
          window.location.reload();
        }
      }
    );
  };
  render() {
    const { first_name, last_name, bio, image } = this.state;

    return (
      <div>
        <NavBar />

        <EditProfile
          firstName={first_name}
          lastName={last_name}
          bio={bio}
          image={image}
          onChange={this.onChange}
          onSubmit={this.handleSubmit}
          onClick={this.onClick}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profileReducer.profile
});

export default connect(
  mapStateToProps,
  { updateProfile, getProfile }
)(EditProfileView);
