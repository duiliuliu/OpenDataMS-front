import NewCollectJob from '../../components/job/newJob/NewCollectJob';
import { connect } from 'react-redux';
import * as JobActions from '../../redux/actions/JobActions';

const mapStateToProps = state => {
  return {
    ...state.JobReduce
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCityList: () => dispatch(JobActions.getCityList),
    getUrlList: () => dispatch(JobActions.getUrlList),
    getDataList: () => dispatch(JobActions.getDataList),
    getDownloadPath: () => dispatch(JobActions.getDownloadPath),
    submitJob: () => dispatch(JobActions.submitJob)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCollectJob);
