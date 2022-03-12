import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
} from '../constants/orderConstants';

export const orderCreateReducer = (state = {}, action) => {
  // define reducers with switch
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
  }
};
