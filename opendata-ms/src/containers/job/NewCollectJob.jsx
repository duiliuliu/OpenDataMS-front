import { connect } from 'react-redux';
import NewCollectJob from '../../components/job/newJob/NewCollectJob';
import * as NewCollectJobActions from '../../redux/actions/NewCollectJobActions';

const mapStateToProps = state => {
  const data = state.NewCollectJobReducer;
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
    requestCityList: () => dispatch(NewCollectJobActions.requestCollectCityList()),
    requestDataList: city => dispatch(NewCollectJobActions.requestCollectDataList(city)),
    requestDownloadPath: () => dispatch(NewCollectJobActions.download()),
    submitJob: job => dispatch(NewCollectJobActions.submitCollectJob(job))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCollectJob);