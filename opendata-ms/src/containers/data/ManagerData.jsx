import { connect } from 'react-redux';
import ManagerData from '../../components/data/ManagerData';
import * as ManagerDataAction from '../../redux/actions/ManagerDataAction';

const mapStateToProps = state => {
  console.log(state);
  const data = state.ManagerDataReducers;
  return {
    loadStatus: data.loadStatus,
    treeData: data.treeData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestTreeData: () => dispatch(ManagerDataAction.requestTreeData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerData);
