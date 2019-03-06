import React from "react";
import { ReadingStats, mapStateToProps } from './ReadingStats';
import { shallow } from "enzyme";

const getReadingStats = jest.fn();

const props = {
    getReadingStats,
    readingStats: {
        total_read_time: 3,
        no_of_articles: 5,
        recent_articles: [{author: "author", slug: "slug", read_time: 3, title: "title"}]
    }
}

describe("Reading Stats", () => {
    it("should render the Reading Stats without crushing", () => {
        let wrapper = shallow(<ReadingStats {...props} />);
        let component = wrapper.find('#readingStatsParent');
        expect(component.length).toEqual(1)
    });

    it("should map state to props successfully", () => {
        const mockedState = {
            readingStatsReducer: { readingStats: "mine" }
        };

        const state = mapStateToProps(mockedState);
        expect(state.readingStats).toEqual("mine");
    });
});
