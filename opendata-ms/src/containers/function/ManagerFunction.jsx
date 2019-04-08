import { connect } from 'react-redux';
import ManagerFunction from '../../components/function/ManagerFunction';
import * as ManagerFunctionActions from '../../redux/actions/ManagerFunctionActions';

const mapStateToProps = state => {
  const data = state.ManagerFunctionReducers;
  return {
    loadStatus: data.loadStatus,
    functionData: data.functionData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestFunctionData: () =>
      dispatch(ManagerFunctionActions.requestFunctionData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerFunction);
