import React from 'react';
import { Form, Input, Button, Select, Radio } from 'antd';

import './index.less';

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddPlugin = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="add-plugin">
      <div className="title">
        <span className="name"> 提交POC</span>
        <span className="tips">正确完整的信息会获得更高的奖励</span>
      </div>
      <div className="form-wrapper">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="漏洞名称"
            name="name"
            rules={[{ required: true, message: '请输入漏洞名称!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="来源"
            name="source"
            rules={[{ required: true, message: '请输入漏洞来源!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="影响组建"
            name="source"
            rules={[{ required: true, message: '请选择影响组建!' }]}
          >
            <Select defaultValue="lucy">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="漏洞等级"
            name="level"
            rules={[{ required: true, message: '请选择漏洞等级!' }]}
          >
            <Select defaultValue="lucy">
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="漏洞描述"
            name="desc"
            rules={[{ required: true, message: '请输入漏洞描述!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="0day"
            name="day"
            rules={[{ required: true, message: '请选择0day！' }]}
          >
            <Radio.Group defaultValue={1}>
              <Radio value={1}>是</Radio>
              <Radio value={2}>否</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="漏洞编号"
            name="number"
            rules={[{ required: true, message: '请输入漏洞编号!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="code" name="code">
            <Input.TextArea
              placeholder="Enjoy coding"
              style={{ height: '200px' }}
            />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              提交PoC
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddPlugin;
