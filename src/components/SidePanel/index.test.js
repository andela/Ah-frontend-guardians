import React from 'react';
import { shallow } from 'enzyme';
import SidePanel from ".";

const handleTags = jest.fn();

const props = {
    handleTags
}

describe("Side Panel", () => {
    it("should render without crushing", () => {
        let wrapper = shallow(<SidePanel />);
        let component = wrapper.find('#slidingPaneTags')
        expect(component.length).toEqual(1);
    });

    it("should change the state of open to false when a tag is clicked", ()=>{
        let wrapper = shallow(<SidePanel {...props} />);
        const events = { target: { name: "tags" } };
        wrapper.instance().handleClick(events)
        expect(wrapper.instance().state.isOpenLeft).toBeFalsy();
    })
});
