/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
//import 'antd/dist/antd.css';
//import './index.css';
import { Select, Modal, Button, Col, Row, DatePicker, Input, Select, Slider,Typography, Space, InputNumber, Radio } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Divider from '@material-ui/core/Divider';
import { ExclamationCircleOutlined, UpCircleTwoTone } from "@ant-design/icons";
import PodOptions from './podOptions'


const { Option } = Select;


function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  function onBlur() {
    console.log('blur');
  }
  
  function onFocus() {
    console.log('focus');
  }
  
  function onSearch(val) {
    console.log('search:', val);
  }
  

const { confirm } = Modal


  class App extends React.Component {
 
  render() {
    return (
      <>
  <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="jack">Jack</Option>
    <Option value="lucy">Lucy</Option>
    <Option value="tom">Tom</Option>
  </Select>

      </>
    );
  }
}

export default App