import { USER_LOGIN_REQUEST } from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
  } catch (error) {}
};
