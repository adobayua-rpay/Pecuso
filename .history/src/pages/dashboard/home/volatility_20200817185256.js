/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
//import 'antd/dist/antd.css';
//import './index.css';
import { Modal, Button, Col, Row, DatePicker, Input, Select, Slider,Typography, Space, InputNumber, Radio,Progress } from 'antd';
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
  <Progress type="circle" percent={75} format={percent => `${percent} Days`} />

      </>
    );
  }
}

export default App