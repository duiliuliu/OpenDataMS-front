import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import NewCollectJob from '../../components/job/newJob/NewCollectJob';
import * as JobActions from '../../redux/actions/JobActions';

const mapStateToProps = state => {
  const data = state.JobReducer;
  return {
    cityList: data.cityList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // getCityList: bindActionCreators(JobActions.getCityList, dispatch),
    getCityList: ()=>dispatch(JobActions.getCityList()),
    getDataList: () => dispatch(JobActions.getDataList),
    getDownloadPath: () => dispatch(JobActions.getDownloadPath),
    submitJob: () => dispatch(JobActions.submitJob)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCollectJob);
