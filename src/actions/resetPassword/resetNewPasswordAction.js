import axios from 'axios';
import * as type from './actionTypes';
import { toast } from 'react-toastify';

const fetchResetPassword = (password, confirm_password, slug) => (dispatch) => {
    const data = {
        password,
        confirm_password
    }
    let URL = 'https://ah-backend-guardians-staging.herokuapp.com/api/password-reset-confirm/' + slug
    axios.put(URL, data)
        .then((response) => {
            dispatch({
                type: type.PASSWORD_CHANGE_SUCCESS,
                payload: response.data
            });
            toast.success(response.data.message.detail[0])
        })
        .catch((error) => {
            dispatch({
                type: type.PASSWORD_CHANGE_FAILURE,
                payload: error
            });
            toast.error(error.response.data.errors.body[0])
        });
}

export default fetchResetPassword;
