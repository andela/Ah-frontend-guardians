import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import { Link } from 'react-router-dom';

export default function GetProfile({ profile }) {
  const firstName = profile.first_name;
  const lastName = profile.last_name;
  
  return (
    <div className="container py-3">
      <div className="card">
        <div className="row">
          <div className="col-md-3">
         
          {profile.image ? <img src={profile.image} id="avatar2" alt="Avatar"/>:
          <i className="fas fa-user-circle fa-9x" ></i>
        }
            
          </div>
          <div className="col-md-9 px-3">
            <div className="card-block px-3">
              <h6 className="profile-padding">
                <span className="label label-default">username</span>&nbsp;
                &nbsp;
                <span
                  className="label label-default brand-color "
                  id="username"
                >
                  {profile.username}
                </span>
                <span className="btn-align">
                  {' '}
                  <Link to="/edit" className="btn btn-default">
                    Edit Profile
                  </Link>
                </span>
              </h6>

              <hr className="profile-label-border border-length" />
              <h6>
                <span className="label label-default">firstname</span>&nbsp;
                &nbsp;
                <span className="label label-default brand-color form-control1">
                  {firstName}
                </span>
              </h6>
              <hr className="profile-label-border" />
              <h6>
                <span className="label label-default">lastname</span>&nbsp;
                &nbsp;
                <span className="label label-default brand-color form-control1">
                  {lastName}
                </span>
              </h6>
              <hr className="profile-label-border" />
              <div />
              <h6>
                <div className="row justify-content-start">
                  <div className="col-md-1">
                    <span className="label label-default">bio</span>
                  </div>
                  &nbsp; 
                  <div className="col-md-8 ">
                    <span className="label label-default brand-color ">
                      {profile.bio}
                    </span>
                  </div>
                  <div className="col-md-2" />
                </div>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
