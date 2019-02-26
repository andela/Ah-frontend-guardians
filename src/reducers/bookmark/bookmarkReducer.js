const initialState = {
    bookmarked: null
}

export const bookmarkReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKMARK_SUCCESS':
            return {
                ...state,
                bookmarked: true,
                bookmark: action.bookmark
            };
        case 'FETCH_BOOKMARK_FAILURE':
            return {
                ...state,
                bookmarked: false,
            };
        default:
            return state;
    }
}


export const createBookmarkReducer = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_BOOKMARK_SUCCESS':
            return {
                ...state,
                bookmarked: true,
            };
        case 'DELETE_BOOKMARK_SUCCESS':
            return {
                ...state,
                bookmarked: false,
            };
        default:
            return state
    }
}
