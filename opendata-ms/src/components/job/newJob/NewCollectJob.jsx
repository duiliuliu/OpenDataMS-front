import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Select, Switch,
  Radio, Button, Upload, Icon,
  Row,Col, InputNumber} from 'antd';
import { Validating } from '../../../contants/EnumConstants';
import * as StringUtil from '../../../util/StringUtil';

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
   * @param {PropTypes.func} getDownloadDir
   */
  static propTypes = {
    cityList: PropTypes.arrayOf(PropTypes.string),
    dataList: PropTypes.arrayOf(PropTypes.string),
    onSubmit: PropTypes.func,
    getDownloadDir: PropTypes.func
  };
  /**
   * 组件默认值
   * @param {null} cityList
   * @param {null} dataList
   * @param {null} onSubmit
   * @param {null} getDownloadDir
   */
  static defaultProps = {
    cityList: null,
    dataList: null,
    onSubmit: null,
    getDownloadDir: null
  };

  /**
   * @member city 当前城市
   * @member thread 线程数
   * @member datas 数据项
   * @member isSaveNative 是否保存至本地
   * @member cityStatus 城市选择框状态
   * @member dataStatus 数据项选择框状态
   */
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      city: '',
      thread: 1,
      datas:[],
      isSaveNative: false,
      cityStatus:Validating.NON,
      dataStatus:Validating.NON
    };
  }

  componentDidMount(){
    // console.log(';----');
    // this.props.getCityList();
  }

  /**
   *获取任务名称
   *
   * @memberof NewCollectJob
   */
  handleNameChange = e => {
    this.props.getCityList();
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
    if(StringUtil.isBlank(value)){
      return;
    }
    console.log(value);
    this.props.getDataList.bind(value);
    this.setState({
      city: value
    });
  };

  
  /**
   *获取当前选中数据项
   *
   * @memberof NewCollectJob
   */
  handleDataChange = value => {
    console.log(value);
    this.setState({
      city: value
    });
  };

  /**
   *获取当前输入线程数
   *
   * @memberof NewCollectJob
   */
  handleThreadChange = e => {
    console.log(e.target.value);
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
    console.log(value);
    this.setState({
      isSaveNative: value
    });
  };

  /**
   *验证并提交form数据
   *
   * @memberof NewCollectJob
   */
  handleSubmit = e => {
    e.preventDefault();
    if(StringUtil.isBlank(this.state.city)){
      this.setState({
        cityStatus:Validating.ERROR
      });
    }
    if(this.state.datas===null || this.state.datas.length===0){
      this.setState({
        dataStatus:Validating.ERROR
      });
      return;
    }
    this.props.onSubmit({
      job:{
        name:this.state.name,
        city:this.state.city,
        thread:this.state.thread,
        datas:this.state.datas,
        isSaveNative:this.state.isSaveNative
      }
    });
  };

  /**
   *获取下载数据路径
   *
   * @memberof NewCollectJob
   */
  saveOrigin = e => {
    this.props.getDownloadDir(e);
  };

  /**
   * @ignore
   */
  render() {
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 8 }
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout}
            label="任务名称"
        >
          <Input onChange={this.handleNameChange}
              placeholder="input placeholder"
              value={this.state.name}
          />
        </Form.Item>
        <Form.Item {...formItemLayout}
            hasFeedback
            label="城市"
            validateStatus={this.state.cityStatus}
        >
          <Select hasFeedback
              onChange={this.handleCityChange}
              placeholder="Please select a city"
              value={this.state.city}
          >
            {this.props.cityList === null
              ? null
              : (this.props.cityList.map(city => {
                return (
                  <Option key={city}
                      value={city}
                  >
                    {city}
                  </Option>
                );
              }))
            }
          </Select>
        </Form.Item>

        <Form.Item {...formItemLayout}
            hasFeedback
            label="数据类目"
            validateStatus={this.state.dataStatus}
        >
          <Select hasFeedback
              mode="multiple"
              placeholder="Please select target data"
          >
            {this.props.dataList === null
              ? null
              : (this.props.dataList.map(item => {
                  return (
                    <Option key={item}
                        value={item}
                    >
                      {item}
                    </Option>
                  );
                }))
            }
          </Select>
        </Form.Item>
        <Form.Item  {...formItemLayout}
            label="运行线程"
        >
          <Radio.Group onChange={this.handleThreadChange}
              value={this.state.thread}
          >
              <Radio value={1}>单线程</Radio>
              <Radio value={2}>多线程</Radio>
            </Radio.Group>
            {this.state.thread > 1 ? (
              <div>
                <span>线程数: </span>
                <InputNumber defaultValue={3}
                    max={10}
                    min={1}
                    onChange={this.handleThreadChange}
                />
              </div>
            ) : null}
        </Form.Item>
        <Form.Item>
          <Row>
            <Col span={7}></Col>
            <Col span={8}>
              <Switch onChange={this.handleNativeChange} />
              <span style={{ marginRight: '40px', marginLeft: '10px' }}>
                {' '}
                保存至本地{' '}
              </span>
              {this.state.isSaveNative
                ?
                  <Upload
                      action="/download.do"
                      listType="picture"
                      name="logo"
                      onChange={this.saveOrigin}
                  >
                    <Button>
                      <Icon type="download" /> save
                    </Button>
                  </Upload>
                : null}
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
          <Button htmlType="reset"
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