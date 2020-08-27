/* eslint-disable */


import React from "react";
import { Link } from 'react-router-dom'


import {
  Form,
  Select,
  InputNumber,
  Slider,
  Button,
  Checkbox,
  DatePicker,
  Row,
  Col,
} from "antd";
import Chips from "./chips";
import firebase from 'firebase/app'
import 'firebase/firestore';

const { Option, OptGroup } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};


if (!firebase.apps.length) {
  firebase.initializeApp({});
}

const { RangePicker } = DatePicker;

function handleChange(value) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}


const Formuno = () => {

  var user = firebase.auth().currentUser;

  if (user){
let uid = user.uid
  } else {
    console.log("No user")
  }

  const db = firebase.firestore();


  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    localStorage.setItem('strategy', values.strategy);
    localStorage.setItem('timeline', values.timeline);
    localStorage.setItem('payment', values.payment);
    localStorage.setItem('target', values.portfoliotarget);
    localStorage.setItem('risk', values.riskslider);
    localStorage.setItem('themes', values.themes);
    localStorage.setItem('threshold', values.threshold);

 

     let strategy = localStorage.getItem('strategy');
     let timeline = localStorage.getItem('timeline');
     let payment = localStorage.getItem('payment');
     let target = localStorage.getItem('target');
     let risk = localStorage.getItem('risk');
     let threshold = localStorage.getItem('threshold');
     let themes = localStorage.getItem('themes');



    const docRef = db.collection(uid).doc('alovelace');

    docRef.set({
    strategy: strategy,
    timeline:timeline,
    payment:payment,
    target:target,
    risk:risk,
    threshold:threshold,
    themes:themes, 
    user:uid
  });

  };

  //   function onOk(value) {
  //     console.log('onOk: ', value);
  //   }

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
        name="strategy"
        label="Portfolio Strategy"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please select your country!",
          },
        ]}
      >
        <Select placeholder="Please select portfolio strategy">
          <Option value="Autonomous">Autonomous</Option>
          <Option value="Pecus">Pecus Managed</Option>
          <Option value="User">User Managed</Option>
          <Option value="usa">Pecus + User Hybrid</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="timeline"
        label="Portfolio Timeline"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please select your country!",
          },
        ]}
      >
        <RangePicker />
      </Form.Item>
      <Form.Item
        name="payment"
        label="Payment method"
        rules={[
          { required: true, message: "You must select a payment method" },
        ]}
      >
        <Select
          defaultValue="Visa"
          style={{ width: 200 }}
          onChange={handleChange}
        >
          <OptGroup label="Credit Card">
            <Option value="amex">Amex</Option>
            <Option value="discover">Discover</Option>
          </OptGroup>
          <OptGroup label="Debit Card">
            <Option value="mastercard">MasterCard</Option>
            <Option value="visa">Visa</Option>
          </OptGroup>
          <OptGroup label="ACH">
            <Option value="ach">ACH (1-3 days)</Option>
            <Option value="wire">Wire</Option>
            <Option value="cheque">Cheque</Option>
          </OptGroup>
          <OptGroup label="Others">
            <Option value="cash">Cash</Option>
            <Option value="bitcoin">Bitcoin</Option>
            <Option value="ethereum">Ethereum</Option>
          </OptGroup>
        </Select>
      </Form.Item>

      <Form.Item
        name="portfoliotarget"
        label="Portfolio Target"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please select your portfolio target",
          },
        ]}
      >
        <Select placeholder="Please select your portfolio target">
          <Option value="retirement">Retirement</Option>
          <Option value="savings">Savings</Option>
          <Option value="studentloans">Student Loans</Option>
          <Option value="mortgage">Mortgage</Option>
          <Option value="capital">Capital</Option>
        </Select>
      </Form.Item>

      <Form.Item label="InputNumber">
        <Form.Item name="input-number" noStyle>
          <InputNumber min={1} max={10} />
        </Form.Item>
        <span className="ant-form-text"> machines</span>
      </Form.Item>

      <Form.Item name="slider" label="Portfolio Starting Balance (Paper $)">
        <Slider
          marks={{
            0: "100,000",
            20: "$200,000",
            40: "400,000",
            60: "600,000",
            80: "800,000",
            100: "1,000,000",
          }}
        />
      </Form.Item>

      <Form.Item name="riskslider" label="Adjust Portfolio Risk">
        <Slider defaultValue={0} tooltipVisible />
      </Form.Item>

      <Form.Item name="threshold" label="Risk Threshold">
        <Checkbox.Group>
          <Row>
            <Col span={8}>
              <Checkbox
                value="Low"
                style={{
                  lineHeight: "32px",
                }}
              >
                Low
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="Medium"
                style={{
                  lineHeight: "32px",
                }}
                disabled
              >
                Medium
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="Levelled"
                style={{
                  lineHeight: "32px",
                }}
              >
                Levelled
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="High"
                style={{
                  lineHeight: "32px",
                }}
              >
                High
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="High Balanced"
                style={{
                  lineHeight: "32px",
                }}
              >
                High Balanced
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item name="themes" label="Investment Themes">
        <Chips />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        Must click save before submitting!
        <Button type="primary" htmlType="submit" style={{ marginLeft: 25 }}>
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

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Formuno;
