import { connect } from 'react-redux';
import RegisteFunction from '../../components/function/RegisteFunction';
import * as RegisteFunctionActions from '../../redux/actions/RegisteFunctionActions';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    submitFunction: functionObj => {
      dispatch(RegisteFunctionActions.submitFunction(functionObj));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisteFunction);
