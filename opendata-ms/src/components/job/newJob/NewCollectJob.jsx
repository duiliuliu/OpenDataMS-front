import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  Form,
  Select,
  Switch,
  Radio,
  Button,
  Row,
  Col,
  InputNumber,
  message
} from 'antd';
import { Validating } from '../../../constants/EnumConstants';
import * as StringUtil from '../../../util/StringUtil';
import * as ListUtil from '../../../util/ListUtil';

const { Option } = Select;

/**
 * 采集任务Form组件 </br>
 * 其中数据为异步获取
 * @example
 * const cityList = ['佛山', '哈尔滨', '贵州', '深圳'];
 * const dataList = ['全部', '水利工程数据', '特种兵数据', '**数据'];
 * <NewCollectJob cityList={cityList} dataList={dataList} />
 */
export default class NewCollectJob extends React.Component {
  /**
   * 构建组件参数
   * @param {PropTypes.Array} cityList
   * @param {PropTypes.Array} dataList
   * @param {PropTypes.func} onSubmit
   * @param {PropTypes.func} download
   */
  static propTypes = {
    cityList: PropTypes.arrayOf(PropTypes.string),
    dataList: PropTypes.arrayOf(PropTypes.string),
    onSubmit: PropTypes.func,
    download: PropTypes.func
  };
  /**
   * 组件默认值
   * @param {null} cityList
   * @param {null} dataList
   * @param {null} onSubmit
   * @param {null} download
   */
  static defaultProps = {
    cityList: null,
    dataList: null,
    onSubmit: null,
    download: null
  };

  /**
   * @member city 当前城市
   * @member thread 线程数
   * @member datas 数据项
   * @member isSaveNative 是否保存至本地
   * @member cityStatus 城市选择框状态
   * @member datasStatus 数据项选择框状态
   */
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      city: '',
      thread: 1,
      datas: [],
      isSaveNative: false,
      cityStatus: Validating.NON,
      datasStatus: Validating.NON
    };
  }

  componentDidMount() {
    this.props.requestCityList();
  }

  /**
   *获取任务名称
   *
   * @memberof NewCollectJob
   */
  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  /**
   *获取当前选中城市
   *
   * @memberof NewCollectJob
   */
  handleCityChange = value => {
    if (StringUtil.isBlank(value)) {
      this.setState({
        cityStatus: Validating.NON
      });
      return;
    }
    this.props.requestDataList(value);
    this.setState({
      city: value,
      cityStatus: Validating.SUCCESS
    });
  };

  /**
   *获取当前选中数据项
   *
   * @memberof NewCollectJob
   */
  handleDataChange = value => {
    if (value === null || value.length === 0) {
      this.setState({
        datasStatus: Validating.WARN
      });
      return;
    }
    this.setState({
      datas: value,
      datasStatus: Validating.SUCCESS
    });
  };

  /**
   *获取当前输入线程数
   *
   * @memberof NewCollectJob
   */
  handleThreadChange = e => {
    this.setState({
      thread: e.target.value
    });
  };

  /**
   *获取falg是否保存原始数据
   *
   * @memberof NewCollectJob
   */
  handleNativeChange = value => {
    this.setState({
      isSaveNative: value
    });
  };

  /**
   *获取下载数据路径
   *
   * @memberof NewCollectJob
   */
  saveOrigin = e => {
    this.props.download(e);
  };

  /**
   *判断state是否为空
   *
   * @memberof NewCollectJob
   */
  handleCheckString = key => {
    if (StringUtil.isBlank(this.state[key])) {
      this.setState({
        [key + 'Status']: Validating.ERROR
      });
      return true;
    }
    return false;
  };

  /**
   *判断state是否为空
   *setState方法中的key传递为字符串了
   * @memberof NewCollectJob
   */
  handleCheckList = key => {
    if (ListUtil.isEmpty(this.state[key])) {
      this.setState({
        [key + 'Status']: Validating.ERROR
      });
      return true;
    }
    return false;
  };

  /**
   *验证并提交form数据
   *
   * @memberof NewCollectJob
   */
  handleSubmit = e => {
    e.preventDefault();
    if (this.handleCheckString('city') | this.handleCheckList('datas')) {
      return;
    }
    this.props.submitJob({
      name: this.state.name,
      city: this.state.city,
      thread: this.state.thread,
      datas: this.state.datas,
      isSaveNative: this.state.isSaveNative
    });
  };

  /**
   *重置表單
   *
   * @memberof NewCollectJob
   */
  handleReset = () => {};

  /**
   * @ignore
   */
  render() {
    if (this.props.message) {
      if (this.props.success) {
        message.success(this.props.message);
      } else {
        message.error(this.props.message);
      }
    }
    const formItemLayout = {
      labelCol: { span: 9 },
      wrapperCol: { span: 8 }
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout}
            label="任务名称"
        >
          <Input
              onChange={this.handleNameChange}
              placeholder="input placeholder"
              value={this.state.name}
          />
        </Form.Item>
        <Form.Item
            {...formItemLayout}
            hasFeedback
            label="城市"
            validateStatus={
            this.props.cityStatus
              ? Validating.VALIDATE
              : this.state.cityStatus
          }
        >
          <Select
              hasFeedback
              onChange={this.handleCityChange}
              placeholder="Please select a city"
          >
            {this.props.cityList &&
              this.props.cityList.map(city => {
                return (
                  <Option key={city}
                      value={city}
                  >
                    {city}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>

        <Form.Item
            {...formItemLayout}
            hasFeedback
            label="数据项"
            validateStatus={
            this.props.datasStatus
              ? Validating.VALIDATE
              : this.state.datasStatus
          }
        >
          <Select
              hasFeedback
              mode="multiple"
              onChange={this.handleDataChange}
              placeholder="Please select target data"
          >
            {this.props.dataList &&
              this.props.dataList.map(item => {
                return (
                  <Option key={item}
                      value={item}
                  >
                    {item}
                  </Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item {...formItemLayout}
            label="运行线程"
        >
          <Radio.Group
              onChange={this.handleThreadChange}
              value={this.state.thread}
          >
            <Radio value={1}>单线程</Radio>
            <Radio value={2}>多线程</Radio>
          </Radio.Group>
          {this.state.thread > 1 && (
            <div>
              <span>线程数: </span>
              <InputNumber
                  defaultValue={3}
                  max={10}
                  min={1}
                  onChange={this.handleThreadChange}
              />
            </div>
          )}
        </Form.Item>
        <Form.Item>
          <Row>
            <Col md={7}
                sm={7}
                xl={7}
                xs={0}
            />
            <Col md={8}
                sm={8}
                xl={8}
                xs={8}
            >
              <Switch onChange={this.handleNativeChange} />
              <span style={{ marginRight: '40px', marginLeft: '10px' }}>
                {' '}
                保存至本地{' '}
              </span>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 7, offset: 8 }}>
          <Button htmlType="submit"
              style={{ margin: 10 }}
              type="primary"
          >
            Submit
          </Button>
          <Button
              htmlType="reset"
              onClick={this.handleReset}
              style={{ margin: 10 }}
              type="danger"
          >
            重置
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
