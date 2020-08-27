/* eslint-disable */

import React from "react"; 
import {
    Form,
    DatePicker,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Checkbox,
    Input,
    Timeline,
    Row,
    Col,
  } from "antd";
  import { UploadOutlined} from "@ant-design/icons";
  import { Link } from 'react-router-dom'

  
  const { RangePicker } = DatePicker;

  const { Option } = Select;
  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };
  
  const normFile = (e) => {
    console.log("Upload event:", e);
  
    if (Array.isArray(e)) {
      return e;
    }
  
    return e && e.fileList;
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    console.log('poppin');
    console.log(values.firstname)
    localStorage.setItem('firstname', values.firstname);
    localStorage.setItem('lastname', values.lastname);
    localStorage.setItem('country', values.username);

    localStorage.setItem('username', values.username);
    localStorage.setItem('tradeplatform', values.tradeplatform);
    localStorage.setItem('investmentexperience', values.investmentexperience);
    localStorage.setItem('broker', values.broker);
    localStorage.setItem('income', values.income);
    localStorage.setItem('workstatus', values.radio-group);




  };
  
  const Formuno = () => {

  
    return (
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
          "input-number": 3,
          "checkbox-group": ["A", "B"],
          rate: 3.5,
        }}
      >
        
        <Form.Item
          label="Client First Name"
          name="firstname"
          rules={[
            {
              required: true,
              message: "Please put in your first name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Client Last Name"
          name="lastname"
          rules={[
            {
              required: true,
              message: "Please put in your last name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Client Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please select your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>





        <Form.Item
          name="country"
          label="Client Country"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select your country!",
            },
          ]}
        >
          <Select placeholder="Please select a country">
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
            <Option value="canada">Canada</Option>
            <Option value="poland">Poland</Option>
            <Option value="nigeria">Nigeria</Option>
          </Select>
        </Form.Item>


        <Form.Item
          name="tradeplatform"
          label="Current Trading Platform"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select your current trading platform!",
            },
          ]}
        >
          <Select placeholder="Please select your current platform">
            <Option value="robinhood">Robinhood</Option>
            <Option value="revolut">Revolut</Option>
            <Option value="cashapp">Cash App</Option>
            <Option value="acorns">Acorns</Option>
            <Option value="ameritrade">Ameritrade</Option>
            <Option value="m1">M1 Finance</Option>
            <Option value="ally">Ally Invest</Option>
            <Option value="tos">Think or swim</Option>
            <Option value="bloomberg">Bloomberg Terminal</Option>
            <Option value="e">E*Trade</Option>
            <Option value="charles">Charles Schwab</Option>
            <Option value="goldman">Goldman Sachs</Option>
            <Option value="none">None</Option>




          </Select>
        </Form.Item>
  
        <Form.Item
          name="investmentexperience"
          label="Investment Exprience"
          rules={[
            {
              required: true,
              message: "Please select your Investment Experience from the following!",
              type: "array",
            },
          ]}
        >
          <Select mode="multiple" placeholder="Please select investment experience">
            <Option value="beginner">Beginner</Option>
            <Option value="vet">Seasoned Vet</Option>
            <Option value="learn">Ready to learn</Option>
            <Option value="hoodexp">Robinhood</Option>
            <Option value="allyexp">Ally Investing</Option>
            <Option value="betterexp">Betterment</Option>
            <Option value="wealthexp">Wealth Front</Option>
            <Option value="m1exp">M1 Finance</Option>
            <Option value="stashexp">Stash</Option>
            <Option value="acornexp">Acorns</Option>

          </Select>
        </Form.Item>
  
        {/* <Form.Item label="InputNumber">
          <Form.Item name="input-number" noStyle>
            <InputNumber min={1} max={10} />
          </Form.Item>
          <span className="ant-form-text"> machines</span>
        </Form.Item> */}
  
        <Form.Item name="broker" label="Registered Broker" valuePropName="checked">
          <Switch />
        </Form.Item>
  
        <Form.Item name="income" label="Adjust Current Income">
          <Slider
            marks={{
              0: "0",
              20: "$20,000",
              40: "40,000",
              60: "60,000",
              80: "80,000",
              100: "100,000",
            }}
          />
        </Form.Item>
  
        <Form.Item name="radio-group" label="Work Status">
          <Radio.Group>
            <Radio value="a">Student</Radio>
            <Radio value="b">Unemployed</Radio>
            <Radio value="c">Freelancer</Radio>
          </Radio.Group>
        </Form.Item>
  
        <Form.Item name="radio-button" label="Trading License">
          <Radio.Group>
            <Radio.Button value="a">Tax Exempt</Radio.Button>
            <Radio.Button value="b">101.AS License</Radio.Button>
            <Radio.Button value="c">None</Radio.Button>
          </Radio.Group>
        </Form.Item>
  
        {/* <Form.Item name="checkbox-group" label="Checkbox.Group"> */}
          {/* <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox
                  value="A"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  A
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="B"
                  style={{
                    lineHeight: "32px",
                  }}
                  disabled
                >
                  B
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="C"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  C
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="D"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  D
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="E"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  E
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="F"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  F
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item> */}
  

  
        <Form.Item
          name="upload"
          label="Upload License"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="Upload Trading License (Optional)"
        >
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button>
              <UploadOutlined /> Click to upload
            </Button>
          </Upload>
        </Form.Item>
  


        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >
          Must click save before submitting!
          <Button type="primary" htmlType="submit" style={{marginLeft:25}}>
            Save
          </Button>
        </Form.Item>



        
  
        <Form.Item
          wrapperCol={{
            span: 12,
            offset: 6,
          }}
        >

          <Link to="/dashboard/form3">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>

          </Link>


        </Form.Item>

        <Timeline>
          <Timeline.Item>Client Details</Timeline.Item>
          <Timeline.Item>Portfolio Details</Timeline.Item>
          <Timeline.Item>Portfolio Risk</Timeline.Item>
          <Timeline.Item>Portfolio Setup</Timeline.Item>
        </Timeline>
      </Form>


    );
  };
  
  export default Formuno
