import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusTab from '../StatusTab';
import { Button, Empty, Pagination, Divider } from 'antd';


const tabs = ['Status', 'Name', 'Creator', 'Created'];

export default class JobList extends Component {
  static propTypes = {
    jobList: PropTypes.arrayOf(PropTypes.object)
  };
  static defaultProps = {
    jobList: null
  };
  constructor(props) {
    super(props);
    this.state = {
      offset: document.body.offsetWidth / 4 - 200
    };
    this.onWindowResize = this.onWindowResize.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }
  onWindowResize() {
    this.setState({ offset: document.body.offsetWidth / 4 - 200 });
  }

  render() {
    return (
      <div className="joblist">
        <div className="jobtab">
          {tabs.map(tab => (
            <span key={tab}
                style={{ marginRight: this.state.offset+30 }}
            >
              {tab}
            </span>
          ))}
        </div>
        {this.props.jobList ? (
          this.props.jobList.map((job, index) => (
            <StatusTab
                action={
                <div>
                  <Button type="default">Retry</Button>
                  <Button type="danger">delete</Button>
                </div>
              }
                job={job}
                key={job.name + index}
                offset={this.state.offset}
            />
          ))
        ) : (
          <Empty />
        )}
        {
          this.props.jobList &&
            <div>
              <Divider className="divider" />
              <Pagination defaultCurrent={1}
                  pageSize={10}
                  total={50}
              />
            </div>
        }
      </div>
    );
  }
}
