/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
//import 'antd/dist/antd.css';
//import './index.css';
import { Drawer, Form, Modal, Button, Col, Row, Input, Select, DatePicker,Slider,Typography, Space, InputNumber, Radio } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Divider from '@material-ui/core/Divider';
import { ExclamationCircleOutlined, UpCircleTwoTone } from "@ant-design/icons";


const {Text, Link} = Typography;
const { Option } = Select;


const { confirm } = Modal

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

  function showConfirm() {
    confirm({
      title: " What Is a Price Target? ",
      icon: <ExclamationCircleOutlined />,
      content: " A price target is an analyst's projection of a security's future price. Price targets can pertain to all types of securities, from complex investment products to stocks and bonds. When setting a stock's price target, an analyst is trying to determine what the stock is worth and where the price will be in 12 or 18 months. Ultimately, price targets depend on the valuation of the company that's issuing the stock.Analysts generally publish their price targets in research reports on specific companies, along with their buy, sell, and hold recommendations for the company's stock. Stock price targets are often quoted in the financial news media. ",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }

  function showVolume() {
    confirm({
      title: " What Is Average Volume? ",
      icon: <ExclamationCircleOutlined />,
      content: "Volume is the amount of an asset or security that changes hands over some period of time, often over the course of a day. For instance, stock trading volume would refer to the number of shares of a security traded between its daily open and close. Trading volume, and changes to volume over the course of time, are important inputs for technical traders. Volume is the number of shares of a security traded during a given period of time. Generally securities with more daily volume are more liquid than those without, since they are more active. Volume is an important indicator in technical analysis because it is used to measure the relative significance of a market move. ",
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
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

    state = {
      value:1
    };

    onChange = e => {
      console.log('radio.checked', e.target.value);
      this.setState({
        value:e.target.value
      });
    };
   
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
                    <Text type="secondary">With a price target trigger, we will automatically act on this stock when it reaches or drops at a certain price</Text>
                  </Space>
                  <Button
              className="btn btn-success"
              style={{ width: "100%" }}
              onClick={showConfirm}
            >
              Learn about trading with a price target
            </Button>
              
                <Form.Item
                  name="name"
                  label="Current Price of Stock is $448.918"
                  rules={[{ required: true, message: 'Analysis Name' }]}
                >
                  <Input placeholder="Price Target" />
                </Form.Item>
          
                  {/* <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="We will alert you of price increase %"
                  /> */}
                  <Radio.Group onChange = {this.onChange} value {...this.state.value}>
                    <Radio value ={1}> Buy Stock</Radio>
                    <Radio value ={2}> Sell Stock</Radio>
                    <Radio value ={3}> Simple Alert</Radio>

                  </Radio.Group>

                </Form.Item>
                <Divider />


              </Col>

              <Col span={52}>
                <Form.Item
                  name="price"
                  label="Dividend Day"
                  rules={[{ required: true, message: 'Please select one' }]}
                >
                  <Space direction="vertical">
                    <Text type="secondary">We will take one of the following actions when this company is issuing out its dividend</Text>
                  </Space>

                  {/* <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="We will alert you of price increase %"
                  /> */}
                  <Radio.Group onChange = {this.onChange} value {...this.state.value}>
                    <Radio value ={1}> Buy Stock</Radio>
                    <Radio value ={2}> Sell Stock</Radio>
                    <Radio value ={3}> Simple Alert</Radio>

                  </Radio.Group>

                </Form.Item>
                <Divider />


              </Col>

              <Col span={52}>
                <Form.Item
                  name="price"
                  label="Average Volume"
                  rules={[{ required: true, message: 'Please enter a price target' }]}
                >
                  <Space direction="vertical">
                    <Text type="secondary">This will allow you to automatically trade on an increase or decrease in the average volume of the stock</Text>
                  </Space>

                  <Space direction="vertical">
                  <Text type="secondary">Select Average Volume Increase</Text>
                    <InputNumber min={-100} max = {100} defaultValue={10} onChange={this.onChange}/>
                  </Space>

                  {/* <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="We will alert you of price increase %"
                  /> */}
                   <Space direction="vertical">
                  <Radio.Group onChange = {this.onChange} value {...this.state.value}>
                    <Radio value ={1}> Buy Stock</Radio>
                    <Radio value ={2}> Sell Stock</Radio>
                    <Radio value ={3}> Simple Alert</Radio>

                  </Radio.Group>
                  </Space>

                </Form.Item>
                <Divider />


              </Col>

              <Col span={52}>
                <Form.Item
                  name="price"
                  label="Price Change vs Sector"
                  rules={[{ required: true, message: 'Please select one' }]}
                >
                  <Space direction="vertical">
                    <Text type="secondary">Will automatically trade for you when the companu trades a certain level higher or below the sector average</Text>
                  </Space>

                  {/* <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="We will alert you of price increase %"
                  /> */}
                  <Radio.Group onChange = {this.onChange} value {...this.state.value}>
                    <Radio value ={1}> Buy Stock</Radio>
                    <Radio value ={2}> Sell Stock</Radio>
                    <Radio value ={3}> Simple Alert</Radio>

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