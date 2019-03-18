import React from 'react';
import PropTypes from 'prop-types';

/**
 * NumberIcon
 * 数字图标组件
 * @example
 * <NumberIcon number=10 />
 */
export default class NumberIcon extends React.Component {
  /**
   * 构建组件参数: </br>
   * number: 图标展示数字
   * @param {PropTypes.number} number
   */
  static propTypes = {
    number: PropTypes.number
  };

  /**
   * 组件默认值: </br>
   * number: 图标展示数字
   * @param {0} number
   */
  static defaultProps = {
    number: 0
  };

   /**
   * @ignore
   */
  render() {
    return <div className="number-icon">{this.props.number}</div>;
  }
}
