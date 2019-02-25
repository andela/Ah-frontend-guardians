import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Input type={''} name={''} placeholder={''} className={''} error={''} />))
    it('should render an input', () => {
        expect(wrapper.find('input').length).toEqual(1);
    });
    it('should render correctly', () => expect(wrapper).toMatchSnapshot());
});
