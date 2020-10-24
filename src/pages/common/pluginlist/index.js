import React from 'react';
import styles from './index.less';

import { Select, Input, Table, Space } from 'antd';

const { Search } = Input;
const { Option } = Select;

const Pluginlist = () => {
  const onSearch = () => {};

  const columns = [
    {
      title: '插件名称',
      dataIndex: 'pluginName',
      key: 'pluginName',
      render: text => <a>{text}</a>,
    },
    {
      title: '提交作者',
      dataIndex: 'submissionAuthor',
      key: 'submissionAuthor',
    },
    {
      title: '漏洞等级',
      dataIndex: 'vulnerabilityLevel',
      key: 'vulnerabilityLevel',
    },
    {
      title: '漏洞类型',
      dataIndex: 'vulnerabilityType',
      key: 'vulnerabilityType',
    },
    {
      title: '漏洞状态',
      dataIndex: 'vulnerabilityStatus',
      key: 'vulnerabilityStatus',
    },
    {
      title: '服务组件',
      dataIndex: 'serviceComponents',
      key: 'serviceComponents',
    },
    {
      title: '奖励积分',
      dataIndex: 'bonusPoints',
      key: 'bonusPoints',
    },
    {
      title: '提交时间',
      dataIndex: 'submitTime',
      key: 'submitTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>查看详情</a>
        </Space>
      ),
    },
  ];

  const dataSource = [
    {
      pluginName: '泛微云下载',
      submissionAuthor: '王清',
      vulnerabilityLevel: 'B',
      vulnerabilityType: 'SQL注入',
      vulnerabilityStatus: '通过',
      serviceComponents: 'FastJson',
      bonusPoints: '10',
      submitTime: '2020-10-20 06:30',
    },
  ];
  return (
    <div>
      <div className={styles.pluginlistSearch}>
        <div className={styles.pluginlistSearchTop}>
          <div className={styles.pluginlistSearchTopTitle}>全部插件</div>
          <div className={styles.pluginlistSearchTopStatus}>
            插件状态：
            <Select defaultValue="all" style={{ width: 120 }} bordered={false}>
              <Option value="all">全部</Option>
            </Select>
          </div>
          <div className={styles.pluginlistSearchTop}>
            漏洞等级：
            <Select defaultValue="all" style={{ width: 120 }} bordered={false}>
              <Option value="all">全部</Option>
            </Select>
          </div>
        </div>
        <Search
          placeholder="插件名称、服务组件、漏洞类型 "
          onSearch={onSearch}
          enterButton
          className={styles.search}
        />
        <Table
          columns={columns}
          dataSource={dataSource}
          className={styles.table}
        />
      </div>
    </div>
  );
};

export default Pluginlist;
