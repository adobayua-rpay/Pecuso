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


const {Text, Link} = Typography;
const { Option } = Select;

function onChanges(date, dateString){
  console.log(date, dateString)
}


const { confirm } = Modal

const columns = [
    {
      title: 'Stat Factor',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  class App extends React.Component {

   
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
          <p><PodOptions /></p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
     

      </>
    );
  }
}

export default App