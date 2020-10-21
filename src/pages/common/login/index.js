import React from 'react';
import { Row, Col, Form, Input, Button, Tabs } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { encryptFunc, decryptFunc } from 'utils/utils';
import styles from './index.less';

const { TabPane } = Tabs;

const onFinish = values => {
  console.log('Success:', values);
};

const onForgetPassword = values => {
  console.log('onForgetPassword:', values);
};

const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.content}>
        <div className={styles.contentLeft}>王清管理系统</div>
        <div className={styles.contentRight}>
          <Tabs defaultActiveKey="login" className={styles.contentRightTab}>
            <TabPane tab="登录" key="login">
              <Form name="normal_login" onFinish={onFinish}>
                <div className={styles.title}>用户登录</div>
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: '请输入您的用户名!' }]}
                >
                  <Input prefix={<UserOutlined />} placeholder="用户名" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: '请输入您的密码!' }]}
                >
                  <Input
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="密码"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={styles.submit}
                  >
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="忘记密码" key="forgetPassword">
              <Form name="forget_password" onFinish={onForgetPassword}>
                <div className={styles.title}>忘记密码</div>

                <Form.Item>
                  <div className={styles.codeFormItem}>
                    <Form.Item
                      name="verificationCode"
                      rules={[{ required: true, message: '请输入您的验证码' }]}
                    >
                      <Input
                        prefix={<UserOutlined />}
                        placeholder="验证码"
                        style={{ width: '200px', marginRight: '10px' }}
                      />
                    </Form.Item>

                    <Form.Item>
                      <Button>发送验证码</Button>
                    </Form.Item>
                  </div>
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: '请输入您的密码!' }]}
                >
                  <Input
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="输入密码"
                  />
                </Form.Item>
                <Form.Item
                  name="rePassword"
                  rules={[{ required: true, message: '请再次输入您的密码!' }]}
                >
                  <Input
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="请再次输入您的密码"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={styles.submit}
                  >
                    确认修改
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Login;
