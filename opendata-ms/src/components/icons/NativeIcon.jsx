import React from 'react';
import PropTypes from 'prop-types';
import IconTypesMap from '../../contants/ImageConstants';

/**
 * NativeIcon
 * 本地图标组件
 * @example
 * <NativeIcon type="new" />
 * <NativeIcon width=20 height=20 type="new" alt="new"/>
 */
export default class NativeIcon extends React.Component {

  /**
   * 构建图标组件参数: </br>
   * width- 宽度、 </br>
   * height- 高度、 </br>
   * className- css Class、 </br>
   * type- 图标样式，此处为图标引入文件的名称、 </br>
   * alt- 填充字体 </br>
   * @param {PropTypes.number} width
   * @param {PropTypes.number} height
   * @param {PropTypes.string} className
   * @param {PropTypes.string.isRequired} type
   * @param {PropTypes.string} alt
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

  /**
 * @ignore
 */
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
