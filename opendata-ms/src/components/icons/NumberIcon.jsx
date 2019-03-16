import React from 'react';
import PropTypes from 'prop-types';

export default class NumberIcon extends React.Component {
  static propTypes = {
    number: PropTypes.number
  };

  static defaultProps = {
    number: 0
  };

  render() {
    return <div className="number-icon">{this.props.number}</div>;
  }
}
