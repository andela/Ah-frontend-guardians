import React from 'react';
import default_image from "../../images/default_image.png";
import { NavLink } from "react-router-dom";


export default function SearchData({ title, username, rating, readTime, slug }) {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="col-md-12 mt-5">
            <div className="row flex-container">
              <div className="col-md-4 text-center">
                <img src={default_image} alt="image" className="image-size"/>
              </div>
              <div className="col-md-4 content-a">
                <br />
                <h3>{title}</h3>
                <a>
                  <p />
                  by <span className="author">{username}</span> |
                  <span className="read_time"> {readTime} min read</span>
                </a>
                <p />
                <a>
                  <span className="rating">Rating: </span>
                  <span className="rating-value">{rating}</span>
                </a>
                <br />
                <br/>
                <NavLink to={`/article/${slug}`} activeClassName="active" className="textlink">
                           <span>View Article</span>
                       </NavLink>
              </div>
              <div className="col-md-4">
                <div className="buttons mt-5" />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
