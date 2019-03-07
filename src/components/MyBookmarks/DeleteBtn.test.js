import React from 'react'
import { shallow } from 'enzyme';
import { DeleteButton } from './DeleteBtn';
import Swal from 'sweetalert';

jest.mock('sweetalert')

describe('DeleteButton', () => {
    let wrapper
    const mockdeleteBookmarkfn = jest.fn()

    beforeEach(() => {
        wrapper = shallow(<DeleteButton deleteBookmark={mockdeleteBookmarkfn} />)
    })

    it('renders without crashing', () => {

        expect(wrapper.find('form').length).toEqual(1);
    });
});
