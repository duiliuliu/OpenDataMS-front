import { connect } from 'react-redux';
import Job from '../../components/job/jobPage/Job';
import { requestJob } from '../../redux/actions/JobActions';

const mapStateToProps = state => {
  const data = state.JobReducers;
  return {
    job: data.job,
    loadStatus: data.loadStatus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestJob: jobName => {
      dispatch(requestJob(jobName));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Job);
