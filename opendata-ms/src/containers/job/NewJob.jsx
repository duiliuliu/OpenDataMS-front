import JobTab from '../../components/job/newJob/JobTab';
import React,{ Component } from 'react';
import NewCleanJob from './NewCleanJob';
import NewCollectJob from './NewCollectJob';

export default class NewJob extends Component{
  render(){
    return(
      <JobTab pane_1={<NewCollectJob />}
          pane_2={<NewCleanJob />}
      />
    );
  }
}