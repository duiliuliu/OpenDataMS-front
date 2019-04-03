import React from 'react';
import { Input, Form, Button, Upload, Icon, Switch, Col } from 'antd';
import { Validating } from '../../contants/EnumConstants';

export default  class FunctionRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      thread: 1,
      url: '',
      isSaveOrigin: false
    };
  }
 
  render() {
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 8 }
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout}
            label="注册函数名"
        >
          <Input placeholder="输入注册函数名称！" />
        </Form.Item>

        <Form.Item {...formItemLayout}
            hasFeedback
            label="关联资源类名"
            validateStatus={this.props.cityStatus==='loading'? Validating.VALIDATE : this.state.cityStatus}
        >
          <Input placeholder="输入关联资源类名！" />
          <Col span={6}>
            <span>覆盖同名资源</span>
          </Col>
          <Col span={4}>
            <Switch onChange={this.handleOriginChange} />
          </Col>
        </Form.Item>

        <Form.Item {...formItemLayout}
            hasFeedback
            label="上传资源"
            validateStatus={this.props.cityStatus==='loading'? Validating.VALIDATE : this.state.cityStatus}
        >
          <div className="dropbox">
            <Upload.Dragger action="/upload.do"
                name="files"
            >
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          </div>
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
