import React, { Component } from 'react';
import JobTab from '../../components/job/JobTab';
import NewCollectJob from '../../components/job/newJob/NewCollectJob';
import { connect } from 'react-redux';

class NewJob extends Component{
  render(){
    return (
      <JobTab pane_1={<NewCollectJob />}
          pane_2={<NewCollectJob />} />
    );
  }
}

export default connect()(NewJob);