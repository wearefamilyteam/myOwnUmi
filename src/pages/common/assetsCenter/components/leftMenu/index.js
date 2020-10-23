import React, { Fragment } from 'react';
import './index.less';
import { StarOutlined } from '@ant-design/icons';

const LeftMenu = () => {
  const menuData = [
    {
      label: '域名管理',
      number: 0,
      children: [
        { label: '存在风险的域名', number: 0 },
        { label: '未发现风险的域名', number: 0 },
        { label: '新增域名', number: 0 },
      ],
    },
    {
      label: '网站域名',
      number: 1,
      children: [],
    },
    {
      label: '子域名',
      number: 2,
      children: [],
    },
    {
      label: '服务器地址',
      number: 3,
      children: [],
    },
    {
      label: '资产重要性',
      number: 0,
      children: [
        { label: '#重要资产', number: 0 },
        { label: '#一般资产', number: 0 },
        { label: '#测试资产', number: 0 },
      ],
    },
  ];

  return (
    <div>
      {menuData.map(item => (
        <Fragment>
          <div className="menu-item">
            <div>
              <StarOutlined />
              <span>{item.label}</span>
            </div>
            <span>{item.number}</span>
          </div>
          {item.children.length > 0 &&
            item.children.map(uu => (
              <div className="menu-item padding">
                <span>{uu.label}</span>
                <span>{uu.number}</span>
              </div>
            ))}
        </Fragment>
      ))}
    </div>
  );
};

export default LeftMenu;
