import { USER_TYPES } from '../../actions/actionTypes';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_TYPES:
      return action.payload;
    default:
      return state;
  }
};