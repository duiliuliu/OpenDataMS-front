import { connect } from 'react-redux';
import NewCleanJob from '../../components/job/newJob/NewCleanJob';
import * as JobActions from '../../redux/actions/JobActions';

const mapStateToProps = state => {
  const data = state.JobReducer;
  const succenninfo = state.Reducer;
  return {
    cityStatus: data.CleanCityStatus,
    dataStatus: data.CleanDataStatus,
    cityList: data.CleanCityList,
    dataList: data.CleanDataList,
    functionList:[],
    dataColList:[],
    success: succenninfo.success,
    message: succenninfo.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestCityList: () => dispatch(JobActions.requestCleanCityList()),
    requestDataList: city => dispatch(JobActions.requestCleanDataList(city)),
    requestDownloadPath: () => dispatch(JobActions.download()),
    submitJob: job => dispatch(JobActions.submitCleanJob(job))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCleanJob);