import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { Table, Divider, Modal, Tag, Button } from 'antd';

const color = 'green';
const Search = Input.Search;

/**
 * 函数管理组件
 */
export default class FunctionManager extends React.Component {
  /**
   * 构成组件参数
   */
  static propTypes = {
    functionData: PropTypes.arrayOf(
      PropTypes.shape({
        functionName: PropTypes.string,
        lastModifier: PropTypes.string,
        lastModified: PropTypes.string,
        resource: PropTypes.string,
        tags: PropTypes.array
      })
    ),
    requestFunctionData: PropTypes.func.isRequired
  };
  static defaultProps = {
    data: []
  };

  /**
   * @member {number} pageSize 每业数据量
   * @member {boolean} modalVisible
   * @member {string} currentFunc 当前选中函数
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 10,
      modalVisible: false,
      currentFunc: ''
    };
  }

  componentDidMount() {
    this.props.requestFunctionData();
  }

  /**
   * 显示模态框函数
   */
  showModal = record => {
    this.setState({
      modalVisible: true
    });
    // 通过record请求相应数据
    this.props.requestFunctionData(record);
  };

  // 表格列绘制
  columns = [
    {
      title: '函数名称',
      dataIndex: 'functionName',
      key: 'functionName',
      render: text => <a href="javascript:;">{text}</a>
    },
    {
      title: '更新者',
      dataIndex: 'lastModifier',
      key: 'lastModifier'
    },
    {
      title: '更新时间',
      dataIndex: 'lastModified',
      key: 'lastModified'
    },
    {
      title: '资源名称',
      key: 'resource',
      dataIndex: 'resource',
      render: text => (
        <a>
          <Tag color={color}>{text}</Tag>
        </a>
      )
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button
              ghost
              onClick={() => this.showModal.bind(this, record)}
              type="primary"
          >
            查看变更历史
          </Button>
          <Divider type="vertical" />
          <Button ghost
              type="danger"
          >
            删除
          </Button>
        </span>
      )
    }
  ];

  /**
   * 渲染组价
   */
  render() {
    return (
      <div className="functionmanager">
        <Search
            onSearch={value => console.log(value)}
            placeholder="输入函数名称搜索"
            style={{ width: 200 }}
        />
        <Table
            columns={this.columns}
            dataSource={this.props.functionData}
            pagination={{ pageSize: this.state.pageSize }}
        />
        <br />
        <Modal
            modalVisible={this.state.modalVisible}
            onCancel={this.handleCancel}
            onOk={this.handleOk}
            title={'Basic Modal'}
        >
          {/* 表格  表头： 时间 更新用户   */}
          {this.props.functionData}
        </Modal>
      </div>
    );
  }
}
