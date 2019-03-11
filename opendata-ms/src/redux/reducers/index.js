import * as ActionConstants from '../../contants/ActionConstants';

const initialState = {
  message: '',
  success: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionConstants.SUCCESS:
      {
        return {
          ...state,
          success: true,
          message: action.payload.message
        };
      }

    case ActionConstants.ERROR:
      {
        return {
          ...state,
          success: false,
          message: action.payload.message
        };
      }

    case ActionConstants.CLEAR_MESSAGE:
      {
        return {
          ...state,
          success: false,
          message: ''
        };
      }

    default:
      return state;
  }
}