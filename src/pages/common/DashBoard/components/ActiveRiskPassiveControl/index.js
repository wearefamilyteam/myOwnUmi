import React from 'react';
import { Tabs, Table, Timeline } from 'antd';
import styles from './index.less';
const { TabPane } = Tabs;

const ActiveRiskPassiveControl = () => {
  const columns = [
    {
      title: '危险分析',
      dataIndex: 'hazardAnalysis',
      key: 'hazardAnalysis',
      render: text => <a>{text}</a>,
    },
    {
      title: '风险名称',
      dataIndex: 'riskName',
      key: 'riskName',
    },
    {
      title: '风险地址',
      dataIndex: 'riskAddress',
      key: 'riskAddress',
    },
  ];

  const assetTargetColumns = [
    {
      title: '域名',
      dataIndex: 'domainName',
      key: 'domainName',
    },
    {
      title: 'IP',
      dataIndex: 'ip',
      key: 'ip',
    },
    {
      title: '端口',
      dataIndex: 'port',
      key: 'port',
    },
    {
      title: '服务',
      dataIndex: 'server',
      key: 'server',
    },
    {
      title: '更新时间',
      dataIndex: 'time',
      key: 'time',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'hazardAnalysis',
      hazardAnalysis: '泄漏API数据分析',
      riskName: 'swagger控制台未授权访问',
      riskAddress: 'http://www.baidu.com',
    },
  ];

  const assetTargetData = [
    {
      key: '1',
      domainName: 'www.baidu.com',
      ip: '127.0.0.1',
      port: 8000,
      server: 'http',
      time: '2020-10-01',
    },
  ];

  const timeLineData = [
    {
      time: '2015-09-01',
      content: '检测出一个指纹识别',
      status: '低危',
    },
    {
      time: '2015-09-02',
      content: '检测swagger控制台未授权访问',
      status: '提示',
    },
  ];

  const onchangeTabs = tab => {
    console.log('tab', tab);
  };
  return (
    <div>
      <Tabs onChange={onchangeTabs} type="card">
        <TabPane tab="主动风险" key="ActiveRisk">
          <div className={styles.activeRisk}>
            <div className={styles.activeRiskLeft}>
              <div className={styles.activeRiskLeftTop}>
                <span className={styles.activeRiskLeftTopTitle}>最新风险</span>
                <span className={styles.activeRiskLeftTopTime}>
                  2020-10-20 19:20
                </span>
              </div>
              <Table columns={columns} dataSource={data} />
            </div>
            <div className={styles.activeRiskRight}>
              <div className={styles.activeRiskRightTop}>
                <div>实时动态</div>
                <a>更多</a>
              </div>
              <div>
                <Timeline>
                  {timeLineData.map((item, index) => {
                    return (
                      <Timeline.Item>
                        <div className={styles.timelineItem}>
                          <span>
                            {item.time} {item.content}
                          </span>
                          <span>{item.status}</span>
                          <a>查看</a>
                        </div>
                      </Timeline.Item>
                    );
                  })}
                </Timeline>
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane tab="被动监控" key="PassiveMonitoring">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="资产目标" key="AssetTarget">
          <Table columns={assetTargetColumns} dataSource={assetTargetData} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ActiveRiskPassiveControl;
