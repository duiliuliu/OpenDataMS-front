import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Select, Switch,
  Radio, Button, Upload, Icon,
  Row, Col, InputNumber} from 'antd';

const { Option } = Select;

/**
 * 采集任务Form组件
 * 其中数据为异步获取
 * @example
 * const cityList = ['佛山', '哈尔滨', '贵州', '深圳'];
 * const urlList = {佛山: ['www.foshan'], 哈尔滨: ['www.haerbi', 'www.haerbi2222'], 深圳: ['www.foshan'], 贵州: ['www.foshan']};
 * const dataList = ['全部', '水利工程数据', '特种兵数据', '**数据'];
 * <NewCollectJob cityList={cityList} urlList={urlList} dataList={dataList} />
 */
class CollectJobForm extends React.Component {

  /**
   * 构建组件参数
   * @param {PropTypes.arrayOf(PropTypes.string)} cityList
   * @param {PropTypes.arrayOf(PropTypes.string)} urlList
   * @param {PropTypes.arrayOf(PropTypes.string)} dataList
   * @param {PropTypes.func} dataList
   * @param {PropTypes.func} dataList
   */
  static propTypes = {
    cityList: PropTypes.arrayOf(PropTypes.string),
    urlList: PropTypes.arrayOf(PropTypes.string),
    dataList: PropTypes.arrayOf(PropTypes.string),
    onSubmit: PropTypes.func,
    getDownloadDir: PropTypes.func
  };
  /**
   * 组件默认值
   * @param {null} cityList
   * @param {null} urlList
   * @param {null} dataList
   * @param {null} onSubmit
   * @param {null} getDownloadDir
   */
  static defaultProps = {
    cityList: null,
    urlList: null,
    dataList: null,
    onSubmit: null,
    getDownloadDir: null
  };

  /**
   * @member city 当前城市
   * @member thread 线程数
   * @member url 当前url
   * @member isSaveNative 是否保存至本地
   */
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      thread: 1,
      url: '',
      isSaveNative: false
    };
  }

  /**
   *获取当前选中城市
   * @memberof CollectJobForm
   */
  handleCityChange = value => {
    this.setState({
      city: value
    });
  };

  /**
   *获取当前选中url
   *
   * @memberof CollectJobForm
   */
  handleUrlChange = value => {
    this.setState({
      url: value
    });
  };

  /**
   *获取当前输入线程数
   *
   * @memberof CollectJobForm
   */
  handleThreadChange = e => {
    this.setState({
      thread: e.target.value
    });
  };

  /**
   *获取falg是否保存原始数据
   *
   * @memberof CollectJobForm
   */
  handleNativeChange = value => {
    this.setState({
      isSaveNative: value
    });
  };

  /**
   *验证并提交form数据
   *
   * @memberof CollectJobForm
   */
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      this.props.onSubmit(values);
    });
  };

  /**
   *获取下载数据路径
   *
   * @memberof CollectJobForm
   */
  normFile = e => {
    this.props.getDownloadDir(e);
  };

  /**
   * @ignore
   */
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 8 }
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout}
            label="任务名称"
        >
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item {...formItemLayout}
            hasFeedback
            label="URL"
        >
          {getFieldDecorator('select-group', {
            rules: [{ required: true, message: 'Please select your city!' }]
          })(
            <Row>
              <Col span={12}>
                <Select
                    onChange={this.handleCityChange}
                    placeholder="Please select a city"
                >
                  {this.props.cityList.map(city => {
                    return (
                      <Option key={city}
                          value={city}
                      >
                        {city}
                      </Option>
                    );
                  })}
                </Select>
              </Col>
              <Col span={12}>
                <Select
                    onChange={this.handleUrlChange}
                    placeholder="Please select a URL"
                >
                  {this.props.urlList[this.state.city].map(url => {
                    return (
                      <Option key={url}
                          value={url}
                      >
                        {url}
                      </Option>
                    );
                  })}
                </Select>
              </Col>
            </Row>
          )}

          {getFieldDecorator('radio-group')(
            <Row>
              <Col span={10}>
                <Radio.Group onChange={this.handleThreadChange}>
                  <Radio value={1}>单线程</Radio>
                  <Radio value={2}>多线程</Radio>
                </Radio.Group>
              </Col>
              {this.state.thread > 1 ? (
                <Col span={8}>
                  <span>线程数: </span>
                  {getFieldDecorator('input-number', { initialValue: 3 })(
                    <InputNumber max={10}
                        min={1}
                    />
                  )}
                </Col>
              ) : null}
            </Row>
          )}
        </Form.Item>

        <Form.Item {...formItemLayout}
            label="数据类目"
        >
          {getFieldDecorator('Select-multiple', {
            rules: [
              {
                required: true,
                message: 'Please select your target data!',
                type: 'array'
              }
            ]
          })(
            <div>
              <Select mode="multiple"
                  placeholder="Please select target data"
              >
                {this.props.dataList.map(item => {
                  return (
                    <Option key={item}
                        value={item}
                    >
                      {item}
                    </Option>
                  );
                })}
              </Select>
              {getFieldDecorator('switch', { valuePropName: 'checked' })(
                <Switch onChange={this.handleNativeChange} />
              )}
              <span style={{ marginRight: '40px', marginLeft: '10px' }}>
                {' '}
                保存至本地{' '}
              </span>
              {this.state.isSaveNative
                ? getFieldDecorator('upload', {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile
                  })(
                    <Upload
                        action="/download.do"
                        listType="picture"
                        name="logo"
                    >
                      <Button>
                        <Icon type="download" /> save
                      </Button>
                    </Upload>
                  )
                : null}
            </div>
          )}
        </Form.Item>
        <Form.Item wrapperCol={{ span: 7, offset: 8 }}>
          <Button htmlType="submit"
              style={{ margin: 10 }}
              type="primary"
          >
            Submit
          </Button>
          <Button htmlType="reset"
              style={{ margin: 10 }}
              type="danger"
          >
            取消
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const NewCollectJob = Form.create({ name: 'JobForm' })(CollectJobForm);
export default NewCollectJob;
