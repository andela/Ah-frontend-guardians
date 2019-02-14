import React from 'react';
import { shallow } from 'enzyme';
import Form from '../login';

const mockedProps = {
    errors:{
        errors: {
            error: 'error'
        }
    }
}
describe(`Login`, () => {
    let wrapper;
    const mockLoginfn = jest.fn()

    describe('Login', () => {
        beforeEach(() => {
            wrapper = shallow(<Form {...mockedProps} />)
        })

        it("Login form should render", () => {
            expect(wrapper).toMatchSnapshot();
          });

        it('should render a form', () => {
            expect(wrapper.find('form').length).toEqual(1);
        })
        it('should render an input', () => {
            expect(wrapper.find('input').length).toEqual(2);
        })
        it('should render a paragraph', () => {
            expect(wrapper.find('p').length).toEqual(3);
        })
    })
    });

