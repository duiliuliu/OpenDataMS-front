import { connect } from 'react-redux';
import NewCleanJob from '../../components/job/newJob/NewCleanJob';
import * as NewCleanJobActions from '../../redux/actions/NewCleanJobActions';

const mapStateToProps = state => {
  const data = state.NewCleanJobReducers;
  const succenninfo = state.Reducer;
  return {
    cityStatus: data.cleanCityStatus,
    dataStatus: data.cleanDataStatus,
    cityList: data.cleanCityList,
    dataList: data.cleanDataList,
    functionList:data.functionList,
    dataColList:data.dataColList,
    success: succenninfo.success,
    message: succenninfo.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestCityList: () => dispatch(NewCleanJobActions.requestCleanCityList()),
    requestDataList: city => dispatch(NewCleanJobActions.requestCleanDataList(city)),
    requestFunctionList: () => dispatch(NewCleanJobActions.requestFunctionList()),
    requestDataColList: city => dispatch(NewCleanJobActions.requestDataColList(city)),
    submitJob: job => dispatch(NewCleanJobActions.submitCleanJob(job))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCleanJob);