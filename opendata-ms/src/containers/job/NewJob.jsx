import JobTab from '../../components/job/JobTab';
import React,{ Component } from 'react';
import NewCleanJob from './NewCleanJob';
import NewCollectJob from './NewCollectJob';

export default class NewJob extends Component{
  render(){
    return(
      <JobTab pane_1={<NewCleanJob />}
          pane_2={<NewCollectJob />}
      />
    );
  }
}