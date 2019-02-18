import React from 'react';
import { shallow } from 'enzyme';
import SignUpForm from './SignUpForm'

describe('SignUpForm', () => {
    let wrapper;
    const props = {
        username: "",
        password: "",
        email: "",
        error: {
            username: "",
            password: "",
            email: "",
        },
        message: "",
    }

    const error = {
        errors: {
            username: "Wrong username",
            password: "Wrong password",
            email: "Wrong email",
        },
    }

    beforeEach(() => wrapper = shallow(<SignUpForm {...props} errors={error} />));

    it('should render a form', () => {
        expect(wrapper.find('form').length).toEqual(1);
        expect(wrapper.find('[name="email"]').props().error).toBe("Wrong email");
    })
});
