import react from 'react';
import errorReducer from '../ErrorReducer';
import { shallow } from 'enzyme';
import {
    ERROR_OCCURRED,
  } from '../../actions/ArticleActionCreator';


describe('Error Reducer', ()=>{
    it('Testing initial state', ()=>{
        expect(errorReducer(undefined, {})).toEqual({});

    });
    it('Testing the error reducer', ()=>{
        expect(
            errorReducer({},{type:ERROR_OCCURRED} )
        ).toEqual({}, {})
    }
    );

})
