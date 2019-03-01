import React from 'react'
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { Bookmark, mapStateToProps } from './Bookmark';

describe('Bookmark', () => {
    let wrapper
    const mockCreateBookmarkfn = jest.fn()
    const mockgetBookmarkfn = jest.fn()
    const mockdeleteBookmarkfn = jest.fn()

    beforeEach(() => {
        wrapper = shallow(<Bookmark getBookmark={mockgetBookmarkfn} deleteBookmark={mockdeleteBookmarkfn}
            createBookmark={mockCreateBookmarkfn} />)
    })

    it('should call ComponentDidMount', () => {
        const spy = jest.spyOn(Bookmark.prototype, 'componentDidMount');

        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalled();
    })
    it('should call ComponentWillReceiveprops', () => {
        const spy = jest.spyOn(Bookmark.prototype, 'componentWillReceiveProps');

        wrapper.instance().componentWillReceiveProps();
        wrapper.setProps({
            bookmarked: true
        });
        expect(spy).toHaveBeenCalled();
        expect(mockgetBookmarkfn.mock.calls.length).toEqual(1)
    })
    it('should call ComponentWillReceiveprops with bookmars', () => {
        const spy = jest.spyOn(Bookmark.prototype, 'componentWillReceiveProps');
        const nextProps = {
            bookmarks: {}
        }

        wrapper.instance().componentWillReceiveProps(nextProps);
        wrapper.setProps({
            bookmarked: true
        });
        expect(spy).toHaveBeenCalled();
        expect(mockgetBookmarkfn.mock.calls.length).toEqual(2)
    })
    it('should call deleteBookmark', () => {
        const props = {
            bookmark: { bookmarked: true }
        }

        wrapper = shallow(<Bookmark getBookmark={mockgetBookmarkfn} deleteBookmark={mockdeleteBookmarkfn}
            createBookmark={mockCreateBookmarkfn} {...props} />)
        wrapper.find('#bookmark').simulate(
            'click',
            { preventDefault() { } },
        )
        expect(wrapper.find('#bookmark').length).toEqual(1)
    })

    it('should call createBookmark', () => {
        const props = {
            bookmark: { bookmarked: false }
        }

        wrapper = shallow(<Bookmark getBookmark={mockgetBookmarkfn} deleteBookmark={mockdeleteBookmarkfn}
            createBookmark={mockCreateBookmarkfn} {...props} />)
        wrapper.find('#bookmark').simulate(
            'click',
            { preventDefault() { } },
        )
        expect(wrapper.find('#bookmark').length).toEqual(1)
    })
    it('mapStateToProps should return the right value', () => {
        const mockedState = {
            bookmark: {
                title: 'hello',
                message: 'loggedIn',
            },
        };
        const state = mapStateToProps(mockedState);

        expect(state).toEqual({ "bookmark": { "message": "loggedIn", "title": "hello" } });
    });
})
