import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Button, Upload, Icon, Switch, Col, message } from 'antd';
import { Validating } from '../../contants/EnumConstants';
import * as StringUtil from '../../util/StringUtil';

export default class FunctionRegister extends React.Component {
  static propTypes = {
    submitFunction: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      functionName: '',
      sourceName: '',
      isCoverSource: false,
      source: '',
      functionNameStatus: Validating.NON,
      sourceNameStatus: Validating.NON,
      sourceStatus: Validating.NON
    };
  }

  handleCoverSource = () => {
    this.setState({
      isCoverSource: !this.state.isCoverSource
    });
  };

  handleUpload = info => {
    const status = info.file.status;
    if (status !== 'uploading') {
      console.log(info);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  handleFunctionInput = e => {
    this.setState({
      functionName: e.target.value
    });
  };

  handleSourceInput = e => {
    this.setState({
      sourceName: e.target.value
    });
  };

  /**
   *判断state是否为空
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

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.handleCheckString('functionName') |
      this.handleCheckString('sourceName') |
      this.handleCheckString('source')
    ) {
      return;
    }
    this.props.submitFunction({
      name: this.state.functionName,
      sourceName: this.state.sourceName,
      source: this.state.source,
      isCoverSource: this.state.isCoverSource
    });
  };
  handleReset = () => {};

  render() {
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 8 }
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item
            {...formItemLayout}
            hasFeedback
            label="注册函数名"
            validateStatus={this.state.functionNameStatus}
        >
          <Input
              onChange={this.handleFunctionInput}
              placeholder="输入注册函数名称！"
              value={this.state.functionName}
          />
        </Form.Item>

        <Form.Item
            {...formItemLayout}
            hasFeedback
            label="关联资源包类名"
            validateStatus={this.state.sourceNameStatus}
        >
          <Input
              onChange={this.handleSourceInput}
              placeholder="输入关联资源包类名！ 如： com.demo.UdfTest"
              value={this.state.sourceName}
          />
          <Col span={6}>
            <span>覆盖同名资源</span>
          </Col>
          <Col span={4}>
            <Switch onChange={this.handleCoverSource} />
          </Col>
        </Form.Item>

        <Form.Item
            {...formItemLayout}
            hasFeedback
            label="上传资源包"
            validateStatus={this.state.sourceStatus}
        >
          <div className="dropbox">
            <Upload.Dragger action="/functionSource"
                name="files"
                onChange={this.handleUpload}
            >
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">
                单击或拖动文件到此区域以上载
              </p>
            </Upload.Dragger>
          </div>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 7, offset: 8 }}>
          <Button
              htmlType="submit"
              onClick={this.handleSubmit}
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
            取消
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
