import React from 'react';
import './index.less';
import LeftMenu from './components/leftMenu';
import SearchBar from './components/searchBar';
import TableContent from './components/tableContent';

const assetsCenter = () => {
  return (
    <div className="assets-center">
      <div className="left">
        <div className="menu-wrapper">
          <LeftMenu></LeftMenu>
        </div>
      </div>
      <div className="right">
        <div className="search-wrapper">
          <SearchBar></SearchBar>
        </div>
        <div className="rable-wrapper">
          <TableContent></TableContent>
        </div>
      </div>
    </div>
  );
};

export default assetsCenter;
