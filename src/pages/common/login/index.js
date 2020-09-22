import React from 'react';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import styles from './index.less';

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinish = values => {
  console.log('Success:', values);
};

const onFinishFailed = errorInfo => {
  console.log('Failed:', errorInfo);
};

const Login = () => {
  return (
    <Row className={styles.login}>
      <Col span={12}>图片ß</Col>
      <Col className={styles.loginRight}>
        <Row className={styles.loginRightTop}>
          <a>其他产品</a>
          <a>墨道官网</a>
        </Row>
        <div className={styles.loginRightBottom}>
          <div className={styles.loginRightBottomContent}>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="账号"
                name="username"
                rules={[{ required: true, message: '请输入您的账号！' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入您的密码！' }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
                <Button className={styles.forgetPassWord}>忘记密码</Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
