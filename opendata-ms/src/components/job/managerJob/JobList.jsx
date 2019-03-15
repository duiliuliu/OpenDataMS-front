import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import StatusTab from '../StatusTab';

export default class JobList extends Component {
  render() {
    return (
      <div className="joblist">
         <StatusTab
             created={'  triggered  一月前    by  '}
             creator={'liuliu'}
             name={'默认初始任务'}
             space={20}
             status={'finished'}
         />
      </div>
    );
  }
}
