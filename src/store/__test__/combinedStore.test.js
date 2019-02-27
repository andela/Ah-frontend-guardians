import React from 'react';
import store from '../combineStore';


describe('Combined Store', () => {
    it('should check store init state', () => {
      const wrapper = store;
      expect(wrapper).toMatchSnapshot();
    });
});
  