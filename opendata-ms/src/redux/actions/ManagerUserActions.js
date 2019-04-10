import * as ActionConstants from '../../constants/ActionConstants';

export const requestUserData = () => {
  return {
    type: ActionConstants.REQUEST_USER_DATA
  };
};

export const loadUserData = () => {
  return {
    type: ActionConstants.LOAD_USER_DATA
  };
};

export const fetchUserData = (userData) => {
  return {
    type: ActionConstants.FETCH_USER_DATA,
    payload: {
      userData
    }
  };
};