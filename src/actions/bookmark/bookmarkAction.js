import axios from "axios";
import { BASE_URL } from "../index";
import { toast } from "react-toastify";

const token = localStorage.getItem('token');

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
};

export const getBookmark = slug => (dispatch) => {
    axios.get(`${BASE_URL}bookmarks/${slug}/`, { headers })
        .then((response) => {
            dispatch({
                type: 'FETCH_BOOKMARK_SUCCESS',
                payload: response.data
            });
        }).catch((error) => {
            dispatch({
                type: 'FETCH_BOOKMARK_FAILURE',
                payload: error.response.data
            });
        })
}

export const createBookmark = slug => dispatch => axios.post(`${BASE_URL}articles/${slug}/bookmark/`, {}, { headers })
    .then((response) => {
        dispatch({
            type: 'CREATE_BOOKMARK_SUCCESS',
            payload: response.data
        });
    }).catch((error) => {
        dispatch({
            type: 'CREATE_BOOKMARK_FAILURE',
            payload: error.response.data
        });
    })

export const deleteBookmark = slug => (dispatch) => {
    axios.delete(`${BASE_URL}bookmarks/${slug}/`, { headers })
        .then((response) => {
            dispatch({
                type: 'DELETE_BOOKMARK_SUCCESS',
                payload: slug,
            });
        }).catch((error) => {
            dispatch({
                type: 'DELETE_BOOKMARK_FAILURE',
                payload: error.response.data
            });
        })
}
