import { GET_READING_STATS_SUCCESS } from "../../actions/readingStats/types";

export default function (state = {}, action) {
    switch(action.type){
        case GET_READING_STATS_SUCCESS:
            return {
                ...state,
                readingStats: action.payload
            }
        default:
            return state
    }
}
