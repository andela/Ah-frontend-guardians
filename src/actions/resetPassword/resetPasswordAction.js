import axios from 'axios';
import * as type from './actionTypes';
import { toast } from 'react-toastify';

const fetchResetEmail = (email) => (dispatch) => {
    const data = {
        email
    }
    axios.post('https://ah-backend-guardians-staging.herokuapp.com/api/password-reset/', data)
        .then((response) => {
            dispatch({
                type: type.RESET_PASSWORD_SUCCESS,
                message: response.data
            });
            toast.success(response.data.message)
        })
        .catch((error) => {
            dispatch({
                type: type.RESET_PASSWORD_FAILURE,
                message: error
            })
            toast.error(error.response.data.errors.email[0])
        });
}

export default fetchResetEmail;
