import React from 'react';
import styles from './index.less';
import {
  VulnerabilitiesNumber,
  TypeDistribution,
  DataAnalysis,
  ActiveRiskPassiveControl,
} from './components';

const DashBoard = () => {
  return (
    <div className={styles.dashBoard}>
      <div className={styles.dashBoardTop}>
        <VulnerabilitiesNumber />
        <TypeDistribution />
      </div>
      <DataAnalysis />
      <ActiveRiskPassiveControl />
    </div>
  );
};

export default DashBoard;
