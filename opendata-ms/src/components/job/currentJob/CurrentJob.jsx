import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusTab from './StatusTab';
import MessageWindow from './MessageWindow';

export default class CurrentJob extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number
  };

  render() {
    return (
      <div>
        <StatusTab />
        <MessageWindow />
      </div>
    );
  }
}
