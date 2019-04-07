import { connect } from 'react-redux';
import ManagerJob from '../../components/job/managerJob/ManagerJob';
import * as ManagerJobActions from '../../redux/actions/ManagerJobActions';

const mapStateToProps = state => {
  const data = state.ManagerJobReducers;
  return {
    loadStatus: data.loadStatus,
    jobList: data.jobList,
    countList: data.countList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestJobList: param => dispatch(ManagerJobActions.requestJobList(param))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerJob);
