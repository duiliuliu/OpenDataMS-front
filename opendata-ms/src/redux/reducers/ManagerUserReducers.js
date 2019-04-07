import * as ActionConstants from '../../contants/ActionConstants';

const initialState = {
  userData: [],
  loadStatus: ''
};

const loadStatus = 'loading';
const successStatus = 'success';

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionConstants.FETCH_USER_DATA:
      {
        return {
          ...state,
          userData: action.payload.userData,
          loadStatus: successStatus
        };
      }

    case ActionConstants.LOAD_USER_DATA:
      {
        return {
          ...state,
          loadStatus: loadStatus
        };
      }

    default:
      return state;
  }
}