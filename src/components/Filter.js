import React from 'react';
import { Select } from 'antd';

import { Tags } from "../data/timelineData";

import './Filter.scss';

const { Option } = Select;

const tagOptions = Object.keys(Tags).map(tagKey => <Option key={tagKey}>{Tags[tagKey]}</Option>);

const Filter = ({ onFilterUpdate }) => (
  <Select className='filter-select' mode="multiple" placeholder="Filter by Tags" onChange={onFilterUpdate}>
      {tagOptions}
  </Select>
);

export default Filter;