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
})