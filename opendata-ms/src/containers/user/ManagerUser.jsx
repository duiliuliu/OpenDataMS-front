import { connect } from 'react-redux';
import ManagerUser from '../../components/user/ManagerUser';
import * as ManagerUserActions from '../../redux/actions/ManagerUserActions';

const mapStateToProps = state => {
  const data = state.ManagerUserReducers;
  return {
    userData: data.userData,
    loading: data.loadStatus === 'loading' ? true : false
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestUserData: () => dispatch(ManagerUserActions.requestUserData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerUser);
