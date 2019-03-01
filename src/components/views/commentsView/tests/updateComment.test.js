import React from 'react';
import { shallow } from 'enzyme';
import { GetComments , mapStateToProps} from "../CommentGetView";

const props={
  getcommentAction:jest.fn(),
  updateCommentAction:jest.fn(),
  deleteCommentAction:jest.fn(),
  updateComment:"UPDATED",
  deleteComment:"DELETED",
  slug:"test",
  comments:[{id:4 , body:"this is an article", author: { username:"guardians"}, }],
}

const e ={
  preventDefault:()=>{},
  target: { id: 1, value: 123 }
}
localStorage.setItem('token','token')
let wrapper 
  describe(`CommentView`, () => {

    it("Comment form should render handleFormSubmit", () => {  
     wrapper = shallow(<GetComments {...props}/>)
      wrapper.instance().onSubmit(e)
      wrapper.instance().handleDelete(e)
      expect(props.updateCommentAction).toBeCalled()
    })

    it("dcbdg", () => {  
        wrapper = shallow(<GetComments {...props}/>)
        wrapper.instance().onChange(e)
        expect(wrapper.instance().state.commentstate).toEqual(123)
        })
       
    
    it("Comment form should render", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("shdjbsad", () =>{
        wrapper = shallow(<GetComments {...props}/>)
        wrapper.setProps(props)
        expect(wrapper.instance().state.updateComment).toEqual("UPDATED")
        expect(wrapper.instance().state.deleteComment).toEqual("DELETED")
    });

    describe('When the form is submitted', () => {
        // it('should call the mock comment function', () => {
        //     wrapper.find('form').simulate('submit',
        //         { preventDefault() { } })                
        //     expect(props.postcommentAction.mock.calls.length).toBe(1);
        // });

//         it('should be called with the comment in the state as arguments', () => {
//             const simulator = (name, value) => wrapper.find('CommentForm').dive().find('#comment').simulate(
//                     'change', {
//                         target:
//                             { name, value },
//                     },
//                 )

//             simulator('comment', 'Good article')
//             wrapper.find('CommentForm').dive().find('#comment_form_container').simulate(
//                 'submit',
//                 { preventDefault() { } },
//             )
//             expect(props.postcommentAction.mock.calls[0][1]).toEqual(
//                 {
//                     body: 'Good article',
//                 },
//             )
//         })
//         it('should will recieve error comment props', () => {
//             const newState = { errors: "efgrt" }

//               wrapper.setProps(newState)
//             console.log(wrapper.state());

//               expect(wrapper.state()).toEqual({ "body": "", "errors": "efgrt", "commentstate": '', "data":"" })
//           })
//           it('should will recieve data comment props', () => {
//             const newState = { data: "efgrt", errors:"" }

//               wrapper.setProps(newState)
//               expect(wrapper.state()).toEqual({ "errors": "", "data": "efgrt", "commentstate": '', "body":""})
//           })
//           it('handles the state changes on the comment Form', () => {
//             const commentField = wrapper.find('CommentForm').dive().find('#comment_form_container')

//             commentField.value = 'Looks good to me';
//             const event = { target: { name: 'comment', value: 'Looks good to me' } };

//             commentField.simulate('change', event);
//             expect(commentField.value).toEqual('Looks good to me');
//           });
 })
})