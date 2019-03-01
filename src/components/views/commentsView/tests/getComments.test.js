import React from 'react';
import { shallow } from 'enzyme';
import {GetComments, mapStateToProps} from "../CommentGetView";

const props={
  getcommentAction:jest.fn(),
  slug:"test"
}

const e ={
  preventDefault:()=>{}
}

  describe(`CommentView`, () => {
    let wrapper;
    beforeEach(() => {
    wrapper = wrapper=shallow(<GetComments/>)
    // console.log(wrapper.instance())
    })
})