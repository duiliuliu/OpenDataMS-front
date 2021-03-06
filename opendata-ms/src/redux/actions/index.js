import * as ActionConstants from '../../constants/ActionConstants';

export const success = message => {
  return {
    type: ActionConstants.SUCCESS,
    payload: {
      message
    }
  };
};

export const error = message => {
  return {
    type: ActionConstants.ERROR,
    payload: {
      message
    }
  };
};

export const clearMessage = () => {
  return {
    type: ActionConstants.CLEAR_MESSAGE
  };
};

export const jumpRouter = path => {
  return {
    type: ActionConstants.JUMP_ROUTER,
    payload: {
      path
    }
  };
};
