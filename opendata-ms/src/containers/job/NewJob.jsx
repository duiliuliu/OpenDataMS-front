import {
  connect
} from 'react-redux';
import NewCollectJob from '../../components/job/newJob/NewCollectJob';
import * as JobActions from '../../redux/actions/JobActions';

const mapStateToProps = state => {
  console.log('-------', state);
  const data = state.JobReducer;
  return {
    cityStatus: data.cityStatus,
    dataStatus: data.dataStatus,
    cityList: data.cityList,
    dataList: data.dataList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestCityList: () => dispatch(JobActions.requestCityList()),
    requestDataList: (city) => dispatch(JobActions.requestDataList(city)),
    requestDownloadPath: () => dispatch(JobActions.download()),
    submitJob: (job) => dispatch(JobActions.submitJob(job))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCollectJob);