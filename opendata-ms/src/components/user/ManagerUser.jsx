import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { Modal, Button, Divider, Table } from 'antd';
import * as routerConstants from '../../constants/routerConstants';

class ManagerUser extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        role: PropTypes.string,
        created: PropTypes.string,
        info: PropTypes.string
      })
    ),
    requestUserData: PropTypes.func.isRequired
  };

  static defaultProps = {
    data: []
  };

  state = {
    modalVisible: false,
    user: {}
  };

  componentDidMount() {
    this.props.requestUserData();
  }

  handleClick = path => {
    this.props.history.push(path);
  };

  /**
   * 显示模态框函数
   */
  showModal = text => {
    this.setState({
      modalVisible: true,
      user: text
    });
  };

  render() {
    const columns = [
      {
        title: '用户名称',
        dataIndex: 'name',
        render: user => (
          <a
              onClick={this.handleClick.bind(
              this,
              routerConstants.USER + '/' + user
            )}
          >
            {user}
          </a>
        )
      },
      {
        title: '用户角色',
        dataIndex: 'role',
        filters: [
          {
            text: '管理员',
            value: 'admin'
          },
          {
            text: '普通用户',
            value: 'user'
          }
        ],
        onFilter: (value, record) => record.role.indexOf(value) === 0
      },
      {
        title: '创建时间',
        dataIndex: 'created',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.created > b.created ? 1 : -1
      },
      {
        title: () => (
          <div>
            <span>操作</span>
            <Divider type="vertical" />
            <Divider type="vertical" />
            <Divider type="vertical" />
            <Button size="small"
                type="default"
            >
              添加用户
            </Button>
          </div>
        ),
        dataIndex: 'info',
        render: text => (
          <span>
            <Button
                ghost
                onClick={this.showModal.bind(this, text)}
                size="small"
                type="primary"
            >
              修改权限
            </Button>
            {/* <Divider type="vertical" />
            <Button ghost
                size="small"
                type="danger"
            >
              删除
            </Button> */}
          </span>
        )
      }
    ];
    return (
      <div>
        <Table
            columns={columns}
            dataSource={this.props.userData}
            loading={this.props.loading}
            pagination={{ pageSize: 10 }}
        />
        <br />
        <Modal
            maskClosable
            onCancel={() => {
            this.setState({
              modalVisible: false
            });
          }}
            onOk={() => {}}
            title={'用户角色权限设置'}
            visible={this.state.modalVisible}
        >
          <span>角色权限设置</span>
          {/* 表格  表头： 时间 更新用户   */}
          {/* {this.props.functionData} */}
        </Modal>
      </div>
    );
  }
}

export default withRouter(ManagerUser);
