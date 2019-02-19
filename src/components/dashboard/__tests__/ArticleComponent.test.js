import React from 'react';
import {shallow} from 'enzyme';
import {Article} from '../ArticleComponent';

const props = {
    article:{title: "",
            author: "",
            description: "",
            created_at: "",
            image_url: "",
            slug: "",
        }
    }
describe('Test Article Component', ()=>{
    it('should render Article component correctly', ()=>{
        let wrapper = shallow(<Article {...props}/>);
        expect(wrapper).toMatchSnapshot();

    });
    it('should render article component correctly', ()=>{
        // let wrapper = shallow(<Article {...props}/>);
        // console.log(wrapper)
        // const findNavLink = wrapper.dive().find('NavLink');
        // expect(findNavLink.length).toEqual(1);
    });


})