import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BaseMessage from './BaseMessage';

const PREFIX = ' [Success] -- ';
export default class SuccessMessage extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired
  };
  render() {
    return (
      <BaseMessage
          className={'term-fg-l-green term-bold'}
          color={'#00d600'}
          message={this.props.message}
          prefix={PREFIX}
      />
    );
  }
}
