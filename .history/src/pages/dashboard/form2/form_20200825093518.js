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

  let uid = ""
  var user = firebase.auth().currentUser;

  if (user){
   uid = user.uid
  } else {
    console.log("No user")
  }

  const db = firebase.firestore();

  const data = {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA'
  };

  const pool = ['maze', 'nike', 'split', 'bool']
  const rescue = db.collection('testing').doc(uid).set(pool);
  console.log("Blooper")

  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 100);
    });
  };

  const onFinish = async (values) => {
//const onFinish = (values) => {
  let arrayHoldings = ['msft', 'nvda', 'amd', 'okta', 'alrm', 'syna', 'fb', 'cprt', 'odfl']

  const apiUrl0 = 'https://sandbox.iexapis.com/stable/stock/'+arrayHoldings[0]+'/price?token=Tsk_b918148a96ad4a198cf793bbbccac54d'
  fetch(apiUrl0)
  .then((response) => response.json())
  .then((data) => console.log('Price0' + data, localStorage.setItem('price0', data)))

  const apiUrl1 = 'https://sandbox.iexapis.com/stable/stock/'+arrayHoldings[1]+'/price?token=Tsk_b918148a96ad4a198cf793bbbccac54d'
  fetch(apiUrl1)
  .then((response) => response.json())
  .then((data) => console.log('Price0' + data, localStorage.setItem('price0', data)))

  let result = await resolveAfter2Seconds();


  const apiUrl2 = 'https://sandbox.iexapis.com/stable/stock/'+arrayHoldings[2]+'/price?token=Tsk_b918148a96ad4a198cf793bbbccac54d'
  fetch(apiUrl2)
  .then((response) => response.json())
  .then((data) => console.log('Price0' + data, localStorage.setItem('price2', data)))

result = await resolveAfter2Seconds();

  const apiUrl3 = 'https://sandbox.iexapis.com/stable/stock/'+arrayHoldings[3]+'/price?token=Tsk_b918148a96ad4a198cf793bbbccac54d'
  fetch(apiUrl3)
  .then((response) => response.json())
  .then((data) => console.log('Price0' + data, localStorage.setItem('price3', data)))

   result = await resolveAfter2Seconds();


  const apiUrl4 = 'https://sandbox.iexapis.com/stable/stock/'+arrayHoldings[4]+'/price?token=Tsk_b918148a96ad4a198cf793bbbccac54d'
  fetch(apiUrl4)
  .then((response) => response.json())
  .then((data) => console.log('Price0' + data, localStorage.setItem('price4', data)))

  result = await resolveAfter2Seconds();


  const apiUrl5 = 'https://sandbox.iexapis.com/stable/stock/'+arrayHoldings[5]+'/price?token=Tsk_b918148a96ad4a198cf793bbbccac54d'
  fetch(apiUrl5)
  .then((response) => response.json())
  .then((data) => console.log('Price0' + data, localStorage.setItem('price5', data)))

   result = await resolveAfter2Seconds();


  const apiUrl6 = 'https://sandbox.iexapis.com/stable/stock/'+arrayHoldings[6]+'/price?token=Tsk_b918148a96ad4a198cf793bbbccac54d'
  fetch(apiUrl6)
  .then((response) => response.json())
  .then((data) => console.log('Price0' + data, localStorage.setItem('price6', data)))

  result = await resolveAfter2Seconds();


  const apiUrl7 = 'https://sandbox.iexapis.com/stable/stock/'+arrayHoldings[7]+'/price?token=Tsk_b918148a96ad4a198cf793bbbccac54d'
  fetch(apiUrl7)
  .then((response) => response.json())
  .then((data) => console.log('Price0' + data, localStorage.setItem('price7', data)))
 result = await resolveAfter2Seconds();


  const apiUrl8 = 'https://sandbox.iexapis.com/stable/stock/'+arrayHoldings[8]+'/price?token=Tsk_b918148a96ad4a198cf793bbbccac54d'
  fetch(apiUrl8)
  .then((response) => response.json())
  .then((data) => console.log('Price0' + data, localStorage.setItem('price8', data)))


  let price1 = localStorage.getItem("price0")
  let price2 = localStorage.getItem('price1')
  let price3 = localStorage.getItem('price2')
  let price4 = localStorage.getItem('price3')
  let price5 = localStorage.getItem('price4')
  let price6 = localStorage.getItem('price5')
  let price7 = localStorage.getItem('price6')
  let price8 = localStorage.getItem('price7')
  let price9 = localStorage.getItem('price8')


    console.log("Received values of form: ", values);
    localStorage.setItem('strategy', values.strategy);
    localStorage.setItem('timeline', values.timeline);
    localStorage.setItem('payment', values.payment);
    localStorage.setItem('target', values.portfoliotarget);
    localStorage.setItem('risk', values.riskslider);
    localStorage.setItem('themes', values.themes);
    localStorage.setItem('threshold', values.threshold);
    localStorage.setItem('uid', uid);

 

     let firstname = localStorage.getItem('firstname');
     let lastname = localStorage.getItem('lastname');
     let username = localStorage.getItem('username');
     let country = localStorage.getItem('country');
     let tradeplatform = localStorage.getItem('tradeplatform');
     let investmentexperience = localStorage.getItem('investmentexperience');
     let broker = localStorage.getItem('broker');
     let income = localStorage.getItem('income');
     let workstatus = localStorage.getItem('workstatus');


     let strategy = localStorage.getItem('strategy');
     let timeline = localStorage.getItem('timeline');
     let payment = localStorage.getItem('payment');
     let target = localStorage.getItem('target');
     let risk = localStorage.getItem('risk');
     let themes = localStorage.getItem('themes');
     let threshold = localStorage.getItem('threshold');



    const docRef = db.collection("users").doc(uid);
    const portfolioRef = db.collection("portfolios").doc(uid);


    docRef.set({
      firstname:firstname, 
      lastname:lastname, 
      username:username, 
      usercountry:country,
      tradeplatform:tradeplatform,
      investmentexperience:investmentexperience, 
      userbroker:broker, 
      userincome:income*1000, 
      userworkstatus:workstatus,
      portfoliostrategy: strategy,
      portfoliotimeline:timeline,
      paymentmethod:payment,
      target:target,
      risk:risk,
      threshold:threshold,
      themes:[themes], 
      uid:uid
  });




  let initialPortfolio = {
    msft:{
      name:"Microsoft Inc",
      symbol:"MSFT",
      price:price1,
      shares:100
    },
    nvda:{
      name:"Nvidia Corporation",
      symbol:"nvda",
      price:price2,
      shares:75
    },
    amd:{
      name:"Advanced Micro Devices Inc.",
      symbol:"amd",
      price:price3,
      shares:60
    },
    okta:{
      name:"Okta Inc.",
      symbol:"okta",
      price:price4,
      shares:40
    },
    alrm:{
      symbol:"alrm",
      name:"Alarm.com Holdings Inc.",
      price:price5,
      shares:40
    },
    syna:{
      symbol:"syna",
      name:"Syna Corp",
      price:price6,
      shares:75
    },
    fb:{
      symbol:"fb",
      name:"Facebook Inc.",
      price:price7,
      shares:50
    },
    cprt:{
      symbol:"cprt",
      name:"Copart Inc.",
      price:price8,
      shares:10
    },
    odfl:{
      symbol:"odfl",
      name:"Old Dominion Freight Line Inc.",
      price:price9,
      shares:10
    },


  }

  let man = "man"

  const res =  db.collection('portfoliosputas').doc(uid).set(initialPortfolio);
  const Testres =  db.collection('portfoliosputa').doc(uid).set(man);

  

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
