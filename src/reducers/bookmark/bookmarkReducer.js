const initialState = {
    bookmarked: false,
    payload: null
}

export const bookmarkReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKMARK_SUCCESS':
            return {
                ...state,
                bookmark: action.payload,
                bookmarked: true,
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

const initialStates = {
    bookmarked: null,
    bookmarks: []
}

export const createBookmarkReducer = (state = initialStates, action) => {
    switch (action.type) {
        case 'CREATE_BOOKMARK_SUCCESS':
            return {
                ...state,
                bookmarked: true,
                bookmarks: [...state.bookmarks, action.payload]
            };
        case 'CREATE_BOOKMARK_FAILURE':
            return {
                ...state,
                bookmarked: false,
            };
        case 'FETCH_ALL_BOOKMARK_SUCCESS':
            return {
                ...state,
                bookmarked: true,
                bookmarks: action.payload
            };

        case 'DELETE_BOOKMARK_SUCCESS':
            return {
                ...state,
                bookmarked: false,
                bookmarks: state.bookmarks.filter(bookmark => bookmark.slug !== action.slug)
            };
        default:
            return state
    }
}
