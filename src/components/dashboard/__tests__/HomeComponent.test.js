import React from 'react';
import {shallow} from 'enzyme';
import {Home}  from '../HomeComponent';
import { Article } from '../ArticleComponent';
import {mapStateToProps} from '../HomeComponent';

const getDataThunkTag = jest.fn();
const getDataThunk = jest.fn();
const handleTags = jest.fn();

const props={
    articleReducer:{
        articles:[{}]
    },
    getDataThunkTag,
    getDataThunk,
    handleTags
}
describe('Test home Component', ()=>{
    it('should render home component correctly', ()=>{
        let wrapper = shallow(<Home {...props}/>);
        wrapper.instance().handleTags('all');
        wrapper.instance().handleTags();
        expect(wrapper).toMatchSnapshot();

    });

    it('should return a state', ()=>{
        let wrapper = shallow(<Home {...props}/>);
        mapStateToProps({})
        expect(mapStateToProps({})).toEqual({})

    });

    it('should should return error on failure', ()=>{
        let wrapper = shallow(<Home {...props}/>);
        wrapper.setProps({
            error:{}
        })
        expect(wrapper.instance().props.error).toEqual({})   

    });
});
