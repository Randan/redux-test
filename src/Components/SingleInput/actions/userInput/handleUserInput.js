import { USER_TYPES } from '../actionTypes';

export default (e) => (dispatch) => {
  let value = e.target.value;

  dispatch({
    type: USER_TYPES,
    payload: value
  });
};