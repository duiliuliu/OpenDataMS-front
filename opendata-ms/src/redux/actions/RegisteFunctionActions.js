import * as ActionConstants from '../../constants/ActionConstants';

export const submitFunction = functionObj => {
  return {
    type: ActionConstants.SUBMIT_FUNCTION,
    payload: {
      functionObj
    }
  };
};
