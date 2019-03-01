import axios from 'axios'
import COMMENTS from '../../actionType/commentType';


const token = window.localStorage.getItem('token')

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
}

export const postCommentSuccessfully = (comments) => {
  console.log(COMMENTS.POST_COMMENT);

  return {
    type: COMMENTS.POST_COMMENT,
    comments,
} 
};

export const postCommentFail = error => ({
  type: COMMENTS.COMMENTS_ERRORS,
  error,
});

export const postcommentAction = (slug, commentData) => (dispatch) => {
  console.log(commentData, "Coomeyyyy");

  return axios.post('https://ah-backend-guardians-staging.herokuapp.com/api/' + slug + '/comments/', commentData, { headers })
      .then((response) => {
        console.log(response, 'ReSpONse');
        if (response.data) {
          dispatch(postCommentSuccessfully(response.data))
        }
      })
      .catch((error) => {
        console.log(error.response.data.errors.body[0], "ERRORS--------")
          dispatch(postCommentFail(error.response.data.errors.body[0]))
      })
    }

export default postcommentAction;