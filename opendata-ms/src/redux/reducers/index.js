import * as ActionContants from '../../contants/ActionContants';

const initialState = {
  message: '',
  errorMessage: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionContants.SUCCESS:
      {
        return {
          ...state,
          message: action.payload.message
        };
      }

    case ActionContants.ERROR:
      {
        return {
          ...state,
          ...action.payload,
          errorMessage: action.payload.errorMessage
        };
      }

    default:
      return state;
  }
}