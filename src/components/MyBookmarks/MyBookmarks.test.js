import React from 'react'
import { shallow } from 'enzyme';
import { MyBookmarks, mapStateToProps } from './MyBookmarks';

const props = {
    bookmarks: [
        {
            id: 1,
            title: "title",
            description: "desc",
        }
    ],
}

describe('Bookmark', () => {
    let wrapper
    const mockgetBookmarkfn = jest.fn()
    const mockdeleteBookmarkfn = jest.fn()

    beforeEach(() => {
        wrapper = shallow(<MyBookmarks getAllBookmarks={mockgetBookmarkfn} deleteBookmark={mockdeleteBookmarkfn} {...props} />)
    })

    it('should call ComponentDidMount', () => {
        const spy = jest.spyOn(MyBookmarks.prototype, 'componentDidMount');

        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalled();
    })

    it('mapStateToProps should return the right value', () => {
        const mockedState = {
            bookmarks: {
                bookmarks: [{
                    title: 'hello',
                    message: 'loggedIn',
                }]
            },
        };
        const state = mapStateToProps(mockedState);

        expect(state.bookmarks).toEqual([{ "message": "loggedIn", "title": "hello" }]);
    });
})
