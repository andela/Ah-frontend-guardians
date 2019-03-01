import axios from 'axios'
import COMMENTS from '../../actionType/commentType';
import { toast } from 'react-toastify';

const token = window.localStorage.getItem('token')

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
}

export const deleteCommentSuccessfully = (comments) => {
  console.log(COMMENTS.UPDATE_COMMENT);

  return {
    type: COMMENTS.DELETE_COMMENT,
    comments,
} 
};

export const deleteCommentAction= (slug, commentId) => (dispatch) => {
  return axios.delete('https://ah-backend-guardians-staging.herokuapp.com/api/' + slug + '/comments/' + commentId + '/', { headers })
      .then((response) => {
          dispatch(deleteCommentSuccessfully(response.data))
          toast.success("Comment deleted successfully")
      })
      .catch((error) => {
          console.log(error);
      })
    }

export default deleteCommentAction;