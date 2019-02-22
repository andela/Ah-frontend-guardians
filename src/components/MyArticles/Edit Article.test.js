import {Articles} from "./Edit Article";
import { shallow } from "enzyme";
import React from "react";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; 
import sinon from 'sinon';
import {mapStateToProps} from './Edit Article'


const props = {
    title: "",
    description: "",
    body: "",
    image: "",
    slug: "",
    tags: [],
    edit_article: {},
    match: {
        params: {
            slug: "code"
        }
    },
    article: [{
        title: "title",
        description: "desc",
        image: "",
        body: "body",
        tags: "tags",
        slug: "code"
    }]
};

const initialState = {
    articleReducer: {
        my_articles: [{
            title: "title",
            description: "desc",
            image: "",
            body: "body",
            tags: "tags",
            slug: "code",}]
    }
}

describe('Articles', () => {
 it('should call the handle submit', () => {
   const mockSubmit = jest.fn();
   const wrapper = shallow(
        <Articles editArticle={mockSubmit} {...props} />
   );


   wrapper.find('#editForm').simulate('submit', {preventDefault() {}});
   wrapper.find('#title').simulate('change', {target: {name:"title", value: "title"}});
   wrapper.find('#body').simulate('change', {target: {name:"body", value: "body"}});
   wrapper.find('#tags').simulate('change', {target: {name:"tags", value: "tags"}});
   expect(mockSubmit.mock.calls.length).toEqual(1);
 });

 it('should recieve props', () => {
    const historyMock = { push: jest.fn() };
    const wrapper = shallow(
        <Articles history={historyMock} {...props} />
   );
    wrapper.setProps({ edit_article: {} })
    expect(wrapper.state('edit_article')).toEqual({})
 });

 it('mapStateToProps should return the right props', () => {
       const mockedState = {
           articleReducer:{edit_article: {"slug":"slug"}, my_articles:[]}
       }
       const state = mapStateToProps(mockedState);
       expect(state.edit_article).toEqual({"slug":"slug"});
   });
})
