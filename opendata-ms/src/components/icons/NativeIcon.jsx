import React from 'react';
import PropTypes from 'prop-types';
import IconTypesMap from '../../constant/ImagesConstant';

/**
 * NativeIcon
 * 本地图标组件
 */
export default class NativeIcon extends React.Component {

  /**
   * 构建图标组件可以手动传入宽高，也可使用默认值
   * @param {PropTypes.number} width - 宽度
   * @param {PropTypes.number} height - 高度
   * @param {PropTypes.string} className - css Class
   * @param {PropTypes.string.isRequired} type - 图标样式，此处为图标引入文件的名称
   * @param {PropTypes.string} className - 填充字体
   */
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    className: PropTypes.string,
    type: PropTypes.string.isRequired,
    alt: PropTypes.string
  };

    /**
   * 图标组件默认值
   * @param {56} width - 宽度
   * @param {56} height - 高度
   * @param {'icons'} className - 样式类
   * @param {''} alt - 填充文字
   */
  static defaultProps = {
    width: 56,
    height: 56,
    className: 'icons',
    alt: ''
  };

  render() {
    const path = IconTypesMap[this.props.type];
    return (
      <img
          alt={this.props.alt}
          className={this.props.className}
          src={path}
          style={{ width: this.props.width, height: this.props.height }}
          type={this.props.type}
      />
    );
  }
}
