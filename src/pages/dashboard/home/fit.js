/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
//import 'antd/dist/antd.css';
//import './index.css';
import { Drawer, Form, Modal, Button, Col, Row, DatePicker, Input, Select, Slider,Typography, Space, InputNumber, Radio } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Divider from '@material-ui/core/Divider';
import { ExclamationCircleOutlined, UpCircleTwoTone } from "@ant-design/icons";
import PodOptions from './podOptions'
import Volatility from './volatility'
import Risk from './risk'
import Beta from './beta'


const {Text, Link} = Typography;
const { Option } = Select;

function onChanges(date, dateString){
  console.log(date, dateString)
}


const { confirm } = Modal


  class App extends React.Component {
    state = { visible: false };
  
    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
   
  render() {
    return (
      <>
<Button type="primary" onClick={this.showModal}>
          Add to Pod
        </Button>
        <Modal
          title="Add to Pod / Create new Pod"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okButtonProps={{ disabled: false }}
          cancelButtonProps={{ disabled: false }}
        >
            <strong>Volatiliy Comparison</strong>
          <p><Volatility />
          <strong>The stock volatility is to the left </strong>
          </p>
          <p> </p>

              <p><strong>Risk Comparison</strong></p>
              <Risk />
              <p> </p>

<p><strong>Beta Comparison</strong></p>
<Beta />

<p> </p>
<p><strong>Price Comparison</strong></p>
<Beta />

<p> </p>
<p><strong>Movement Comparison</strong></p>
<Beta />

<p> </p>
<p><strong>Forecast Comparison</strong></p>
<Beta />

<p> </p>
<p><strong>Category Comparison</strong></p>
<Beta />

<p> </p>
<p><strong>Sentiment Comparison</strong></p>
<Beta />


          <p>Some contents...</p>
        </Modal>
     

      </>
    );
  }
}

export default App