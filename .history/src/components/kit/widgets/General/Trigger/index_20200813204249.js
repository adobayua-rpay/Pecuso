/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
//import 'antd/dist/antd.css';
//import './index.css';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker,Slider,Radio,Typography, Space, InputNumber } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Divider from '@material-ui/core/Divider';

const {Text, Link} = Typography;
const { Option } = Select;



const marks = {

    '-100': '-100',
    // '-90': '-90',
    // '-80': '-80',
    // '-70': '-70',
    // '-60': '-60',
    '-50': '-50',
    // '-40': '-40',
    // '-30': '-30',
    // '-20': '-20',
    // '-15': '-15',
    // '-10': '-10',
    // '-5': '-5',  
    // 0: '-10',
    // 5: '-5',
    0: '0',
    // 10: '10',
    // 20: '20',
    // 30: '30',
    // 40: '40',
    50: '50',
    // 60: '60',
    // 70: '70',
    // 80: '80',
    // 90: '90',
    100: '100',
  }

class DrawerForm extends React.Component {
    state = { visible: false }

    showDrawer = () => {
      this.setState({
        visible: true,
      })
    }
  
    onClose = () => {
      this.setState({
        visible: false,
      })
    }
  
    onChange = (value) => {
      console.log('changed', value)
    }

   
  render() {
    return (
      <>
        <Button type="dashed" onClick={this.showDrawer}>
          <PlusOutlined /> Triggers / Algo
        </Button>
        <Drawer
          title="Triggers and Rules to Auto trade this stock for you"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Analysis Name' }]}
                >
                  <Input placeholder="Please enter analysis name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="url"
                  label="Url"
                  rules={[{ required: true, message: 'Please enter url' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />
                </Form.Item>
              </Col>
              <Col span={52}>
                <Form.Item
                  name="url"
                  label="Stock Change %"
                  rules={[{ required: true, message: 'Please enter url' }]}
                >
                  <Space direction="vertical">
                    <Text type="secondary">Select Change %</Text>
                    
                  </Space>
                  <Space direction="vertical">
                    <Text type="secondary">We will take one of the actions below when the stock price acts at your rule</Text>
                    <Slider 
                    min={-100}
                    max={100}
                    width={250}
                    defaultValue={0}
                    step={1}
                    marks={marks} />
                  </Space>
                  {/* <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="We will alert you of price increase %"
                  /> */}
                  <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">Buy Stock</Radio.Button>
                    <span> </span>  <span> </span>
                    <Radio.Button value="b">Sell Stock (If Available)</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Divider />


              </Col>

              <Col span={52}>
                <Form.Item
                  name="price"
                  label="$ Price Target"
                  rules={[{ required: true, message: 'Please enter a price target' }]}
                >
                  <Space direction="vertical">
                    <Text type="secondary">Select Change %</Text>
                  </Space>
              
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Analysis Name' }]}
                >
                  <Input placeholder="Please enter analysis name" />
                </Form.Item>
          
                  {/* <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="We will alert you of price increase %"
                  /> */}
                  <Radio.Group defaultValue="a" buttonStyle="solid">
                    <Radio.Button value="a">Buy Stock</Radio.Button>
                    <span> </span>  <span> </span>
                    <Radio.Button value="b">Sell Stock (If Available)</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Divider />


              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="owner"
                  label="Stock Expectation"
                  rules={[{ required: true, message: 'Stock Expectation' }]}
                >
                  <Select placeholder="Please select an owner">
                    <Option value="lower">Lower</Option>
                    <Option value="stable">Stable</Option>
                    <Option value="higher">Stable</Option>

                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[{ required: true, message: 'Please choose the pod type' }]}
                >
                  <Select placeholder="Please choose the pod type">
                    <Option value="priceincrease">Price Increase</Option>
                    <Option value="pricedecrease">Price Decrease</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="category"
                  label="category"
                  rules={[{ required: true, message: 'Please choose the pod category' }]}
                >
                  <Select placeholder="Please choose the pod category">
                    <Option value="private">Capital Savings</Option>
                    <Option value="public">Capital Accruement</Option>
                    <Option value="public">Loan Repayment</Option>
                    <Option value="public">Mortgage Target</Option>
                    <Option value="public">Refinance Target</Option>
                    <Option value="public">Miscalleneous</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="approver"
                  label="Approver"
                  rules={[{ required: true, message: 'Please choose the approver' }]}
                >
                  <Select placeholder="Please choose the approver">
                    <Option value="jack">Jack Ma</Option>
                    <Option value="tom">Tom Liu</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
              <Form.Item name="rate" label="Stock Rating">
                <Slider marks={marks} />
              </Form.Item>
              </Col>    
              <Col span={12}>
                <Form.Item
                  name="dateTime"
                  label="DateTime"
                  rules={[{ required: true, message: 'Portfolio Target Date' }]}
                >
                  <DatePicker.RangePicker
                    style={{ width: '100%' }}
                    getPopupContainer={trigger => trigger.parentElement}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: 'please enter a description for your pod',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="please enter pod description" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </>
    );
  }
}

export default DrawerForm