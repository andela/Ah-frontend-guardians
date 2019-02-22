import React from 'react';
import { MyArticles, mapStateToProps } from './MyArticles';
import { shallow } from 'enzyme';

const myArticles = jest.fn();

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
    my_articles: [{
        id: 1,
        title: "title",
        description: "desc",
        author: {username: "Emmanuel", email: "emma@gmail.com"},
        read_time: 1,
        image: "",
        body: "body",
        tags: "tags",
        slug: "code"
    }],
    myArticles
};

describe("My Articles tests", () => {
    it("should render the element", () => {
        const wrapper = shallow(<MyArticles {...props} />);
        const component = wrapper.find('#parent');
        expect(component.length).toEqual(1);
    });

    it("should map states to props", () => {
        const mockedState = {
            articleReducer:{my_articles: {"slug":"slug"}}
        }
        const state = mapStateToProps(mockedState);
        expect(state.my_articles).toEqual({"slug":"slug"});
    });
});