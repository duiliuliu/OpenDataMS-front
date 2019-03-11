import { connect } from 'react-redux';
import NewCleanJob from '../../components/job/newJob/NewCleanJob';
import * as NewCleanJobAction from '../../redux/actions/NewCleanJobAction';

const mapStateToProps = state => {
  const data = state.NewCleanReducers;
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
    requestCityList: () => dispatch(NewCleanJobAction.requestCleanCityList()),
    requestDataList: city => dispatch(NewCleanJobAction.requestCleanDataList(city)),
    requestFunctionList: () => dispatch(NewCleanJobAction.requestFunctionList()),
    requestDataColList: city => dispatch(NewCleanJobAction.requestDataColList(city)),
    submitJob: job => dispatch(NewCleanJobAction.submitCleanJob(job))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewCleanJob);