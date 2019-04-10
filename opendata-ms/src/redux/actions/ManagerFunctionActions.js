import * as ActionConstants from '../../constants/ActionConstants';

export const requestFunctionData = () => {
  return {
    type: ActionConstants.REQUEST_FUNCTION_DATA
  };
};

export const loadFunctionData = () => {
  return {
    type: ActionConstants.LOAD_FUNCTION_DATA
  };
};

export const fetchFunctionData = functionData => {
  return {
    type: ActionConstants.FETCH_FUNCTION_DATA,
    payload: {
      functionData
    }
  };
};
