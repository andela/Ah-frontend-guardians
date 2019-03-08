import React from 'react';
import { shallow } from 'enzyme';
import {PostComment, mapStateToProps} from "../postComent";

const props={
  getcommentAction:jest.fn(),
  postcommentAction:jest.fn(),
  slug:"test"
}

const e ={
  preventDefault:()=>{}
}
localStorage.setItem('token','token')
  describe(`CommentView`, () => {
    let wrapper;
    beforeEach(() => {
    wrapper = wrapper=shallow(<PostComment {...props}/>)
    console.log(wrapper.instance())
    })

   

    it("Comment form should render handleFormSubmit", () => {    
      wrapper.instance().handleFormSubmit(e)
      expect(props.postcommentAction).toBeCalled()
    })
    
    it("Comment form should render", () => {
      expect(wrapper).toMatchSnapshot();
    });
    describe('When the form is submitted', () => {
        it('should call the mock comment function', () => {
            wrapper.find('CommentForm').dive().find('#comment_form_container').simulate('submit',
                { preventDefault() { } })                
            expect(props.postcommentAction.mock.calls.length).toBe(1);
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
            expect(props.postcommentAction.mock.calls[0][1]).toEqual(
                {
                    body: 'Good article',
                },
            )
        })
        it('should will recieve error comment props', () => {
            const newState = { errors: "efgrt" }

              wrapper.setProps(newState)
            console.log(wrapper.state());

              expect(wrapper.state()).toEqual({ "body": "", "errors": "efgrt", "commentstate": '', "data":"" })
          })
          it('should will recieve data comment props', () => {
            const newState = { data: "efgrt", errors:"" }

              wrapper.setProps(newState)
              expect(wrapper.state()).toEqual({ "errors": "", "data": "efgrt", "commentstate": '', "body":""})
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