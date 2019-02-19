import React from 'react';
import configureMockStore from 'redux-mock-store'
import sinon from 'sinon';
import { shallow } from 'enzyme';
import {CommentsList, mapStateToProps} from "./CommentsListView";
// import {mapStateToProps} from "./CommentsListView";

const props = {
    errors: "",
    data: "",
    onChange: jest.fn(),
    onSubmit: jest.fn(),
  };

  describe(`CommentView`, () => {
    let wrapper;
    const mockLoginfn = jest.fn()

    beforeEach(() => {
        wrapper = shallow(<CommentsList {...props} postcommentAction={mockLoginfn}/>)
    })
    it("Comment form should render", () => {
      expect(wrapper).toMatchSnapshot();
    });
    describe('When the form is submitted', () => {
        it('should call the mock comment function', () => {
            wrapper.find('CommentForm').dive().find('#comment_form_container').simulate('submit',
                { preventDefault() { } })
            expect(mockLoginfn.mock.calls.length).toBe(1);
        })
        it('should be called with the comment in the state as arguments', () => {
            const simulator = (name, value) => wrapper.find('CommentForm').dive().find('#comment').simulate(
                    'change', {
                        target:
                            { name, value },
                    },
                )

            simulator('comment', 'Good article')
            wrapper.find('CommentForm').dive().find('#comment_form_container').simulate(
                'submit',
                { preventDefault() { } },
            )
            expect(mockLoginfn.mock.calls[0][1]).toEqual(
                {
                    body: 'Good article',
                },
            )
        })
        it('should will recieve error comment props', () => {
            const newState = { errors: "efgrt" }

              wrapper.setProps(newState)
            console.log(wrapper.state());

              expect(wrapper.state()).toEqual({ "data": "", "errors": "efgrt", "commentstate": '' })
          })
          it('should will recieve data comment props', () => {
            const newState = { data: "efgrt" }

              wrapper.setProps(newState)
              expect(wrapper.state()).toEqual({ "errors": "", "data": "efgrt", "commentstate": '' })
          })
          it('handles the state changes on the comment Form', () => {
            const commentField = wrapper.find('CommentForm').dive().find('#comment_form_container')

            commentField.value = 'Looks good to me';
            const event = { target: { name: 'comment', value: 'Looks good to me' } };

            commentField.simulate('change', event);
            expect(commentField.value).toEqual('Looks good to me');
          });
 })
})
describe('tests for <CommentView> container', () => {
    it('call comment once', () => {
        const spy = sinon.spy(CommentsList.prototype, 'componentWillReceiveProps');
        const wrapper = shallow(<CommentsList error={{}} />);

        expect(spy).toHaveProperty('callCount', 0);
        wrapper.setProps({
            error: { errors: "Field Required" },
        });
        console.log(spy);       
        expect(spy).toHaveProperty('callCount', 1);
    })
    it('mapStateToProps should return the right value', () => {
      const mockedState = {
        commentarticle: {
          errors: "",
          data: 'Nicearticle',
        },
      };
      const state = mapStateToProps(mockedState);
    
      console.log(state);

      expect(state.data).toEqual('Nicearticle');
    });
  })
