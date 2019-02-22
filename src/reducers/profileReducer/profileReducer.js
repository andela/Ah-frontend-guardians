import { VIEW_PROFILE, UPDATE_PROFILE } from '../../actions/profiles/types';

const initialState = {
  profile: {}
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_PROFILE:
      return {
        ...state,
        profile: action.payload,
        success: true
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
        sucess: true
      };

    default:
      return state;
  }
};

export default profileReducer;
