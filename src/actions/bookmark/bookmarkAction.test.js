import 'babel-polyfill';
import configureMockStore from 'redux-mock-store'
import mockAxios from 'axios'
import thunk from 'redux-thunk'
import { createBookmark, getBookmark, deleteBookmark, getAllBookmarks } from './bookmarkAction';

jest.mock('axios')

describe('getBookmark', () => {
    it('should dispatch success action', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()

        const bookmark = { 'bookmark': { title: 'hello mate', author: 'reality' } }


        mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: bookmark }))

        const expectedActions = [
            { type: 'FETCH_BOOKMARK_SUCCESS', payload: bookmark },
        ]

        await store.dispatch(getBookmark('mockSlug'))

        expect(store.getActions()).toEqual(expectedActions)
        expect(mockAxios.get).toHaveBeenCalledTimes(1)
    })

    it('should dispatch failure action', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()

        const error = { 'errors': "bookmark doesnot exist exists" }

        mockAxios.get.mockImplementationOnce(() => Promise.reject({ response: 'error' }))

        const expectedActions = [
            { type: 'FETCH_BOOKMARK_FAILURE', error: error.errors },
        ]

        await store.dispatch(getBookmark(''))

        expect(mockAxios.get).toHaveBeenCalledTimes(1)
    })
})

describe('getAllBookmark', () => {
    it('should dispatch success action', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()

        const bookmarks = { 'bookmarks': [{ title: 'hello mate', author: 'reality' }] }

        mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: bookmarks }))

        const expectedActions = [
            { type: 'FETCH_ALL_BOOKMARK_SUCCESS', payload: bookmarks.bookmarks },
        ]

        await store.dispatch(getAllBookmarks())

        expect(store.getActions()).toEqual(expectedActions)
        expect(mockAxios.get).toHaveBeenCalledTimes(1)
    })

    it('should dispatch failure action', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()

        const error = { 'errors': "bookmark doesnot exist exists" }

        mockAxios.get.mockImplementationOnce(() => Promise.reject({ response: 'error' }))

        const expectedActions = [
            { type: 'FETCH_ALL_BOOKMARK_FAILURE', error: error.errors },
        ]

        await store.dispatch(getAllBookmarks())

        expect(mockAxios.get).toHaveBeenCalledTimes(1)
    })
})

describe('createBoomark', () => {
    it('should dispatch create action successfully', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()

        const bookmark = { 'bookmark': { title: 'hello mate', author: 'reality', slug: 'mockSlug' } }


        mockAxios.post.mockImplementationOnce(() => Promise.resolve({ data: bookmark.bookmark }))

        const expectedActions = [
            { type: 'CREATE_BOOKMARK_SUCCESS', payload: bookmark.bookmark },
        ]

        await store.dispatch(createBookmark('mock_Slug'))
        expect(store.getActions()).toEqual(expectedActions)
        expect(mockAxios.post).toHaveBeenCalledTimes(1)
    })

    it('should dispatch failure create action', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()

        const error = { 'errors': "bookmark doesnot exist exists" }

        mockAxios.post.mockImplementationOnce(() => Promise.reject({ response: 'error' }))

        const expectedActions = [
            { type: 'FETCH_BOOKMARK_FAILURE', error: error.errors },
        ]

        await store.dispatch(createBookmark(''))

        expect(mockAxios.post).toHaveBeenCalledTimes(1)
    })
    it('should dispatch delete action successfully', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()

        mockAxios.delete.mockImplementationOnce(() => Promise.resolve({ data: 'you have delete' }))

        const expectedActions = [
            { type: 'DELETE_BOOKMARK_SUCCESS', slug: 'mock_Slug' },
        ]

        await store.dispatch(deleteBookmark('mock_Slug'))
        expect(store.getActions()).toEqual(expectedActions)
        expect(mockAxios.delete).toHaveBeenCalledTimes(1)
    })
    it('should dispatch failure create action', async () => {
        const middlewares = [thunk]
        const mockStore = configureMockStore(middlewares)
        const store = mockStore()


        mockAxios.delete.mockImplementationOnce(() => Promise.reject({ response: 'error' }))

        const expectedActions = [
            { type: 'DELETE_BOOKMARK_FAILURE' },
        ]

        await store.dispatch(deleteBookmark('tns'))
        expect(mockAxios.delete).toHaveBeenCalledTimes(1)
    })
})
