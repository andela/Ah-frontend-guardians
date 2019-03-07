import { bookmarkReducer, createBookmarkReducer } from './bookmarkReducer';

const initialState = {
    bookmarked: null,
    payload: null,
}

describe('bookmarkReducer', () => {
    it('should return bookmark on action FETCH_BOOKMARK_SUCCESS', () => {
        const action = {
            type: 'FETCH_BOOKMARK_SUCCESS',
            bookmark: {
                title: 'hello',
                author: 'solo',
            },
        }

        const newState = bookmarkReducer(initialState, action)

        expect(newState.bookmarked).toEqual(true)
    })
    it('should return no bookmark on action FETCH_BOOKMARK_FAILURE', () => {
        const action = {
            type: 'FETCH_BOOKMARK_FAILURE',
        }

        const newState = bookmarkReducer(initialState, action)

        expect(newState.bookmarked).toEqual(false)
    })
    it('should return initial state with no action', () => {
        expect(bookmarkReducer(undefined, initialState)).toEqual({
            bookmarked: false,
            payload: null
        })
    })
})

const initialStates = {
    bookmarked: null,
    payload: null,
    bookmarks: [{ id: 1, slug: "tpain", title: 'hello' }]
}

describe('createBookmarkReducer', () => {
    it('should create a bookmark on action CREATE_BOOKMARK_SUCCESS', () => {
        const action = {
            type: 'CREATE_BOOKMARK_SUCCESS',
            bookmark: { title: 'hello' },
        }

        const newState = createBookmarkReducer(initialStates, action)

        expect(newState.bookmarked).toEqual(true)
    })
    it('should fetch a bookmark on action FETCH_ALL_BOOKMARK_SUCCESS', () => {
        const action = {
            type: 'FETCH_ALL_BOOKMARK_SUCCESS',
            bookmarks: [{ title: 'hello' }],
        }

        const newState = createBookmarkReducer(initialStates, action)

        expect(newState.bookmarked).toEqual(true)
    })
    it('should delete a bookmark on action DELETE_BOOKMARK_SUCCESS', () => {
        const action = {
            type: 'DELETE_BOOKMARK_SUCCESS',
            slug: 'tpain',
        }

        const newState = createBookmarkReducer(initialStates, action)

        expect(newState).toEqual({ "bookmarked": false, "bookmarks": [], "payload": null })
    })
    it('should return no bookmarks on action CREATE_BOOKMARK_FAILURE', () => {
        const action = {
            type: 'CREATE_BOOKMARK_FAILURE',
        }

        const newState = createBookmarkReducer(initialStates, action)

        expect(newState).toEqual({ bookmarked: false, bookmarks: [{ id: 1, slug: "tpain", title: 'hello' }], payload: null })
    })
    it('should return initial state with no action', () => {
        expect(createBookmarkReducer(undefined, [])).toEqual({
            "bookmarked": null,
            "bookmarks": [],
        })
    })
})
