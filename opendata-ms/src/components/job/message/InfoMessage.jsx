import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BaseMessage from './BaseMessage';

const PREFIX = ' [Info] -- ';

export default class InfoMessage extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired
  };
  render() {
    return <BaseMessage message={this.props.message}
        prefix={PREFIX}
           />;
  }
}
