import axios from "axios";

import * as type from './actionTypes';

export const fetchSignUp = (data) => (dispatch) =>
    axios.post('https://ah-backend-guardians-staging.herokuapp.com/api/users/', data)
        .then((response) => {
            console.log(response.data)
            dispatch({
                type: type.FETCH_SIGNUP_SUCCESS,
                message: response.data
            });
        }).catch(error => {
            dispatch({
                type: type.FETCH_SIGNUP_FAILURE,
                error: error.response,
            });
        })
