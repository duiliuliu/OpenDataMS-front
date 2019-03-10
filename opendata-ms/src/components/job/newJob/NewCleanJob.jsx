
// 数据选择 城市 数据
// 函数选择
// 选择数据列
// 参数校验 
// 提交

import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Select, Button, message} from 'antd';
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
export default class NewCleanJob extends React.Component {

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
    if(StringUtil.isBlank(value)){
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
    if(value===null || value.length===0){
      return;
    }
    this.setState({
      datas: value,
      dataStatus: Validating.SUCCESS
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
    this.props.submitJob({
        name:this.state.name,
        city:this.state.city,
        thread:this.state.thread,
        datas:this.state.datas,
        isSaveNative:this.state.isSaveNative
      }
    );
  };

  /**
   *重置表單
   *
   * @memberof NewCollectJob
   */
  handleReset = () => {

  };

  /**
   * @ignore
   */
  render() {
    if(this.props.message){
      if(this.props.success){
        message.success(this.props.message);
      }else{
        message.error(this.props.message);
      }
    }
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
            validateStatus={this.props.cityStatus==='loading'? Validating.VALIDATE : this.state.cityStatus}
        >
          <Select hasFeedback
              onChange={this.handleCityChange}
              placeholder="Please select a city"
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
            label="数据项"
            validateStatus={this.props.dataStatus==='loading'? Validating.VALIDATE : this.state.dataStatus}
        >
          <Select hasFeedback
              mode="multiple"
              onChange={this.handleDataChange}
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

        <Form.Item {...formItemLayout}
            hasFeedback
            label="函数"
            validateStatus={this.props.functionStatus==='loading'? Validating.VALIDATE : this.state.functionStatus}
        >
          <Select hasFeedback
              onChange={this.handlefunctionChange}
              placeholder="Please select funciton"
          >
            {this.props.functionList === null
              ? null
              : (this.props.functionList.map(item => {
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

        <Form.Item {...formItemLayout}
            hasFeedback
            label="数据列"
            validateStatus={this.props.dataColStatus==='loading'? Validating.VALIDATE : this.state.dataColStatus}
        >
          <Select hasFeedback
              mode="multiple"
              onChange={this.handleDataColChange}
              placeholder="Please select target data"
          >
            {this.props.dataColList === null
              ? null
              : (this.props.dataColList.map(item => {
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