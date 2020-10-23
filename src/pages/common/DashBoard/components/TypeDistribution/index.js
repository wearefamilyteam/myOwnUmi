import React from 'react';
import ReactEcharts from 'echarts-for-react';
import styles from './index.less';

const TypeDistribution = () => {
  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)',
    },
    series: [
      {
        type: 'pie',
        center: ['40%', '50%'],
        data: [
          {
            name: '基于DOM的跨站脚本',
            value: 425,
          },
          {
            name: 'SQl盲注',
            value: 402,
          },
          {
            name: 'SQL注入',
            value: 388,
          },
          {
            name: 'Zabbix弱口令',
            value: 4290,
          },
          {
            name: '找到SVN存储库',
            value: 4290,
          },
          {
            name: 'MySQL注入',
            value: 400,
          },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return (
    <div className={styles.typeDistribution}>
      <div className={styles.typeDistributionTitle}>类型分布</div>
      <ReactEcharts
        className={styles.typeDistributionEcharts}
        option={option}
      />
    </div>
  );
};

export default TypeDistribution;
