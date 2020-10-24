import React from 'react';
import { Divider } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import RiskStatus from './components/riskStatus';
import RelatedAssets from './components/relatedAssets';
import './index.less';

const ShowDetail = () => {
  return (
    <div className="show-detail">
      <div className="title">
        <ArrowLeftOutlined />
        <span>p1kagu.xyz</span>
      </div>
      <div className="content-wrapper">
        <div className="info">
          <div className="domain-text">域名信息</div>
          <div className="domain-value">
            <span>域名：p1kagu.xyz</span>
            <span>根域名：p1kagu.xyz</span>
          </div>
        </div>
        <Divider></Divider>
        <div className="status">
          <RiskStatus></RiskStatus>
        </div>
        <Divider></Divider>
        <div className="table">
          <RelatedAssets></RelatedAssets>
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;
