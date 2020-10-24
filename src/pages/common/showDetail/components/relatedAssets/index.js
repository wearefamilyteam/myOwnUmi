import React from 'react';
import './index.less';
import { Table } from 'antd';

const RelatedAssets = () => {
  const dataSource = [];

  const columns = [
    {
      title: '资产名称/IP',
      dataIndex: 'info',
      key: 'name',
    },
    {
      title: '资产类型',
      dataIndex: 'ip',
      key: 'age',
    },
    {
      title: '服务器漏洞',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '告警',
      dataIndex: 'time',
      key: 'name',
    },
  ];
  return (
    <div className="related-assets">
      <div className="related-text">相关资产</div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default RelatedAssets;
