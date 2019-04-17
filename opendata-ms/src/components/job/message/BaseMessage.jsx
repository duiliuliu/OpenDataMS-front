import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BaseMessage extends Component {
  static propTypes = {
    message: PropTypes.string.isRequired,
    className: PropTypes.string,
    color: PropTypes.string,
    prefix: PropTypes.string
  };
  static defaultProps = {
    className: '',
    color: '#e1ffe8',
    prefix: ''
  };
  render() {
    return (
      <span
          className={this.props.className}
          style={{ color: this.props.color }}
      >
        {this.props.prefix + this.props.message}
        <br />
      </span>
    );
  }
}
