import * as ActionContants from '../../contants/ActionContants';

const initialState = {
  message: '',
  success: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionContants.SUCCESS:
      {
        return {
          ...state,
          success: true,
          message: action.payload.message
        };
      }

    case ActionContants.ERROR:
      {
        return {
          ...state,
          success: false,
          message: action.payload.message
        };
      }

    case ActionContants.CLEAR_MESSAGE:
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