import React from 'react';
import {
  CodepenCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import './index.less';
import RelatedAssets from '../relatedAssets';

const RiskStatus = () => {
  return (
    <div className="risk-status">
      <div className="risk-text">风险状态</div>
      <div className="risk-value">
        <div>
          <CodepenCircleOutlined />
          <div>
            <div>域名漏洞</div>
            <div className="value">0</div>
          </div>
        </div>
        <div>
          <ExclamationCircleOutlined />
          <div>
            <div>告警风险</div>
            <div className="value">0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskStatus;
