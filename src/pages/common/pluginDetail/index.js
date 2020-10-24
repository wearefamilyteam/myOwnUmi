import React from 'react';
import { Rate, Descriptions } from 'antd';
import styles from './index.less';

const PluginDetail = () => {
  return (
    <div className={styles.pluginDetail}>
      <div className={styles.pluginDetailTop}>
        <div className={styles.pluginDetailTopLeft}>
          VMWare 任意文件读取漏洞
        </div>
        <div className={styles.pluginDetailTopRight}>
          <div className={styles.pluginDetailTopRightPass}>通过</div>
          <div>
            <Rate count={1} /> 关注 0
          </div>
        </div>
      </div>
      <Descriptions className={styles.descriptions}>
        <Descriptions.Item label="UVD-ID">--</Descriptions.Item>
        <Descriptions.Item label="漏洞类别">下载</Descriptions.Item>
        <Descriptions.Item label="CVE-ID">--</Descriptions.Item>
        <Descriptions.Item label="纰漏/发现时间">2020-10-14</Descriptions.Item>
        <Descriptions.Item label="bugtraq编号">--</Descriptions.Item>
        <Descriptions.Item label="CNNVD-ID">--</Descriptions.Item>
        <Descriptions.Item label="提交时间">2020-10-23</Descriptions.Item>
        <Descriptions.Item label="漏洞发现者">王清</Descriptions.Item>
        <Descriptions.Item label="CNVD-ID">--</Descriptions.Item>
        <Descriptions.Item label="漏洞等级">低危</Descriptions.Item>
        <Descriptions.Item label="提交者">王清</Descriptions.Item>
        <Descriptions.Item label="搜索关键词">--</Descriptions.Item>
      </Descriptions>

      <Descriptions title="影响范围" className={styles.descriptions}>
        <Descriptions.Item label="UserName">暂无数据</Descriptions.Item>
      </Descriptions>

      <Descriptions title="来源" className={styles.descriptions}>
        <Descriptions.Item label="UserName">暂无数据</Descriptions.Item>
      </Descriptions>

      <Descriptions title="漏洞简介" className={styles.descriptions}>
        <Descriptions.Item label="UserName">暂无数据</Descriptions.Item>
      </Descriptions>

      <Descriptions title="漏洞详情" className={styles.descriptions}>
        <Descriptions.Item label="UserName">暂无数据</Descriptions.Item>
      </Descriptions>

      <Descriptions title="参考链接" className={styles.descriptions}>
        <Descriptions.Item label="UserName">暂无数据</Descriptions.Item>
      </Descriptions>

      <Descriptions title="靶向信息" className={styles.descriptions}>
        <Descriptions.Item label="UserName">暂无数据</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default PluginDetail;
