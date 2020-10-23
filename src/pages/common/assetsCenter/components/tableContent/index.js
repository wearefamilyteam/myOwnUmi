import React from 'react';
import { Table } from 'antd';

const TableContent = () => {
  const dataSource = [];

  const columns = [
    {
      title: '网站信息',
      dataIndex: 'info',
      key: 'name',
    },
    {
      title: 'IP地址',
      dataIndex: 'ip',
      key: 'age',
    },
    {
      title: '地域',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '更新时间',
      dataIndex: 'time',
      key: 'name',
    },
    {
      title: '所属PVC',
      dataIndex: 'pvc',
      key: 'age',
    },
    {
      title: '容器组数量',
      dataIndex: 'conut',
      key: 'address',
    },
  ];
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default TableContent;
