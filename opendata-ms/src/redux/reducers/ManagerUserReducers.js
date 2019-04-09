import * as ActionConstants from '../../contants/ActionConstants';

const initialState = {
  userData: [],
  loadStatus: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionConstants.FETCH_USER_DATA:
      {
        return {
          ...state,
          userData: action.payload.userData,
          loadStatus: false
        };
      }

    case ActionConstants.LOAD_USER_DATA:
      {
        return {
          ...state,
          loadStatus: true
        };
      }

    default:
      return state;
  }
}