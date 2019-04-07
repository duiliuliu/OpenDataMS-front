import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

export default class History extends React.Component {
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

  componentDidMount() {
    this.props.requestUserData();
  }
  render() {
    const columns = [
      {
        title: '用户名称',
        dataIndex: 'name'
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
        sorter: (a, b) => a > b
          // new Date(a.time.replace(/-/g, '/')) >
          // new Date(b.time.replace(/-/g, '/'))
      },
      {
        title: '详细信息',
        dataIndex: 'info',
        render: text => <a href="javascript:;">{text}</a>
      }
    ];
    return (
      <Table
          columns={columns}
          dataSource={this.props.userData}
          loading={this.props.loading}
          pagination={{ pageSize: 10 }}
      />
    );
  }
}
