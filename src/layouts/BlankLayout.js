import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styles from './index.less';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const routes = [
  {
    path: '/system/ordinary',
    name: '系统',
    icon: <UserOutlined />,
    routes: [
      {
        path: '/system/ordinary/myTest',
        name: '系统测试',
        icon: <LaptopOutlined />,
      },
    ],
  },
  {
    path: '/system/admin',
    name: '管理',
    icon: <UserOutlined />,
    routes: [
      {
        path: '/system/admin/myTest2',
        name: '系统测试',
        icon: <LaptopOutlined />,
      },
    ],
  },
];

const mapRouter = routes => {
  return routes.map(item => {
    if (item.routes) {
      return (
        <SubMenu key={item.path} icon={item.icon} title={item.name}>
          {mapRouter(item.routes)}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={item.path} icon={item.icon} title={item.name}>
          <Link to={item.path}>{item.name}</Link>
        </Menu.Item>
      );
    }
  });
};
const BlankLayout = props => {
  return (
    <div className={styles.blankLayout}>
      <Layout>
        <Header className={styles.header}></Header>
        <Content>
          <Layout>
            <Sider className={styles.sider}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['/system/ordinary/myTest']}
                defaultOpenKeys={[routes[0].path]}
                style={{ height: '100%' }}
              >
                {mapRouter(routes)}
              </Menu>
            </Sider>
            <Content className={styles.content}>{props.children}</Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
};

export default BlankLayout;
