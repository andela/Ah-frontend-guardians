import thunk from 'redux-thunk';
import {createArticleAction} from '../../components/articles/CreateArticle';
import 'babel-polyfill';
import mockAxios from 'axios'
import configureMockStore from 'redux-mock-store'


jest.mock('axios')

describe('testing article action creator', () =>{
 it('Should describe a successful action', async () =>{
     const middlewares = [thunk]
     const mockStore = configureMockStore(middlewares)
     const store = mockStore()
     const mockData = {title: "My Tirst Test", body: "I will always pass", description: "When the Lord is with me" }
     const article = {article: {title: "moses"}}

     mockAxios.post.mockImplementationOnce( () => {
        // console.log('here')
        Promise.resolve({data: article})
    })
     const expectedActions = [
         {type: 'CREATE_ARTICLE', article: article}
     ]

     await store.dispatch(createArticleAction(mockData))
     console.log(store.dispatch(createArticleAction(mockData)))
     expect(store.getActions()).toEqual(expectedActions)
     expect(mockAxios.post).toHaveBeenCalledTimes(1)

 })




}






)
