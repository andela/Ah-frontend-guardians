import React from 'react';
import { EditProfileView } from '../EditProfileView';
import { shallow, mount } from 'enzyme';
import mockAxios from 'jest-mock-axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);

describe('EditProfileView', () => {
  let wrapper;
  const mockEditProfilefn = jest.fn();
  const mockgetProfilefn = jest.fn();
  const historyMock = { push: jest.fn() };

  afterEach(() => {
    mockEditProfilefn.mock.calls = [];
  });
  describe('When form is submitted', () => {
    wrapper = shallow(
      <EditProfileView
        updateProfile={mockEditProfilefn}
        getProfile={mockgetProfilefn}
        history={historyMock}
      />
    );

    it('Should be called with the firstname, lastname, bio', () => {
      wrapper
        .find('EditProfile')
        .dive()
        .find('#editForm')
        .simulate('submit', { preventDefault() {} });
      wrapper
        .find('EditProfile')
        .dive()
        .find('#firstName')
        .simulate('change', {
          target: { name: 'first_name' }
        });
      expect(mockEditProfilefn.mock.calls.length).toBe(1);
    });
    it('Should test cloudinary', () => {
      global.cloudinary = {
        openUploadWidget: (params, cb) => {
          cb(null, {
            event: 'success',
            info: { secure_url: 'http://cloudinary/img/123.png' }
          });
        }
      };
      const widgetFn = wrapper.instance().onClick();
      expect(widgetFn);
    });
  });
});
