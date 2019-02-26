import React from 'react';
import { EditButton, mapStateToProps } from './EditButton';
import { shallow } from "enzyme";

const props = {
    slug: 'code',
    artocle: {title: "title"}
}

describe("Delete Button", () => {
  const wrapper = shallow( <EditButton {...props}  />);

  it("should render the component ", () => {
    
    expect(wrapper).toMatchSnapshot();
  });

  it('mapStateToProps should return the right props', () => {
    const mockedState = {
        articleReducer:{edit_article: {"slug":"slug"}}
    }
    const state = mapStateToProps(mockedState);
    expect(state.edit_article).toEqual({"slug":"slug"});
  });
});