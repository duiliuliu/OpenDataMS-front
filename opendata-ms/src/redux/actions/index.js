import * as ActionContants from '../../contants/ActionContants';

export const success = (message) => {
  return {
    type: ActionContants.SUCCESS,
    payload: {
      message
    }
  };
};

export const error = (message) => {
  return {
    type: ActionContants.ERROR,
    payload: {
      message
    }
  };
};