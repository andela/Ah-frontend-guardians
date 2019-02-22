import React from 'react';
import { Link } from 'react-router-dom';

export default function EditProfile({
  onChange,
  onClick,
  onSubmit,
  firstName,
  lastName,
  bio,
  image
}) {
  return (
    <div className="container">
      <h1>Edit Profile</h1>
      <hr />
      <div className="row">
        <div className="col-md-3">
          <div className="text-center">
            
         {
          window.localStorage.getItem('image')? (
            <img
              src={window.localStorage.getItem('image')}
              className="w-100"
              alt="Profile Picture"
              name="image"
              id="img-preview"
            />
          ):
           
          image ? (
          <img
                 src={image}
                 className="w-100"
                 alt="Profile Picture"
                 name="image"
                 id="img-preview"
               />
          ) :
 
           (
               <i className="fas fa-user-circle fa-9x" />
             )}
 
            <div className="upload-btn-wrapper">
              <button
                name="imageUpload"
                className="btn2"
                onClick={onClick}
                id="uploadImage"
              >
                {' '}
                Upload a file
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-9 personal-info">
          <h3>Personal info</h3>

          <form
            onSubmit={onSubmit}
            className="form-horizontal"
            role="form"
            id="editForm"
            encType="multipart/form-data"
          >
            <div className="form-group">
              <label className="col-lg-3 control-label">First name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  name="first_name"
                  value={firstName}
                  onChange={onChange}
                  id="firstName"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">Last name:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  name="last_name"
                  value={lastName}
                  onChange={onChange}
                  id="lastName"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">bio:</label>

              <div className="col-lg-8">
                <textarea
                  rows="8"
                  className="form-control"
                  name="bio"
                  value={bio}
                  onChange={onChange}
                  id="bio"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label" />
              <div className="col-md-8">
                <input className="btn btn-default" type="submit" value="Save" />
                &nbsp;&nbsp;
                <Link to="/profile" className="btn btn-primary">
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
