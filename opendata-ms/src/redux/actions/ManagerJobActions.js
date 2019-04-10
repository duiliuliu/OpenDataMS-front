import * as ActionConstants from '../../constants/ActionConstants';

export const requestJobList = (param) => {
    return {
        type: ActionConstants.REQUEST_JOB_LIST,
        payload: {
            param
        }
    };
};

export const loadJobList = () => {
    return {
        type: ActionConstants.LOAD_JOB_LIST
    };
};

export const fetchJobList = (data) => {
    return {
        type: ActionConstants.FETCH_JOB_LIST,
        payload: {
            jobList:data.jobList,
            countList:data.countList
        }
    };
};