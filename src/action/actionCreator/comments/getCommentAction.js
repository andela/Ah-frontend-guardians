import axios from 'axios'
import COMMENTS from '../../actionType/commentType';


const token = window.localStorage.getItem('token')

const headers = {
  'Content-Type': 'application/json',
//   'Authorization': `Bearer ${token}`,
}

// export const getCommentSuccessfully = (comments) => {
//   console.log(COMMENTS.POST_COMMENT);

//   return {
//     type: COMMENTS.GET_COMMENT,
//     comments,
// }
// };

export const getCommentFail = error => ({
  type: COMMENTS.GET_COMMENTS_ERRORS,
  error,
});

export const getcommentAction = slug => dispatch => axios.get('https://ah-backend-guardians-staging.herokuapp.com/api/' + slug + '/comments/', { headers })
      .then((response) => {
        console.log("Response", response.data.comments);
        //   console.log("Response", response.data.comments[0].body);
        // if (response.data) {dispatch({
         const getCommentSuccessfully = () => {                
                  return {
                    type: COMMENTS.GET_COMMENT,
                    data:response.data.comments,
                }
                };
      
    //   dispatch(getCommentSuccessfully(response.data.comments[0].body))

          dispatch(getCommentSuccessfully())
        // }
      })
      .catch((error) => {          
          dispatch(getCommentFail(error.response))
      })

export default getcommentAction;
