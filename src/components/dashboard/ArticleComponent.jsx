import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import default_image from '../../images/default_image.jpeg';

export const Article = props => {
  const getPlainText = data => data.replace(/<(?:.|\n)*?>/gm, '');
  const slug = props.article && props.article.slug;
  const url = 'article/' + slug;
  return (
    <NavLink to={url} id="Nav">
      <div className="article-box">
        <div>
          {' '}
          <img id="articleImage" src={default_image} width="300" height="150"/>
        </div>
        <div>
          <h3>{props.article && props.article.title}</h3>
          <h5>
            {props.article &&
              props.article.description.substring(0, 50) + '...'}
          </h5>
          <div>
            <i>
              By : {props.article && props.article.author.username}
              &nbsp;Created : &nbsp;
              {moment(props.article && props.article.created_at).fromNow()}
            </i>
          </div>
        </div>
      </div>
    </NavLink>
  );
};
Article.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.object,
    body: PropTypes.string,
    title: PropTypes.string,
    created_at: PropTypes.string
  })
};
export default Article;
