import * as ActionConstants from '../../contants/ActionConstants';

export const submitFunction = functionObj => {
  return {
    type: ActionConstants.SUBMIT_FUNCTION,
    payload: {
      functionObj
    }
  };
};
