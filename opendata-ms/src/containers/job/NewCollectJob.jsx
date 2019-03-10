import { connect } from 'react-redux';
import NewCollectJob from '../../components/job/newJob/NewCollectJob';
import * as JobActions from '../../redux/actions/JobActions';

const mapStateToProps = state => {
  const data = state.JobReducer;
  const succenninfo = state.Reducer;
  return {
    cityStatus: data.collectCityStatus,
    dataStatus: data.collectDataStatus,
    cityList: data.collectCityList,
    dataList: data.collectDataList,
    success: succenninfo.success,
    message: succenninfo.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestCityList: () => dispatch(JobActions.requestCollectCityList()),
    requestDataList: city => dispatch(JobActions.requestCollectDataList(city)),
    requestDownloadPath: () => dispatch(JobActions.download()),
    submitJob: job => dispatch(JobActions.submitCollectJob(job))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCollectJob);