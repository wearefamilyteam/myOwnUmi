import React from 'react';
import { Input, Button, DatePicker, Select, Table, Divider } from 'antd';
import styles from './index.less';

const { RangePicker } = DatePicker;
const { Search } = Input;

const PluginExamine = () => {
  const columns = [
    {
      title: '插件序号',
      dataIndex: 'pluginSerialNumber',
      key: 'pluginSerialNumber',
      render: text => <a>{text}</a>,
    },
    {
      title: '插件名称',
      dataIndex: 'pluginName',
      key: 'pluginName',
    },
    {
      title: '插件类型',
      dataIndex: 'vulnerabilityLevel',
      key: 'vulnerabilityLevel',
    },
    {
      title: '状态',
      dataIndex: 'pluginType',
      key: 'pluginType',
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: '积分',
      dataIndex: 'integral',
      key: 'integral',
    },
    {
      title: '金币',
      dataIndex: 'goldCoin',
      key: 'goldCoin',
    },
    {
      title: '发布时间',
      dataIndex: 'releaseTime',
      key: 'releaseTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <div>
          <a>编辑</a>
          <Divider type="vertical" />
          <a>审核中</a>
          <Divider type="vertical" />
          <a>通过</a>
          <Divider type="vertical" />
          <a>驳回</a>
          <Divider type="vertical" />
          <a>上线</a>
        </div>
      ),
    },
  ];

  const dataSource = [
    {
      pluginSerialNumber: '1021',
      pluginName: 'SQL注入',
      vulnerabilityLevel: 'SQL注入',
      pluginType: '审核中',
      author: 'wangqing',
      integral: '23',
      goldCoin: '34',
      releaseTime: '2020-10-23',
    },
  ];
  return (
    <div className={styles.pluginExamine}>
      <div className={styles.pluginExamineSearch}>
        <div className={styles.pluginExamineSearchTop}>
          插件搜索：
          <Input className={styles.pluginExamineSearchTopInput} />
          <RangePicker placeholder={['开始日期', '结束日期']} />
          <Button
            type="primary"
            className={styles.pluginExamineSearchTopButton}
          >
            查询
          </Button>
          <Button>重置</Button>
        </div>
        <div className={styles.pluginExamineSearchBottom}>
          <div className={styles.pluginExamineSearchBottomStatus}>
            插件状态：
            <Select defaultValue="all" style={{ width: 120 }} bordered={false}>
              <Option value="all">全部</Option>
            </Select>
          </div>
          <div>
            漏洞等级：
            <Select defaultValue="all" style={{ width: 120 }} bordered={false}>
              <Option value="all">全部</Option>
            </Select>
          </div>
        </div>
      </div>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default PluginExamine;
