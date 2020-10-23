import React from 'react';
import { Select, Input, Switch, Tag } from 'antd';
import './index.less';

const { Option, OptGroup } = Select;
const { Search } = Input;

const SearchBar = () => {
  const handleChange = () => {};
  const onSearch = () => {};

  const selectData = [
    { label: '自动循环', value: 1 },
    { label: '公网IP', value: 2 },
    { label: '私网IP', value: 3 },
    { label: '实例名称', value: 4 },
    { label: '实例ID', value: 5 },
    { label: '所属PVC ID', value: 6 },
    { label: '操作系统', value: 7 },
    { label: '是否有漏洞问题', value: 8 },
  ];

  return (
    <div className="search">
      <div className="search-args">
        <Input.Group compact>
          <Select placeholder="请选择" style={{ width: 150 }}>
            {selectData.map(item => (
              <Option value={item.value} key={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
          <Input.Search placeholder="请输入" style={{ width: 220 }} />
        </Input.Group>
        <div>
          <Select
            placeholder="常用搜索条件"
            style={{ width: 190 }}
            onChange={handleChange}
          >
            <Option value="科比">科比</Option>
            <Option value="乔丹">乔丹</Option>
          </Select>
        </div>
      </div>
      <div className="search-items">
        <Switch
          size="small"
          checkedChildren="开启"
          unCheckedChildren="关闭"
          defaultChecked
        />
        <span className="margin">检索项：</span>
        <Tag closable>是否存在风险：有风险</Tag>
        <span>共(0)台</span>
        <a className="margin" href="#">
          保存
        </a>
        <a href="#">清除</a>
      </div>
    </div>
  );
};

export default SearchBar;
