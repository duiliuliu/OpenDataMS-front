import React,{ Component } from 'react';
import PropTypes from 'prop-types';

export default class MessageWindow extends Component{
  static propTypes = {
    message: PropTypes.string.isRequired,
    className:PropTypes.string,
    color:PropTypes.string
  };
  static defaultProps = {
    className: '',
    color:'#e1ffe8'
  };
  render(){
    return(
      <span className={this.props.className}
          style={{color:this.props.color}}
      >
        {this.props.message}
        <br />
      </span>
    );
  }
}