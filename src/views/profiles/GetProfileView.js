import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfile } from '../../actions/profiles/profileActions';
import GetProfile from '../../components/profiles/GetProfile';
import NavBar from '../../components/navBar/NavBar';
import Footer from '../../components/Footer/Footer';

export class GetProfileView extends React.Component {
  
  componentDidMount() {
    this.props.getProfile();
  }
  
  
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <GetProfile profile={this.props.profile} />
        </div>
        <div>
          {/* <Footer /> */}
        </div>
      </div>
    );
  }
}

GetProfileView.propTypes = {
  getProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profileReducer.profile
});

export default connect(
  mapStateToProps,
  { getProfile }
)(GetProfileView);
