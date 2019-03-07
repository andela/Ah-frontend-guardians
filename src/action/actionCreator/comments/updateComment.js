import axios from 'axios'
import COMMENTS from '../../actionType/commentType';
import { toast } from 'react-toastify';

const token = window.localStorage.getItem('token')

const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`,
}

export const updateCommentSuccessfully = (comments) => {

  return {
    type: COMMENTS.UPDATE_COMMENT,
    comments,
} 
};

export const updateCommentAction= (slug, commentData, commentId) => (dispatch) => {
  return axios.put('https://ah-backend-guardians-staging.herokuapp.com/api/' + slug + '/comments/' + commentId + '/', commentData, { headers })
      .then((response) => {
        toast.success("Comment updated successfully")
          dispatch(updateCommentSuccessfully(response.data))
      })
      .catch((error) => {
      })
    }

export default updateCommentAction;