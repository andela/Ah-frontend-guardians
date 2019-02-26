import { shallow } from "enzyme";
import React from "react";
import { DeleteButton } from "./DeleteButton";
import { mapStateToProps } from './DeleteButton';

describe("Delete Button", () => {
  it('should call the handle submit', () => {
    const mockSubmit = jest.fn();
    const wrapper = shallow(
         <DeleteButton deleteArticle={mockSubmit} />
    );

    wrapper.find('#deleteButtonForm').simulate('submit', { preventDefault() {} });
  });

  it('mapStateToProps should return the right props', () => {
       const mockedState = {
           articleReducer: { delete_article: { "slug": "slug" } }
       }
       const state = mapStateToProps(mockedState);

       expect(state.delete_articles).toEqual({ "slug": "slug" });
   });
});
