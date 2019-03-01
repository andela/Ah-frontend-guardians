import { bookmarkReducer, createBookmarkReducer } from './bookmarkReducer';

const { } = {
    bookmark: {},
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

        const newState = bookmarkReducer({}, action)

        expect(newState.bookmarked).toEqual(true)
    })
    it('should return no bookmark on action FETCH_BOOKMARK_FAILURE', () => {
        const action = {
            type: 'FETCH_BOOKMARK_FAILURE',
        }

        const newState = bookmarkReducer({}, action)

        expect(newState.bookmarked).toEqual(false)
    })
    it('should return initial state with no action', () => {
        expect(bookmarkReducer(undefined, {})).toEqual({
            bookmarked: null
        })
    })
})

describe('createBookmarkReducer', () => {
    it('should create a bookmark on action CREATE_BOOKMARK_SUCCESS', () => {
        const action = {
            type: 'CREATE_BOOKMARK_SUCCESS',
            bookmark: { title: 'hello' },
        }

        const newState = createBookmarkReducer([], action)

        expect(newState.bookmarked).toEqual(true)
    })
    it('should delete a bookmark on action DELETE_BOOKMARK_SUCCESS', () => {
        const action = {
            type: 'DELETE_BOOKMARK_SUCCESS',
            slug: 'tpain',
        }

        const newState = createBookmarkReducer([], action)

        expect(newState.bookmarked).toEqual(false)
    })
    it('should return no bookmarks on action CREATE_BOOKMARK_FAILURE', () => {
        const action = {
            type: 'CREATE_BOOKMARK_FAILURE',
        }

        const newState = createBookmarkReducer([], action)

        expect(newState).toEqual([])
    })
    it('should return initial state with no action', () => {
        expect(createBookmarkReducer(undefined, [])).toEqual([])
    })
})
