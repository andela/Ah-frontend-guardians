import axios from 'axios';
import { BASE_URL, token } from '../index';
import { GET_READING_STATS_SUCCESS } from './types';

const headers = {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`
}

export const getReadingStats = (username) => dispatch => {
    axios.get(`${BASE_URL}profiles/${username}/reading-stats/`, {headers})
    .then((res) => {
        dispatch({
            type: GET_READING_STATS_SUCCESS,
            payload: res.data.reading_stats
        })
    })
    .catch((err) => {
        console.log(err);
    })
}
