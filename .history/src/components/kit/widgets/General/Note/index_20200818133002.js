/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
//import 'antd/dist/antd.css';
//import './index.css';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker,Slider } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Attributes from './attributes'

const { Option } = Select;

const {Options} = Select;
const children = [];

for (let i = 10; i < 36; i++){
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`Selected:${value}`);
}


const marks = {
    0: '0',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    60: '60',
    70: '70',
    80: '80',
    90: '90',
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
  


  render() {
    return (
      <>
        <Button type="primary" onClick={this.showDrawer}>
          <PlusOutlined /> See Portfolio Fit
        </Button>
        <Drawer
          title="Analyze Stock"
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
              {/* <Col span={12}>
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
              </Col> */}
            </Row>
            <Row gutter={16}>
              {/* <Col span={12}>
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
              </Col> */}
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[{ required: true, message: 'Please enter the note type' }]}
                >
                  <Select placeholder="Please choose the note type">
                    <Option value="strategic">Strategic</Option>
                    <Option value="strategic">Target</Option>
                    <Option value="strategic">Idea</Option>
                    <Option value="miscallenous">Miscalleneous</Option>
                  </Select>
                </Form.Item>
              </Col>
              {/* <Col span={12}>
                <Form.Item
                  name="type"
                  label="Note Type"
                  rules={[{ required: true, message: 'Please s' }]}
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
              </Col> */}
            </Row>
            <Row gutter={16}>
              {/* <Col span={12}>
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
              </Col> */}
              {/* <Col span={12}>
              <Form.Item name="rate" label="Stock Rating">
                <Slider marks={marks} />
              </Form.Item>
              </Col>    */}
              <Col span={12}>
                <Form.Item
                  name="reminder"
                  label="Note Reminder"
                  rules={[{ required: true, message: 'Leave a reminder on the note' }]}
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
                  name="attributes"
                  label=" Attach Your Tags to the Note"
                  rules={[
                    {
                      required: true,
                      message: 'please enter a note/description',
                    },
                  ]}
                >
                  <Attributes />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  name="note"
                  label=" Note"
                  rules={[
                    {
                      required: true,
                      message: 'please enter a note/description',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="please enter note description" />
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