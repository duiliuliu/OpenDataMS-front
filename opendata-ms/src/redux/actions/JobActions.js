import * as ActionContants from '../../constants/ActionConstants';

export const requestJob = jobName => {
  return {
    type: ActionContants.REQUEST_JOB,
    payload: {
      jobName
    }
  };
};

export const loadJob = () => {
  return {
    type: ActionContants.LOAD_JOB
  };
};

export const fetchJob = data => {
  return {
    type: ActionContants.FETCH_JOB,
    payload: { data }
  };
};
