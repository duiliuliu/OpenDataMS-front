import { connect } from 'react-redux';
import ManagerData from '../../components/data/ManagerData';
import * as ManagerDataActions from '../../redux/actions/ManagerDataActions';

const mapStateToProps = state => {
  const data = state.ManagerDataReducers;
  return {
    loadStatus: data.loadStatus,
    treeData: data.treeData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestTreeData: () => dispatch(ManagerDataActions.requestTreeData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerData);
