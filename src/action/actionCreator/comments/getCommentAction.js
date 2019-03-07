import axios from 'axios'
import COMMENTS from '../../actionType/commentType';


const token = window.localStorage.getItem('token')

const headers = {
  'Content-Type': 'application/json',
}

export const getCommentFail = error => ({
  type: COMMENTS.GET_COMMENTS_ERRORS,
  error,
});

export const getcommentAction = slug => dispatch => axios.get('https://ah-backend-guardians-staging.herokuapp.com/api/' + slug + '/comments/', { headers })
      .then((response) => {
         const getCommentSuccessfully = () => {                
                  return {
                    type: COMMENTS.GET_COMMENT,
                    data:response.data.comments,
                }
                };
          dispatch(getCommentSuccessfully())
      })
      .catch((error) => {          
          dispatch(getCommentFail(error.response))
      })

export default getcommentAction;
