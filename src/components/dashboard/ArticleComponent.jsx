import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import default_image from '../../images/default_image.jpeg';

export const Article = (props) => {
  const getPlainText = data => data.replace(/<(?:.|\n)*?>/gm, '');
  const slug = props.article && props.article.slug;
  const url = 'article/' + slug;

  return (
    <NavLink to={url} id="Nav">
      <div className="article-box welocme_msg">
        <div>
          {' '}
          <img id="articleImage" src={default_image} width="300" height="150" />
        </div>
        <div id="cont">
          <h3>{props.article && props.article.title}</h3>
          <p className="text-dark">
            {props.article && props.article.description.substring(0, 50) + '...'}
          </p>
          <div>
            by <font color="red">{props.article && props.article.author.username}</font>
            &nbsp;| &nbsp;
            <font style={{ color: `${'#25ABD1'}` }}>
              {props.article && props.article.read_time + ' min read'}
            </font>
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
