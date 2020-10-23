import React from 'react';
import ReactEcharts from 'echarts-for-react';
import styles from './index.less';

const VulnerabilitiesNumber = () => {
  const option = {
    color: ['#d81f20', '#e78522', '#eab927', '#34afdd'],
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)',
    },
    legend: {
      data: ['严重', '高危', '中危', '低危'],
      orient: 'vertical',
      right: 0,
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        center: ['40%', '50%'],
        label: {
          show: false,
          position: 'center',
        },
        data: [
          {
            name: '严重',
            value: 425,
          },
          {
            name: '高危',
            value: 402,
          },
          {
            name: '中危',
            value: 388,
          },
          {
            name: '低危',
            value: 4290,
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
    <div className={styles.vulnerabilitiesNumber}>
      <div className={styles.vulnerabilitiesNumberTitle}>漏洞数量分布</div>
      <ReactEcharts
        className={styles.vulnerabilitiesNumberEcharts}
        option={option}
      />
    </div>
  );
};

export default VulnerabilitiesNumber;
