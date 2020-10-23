import React from 'react';
import styles from './index.less';

const DataAnalysis = () => {
  let dataSource = [
    {
      name: '风险数',
      value: 334,
    },
    {
      name: '根域名',
      value: 1,
    },
    {
      name: '子域名',
      value: 30,
    },
    {
      name: 'DNS解析记录',
      value: 4,
    },
    {
      name: '存活主机',
      value: 2,
    },
    {
      name: '端口服务',
      value: 30,
    },
    {
      name: 'WEB开放服务',
      value: 334,
    },
    {
      name: '网站指纹',
      value: 334,
    },
    {
      name: '网站路径',
      value: 334,
    },
    {
      name: '爬虫流量',
      value: 3,
    },
  ];

  return (
    <div className={styles.dataAnalysis}>
      {dataSource.map((item, index) => {
        return (
          <div className={styles.dataAnalysisItem}>
            <div className={styles.dataAnalysisItemTop}>{item.name}</div>
            <div className={styles.dataAnalysisItemBottom}>{item.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DataAnalysis;
