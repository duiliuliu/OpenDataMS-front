import React from 'react';
import { Table } from 'antd';

export default class History extends React.Component {
  render() {
    const columns = [
      {
        title: 'Level',
        dataIndex: 'level',
        filters: [
          {
            text: 'Info',
            value: 'info'
          },
          {
            text: 'Warn',
            value: 'warn'
          },
          {
            text: 'Debug',
            value: 'debug'
          }
        ],
        onFilter: (value, record) => record.level.indexOf(value) === 0
      },
      {
        title: 'time',
        dataIndex: 'time',
        defaultSortOrder: 'descend',
        sorter: (a, b) =>
          new Date(a.time.replace(/-/g, '/')) >
          new Date(b.time.replace(/-/g, '/'))
      },
      {
        title: 'msg',
        dataIndex: 'msg'
      }
    ];
    return (
      <Table
          columns={columns}
          dataSource={this.props.data}
          loading={this.props.loading}
          onChange={this.props.onChange}
          pagination={this.props.pagination}
      />
    );
  }
}
