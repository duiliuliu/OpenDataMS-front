import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class MessageWindow extends Component{
  static propTypes = {
    message: PropTypes.string.isRequired,
    className:PropTypes.string
  };
  static defaultProps = {
    className: ''
  };
  render(){
    return(
      <span className={this.props.className}>
        {this.props.message}
        <br />
      </span>
    );
  }
}