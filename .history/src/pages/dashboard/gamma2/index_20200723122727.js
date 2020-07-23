import React from 'react'
import { Helmet } from 'react-helmet'

import { Input,Slider,Form} from 'antd'
import Demo from './demo';
import Chips from './chips';
import Iframe from 'react-iframe'




  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 12 },
    },
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

  


const DashboardGamma2 = () => {
  return (
    <div>
      <Helmet title="Portfolio Starter" />
      <div className="cui__utils__heading">
        <strong>Get Started with your portfolio!</strong>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="mb-4">
            <strong>Portolio Form</strong>
          </h5>
          <Form {...formItemLayout} labelAlign="left" style={{marginLeft: '30%'}}>
            <Form.Item name="Portfolio Name" label="Fullname">
              <Input placeholder="What would you like to call your Portfolio?" />
            </Form.Item>
            <Form.Item name="email6" label="Portfolio Description">
              <Input placeholder="How would you like to describe your portfolio?" />
            </Form.Item>
            <Form.Item name="budget1" label="Budget" className="mb-3">
              <Input placeholder="Your Budget..." addonBefore="$" />
            </Form.Item>
            <Form.Item name="amount" label="Risk ">
              <Slider marks={marks} />
            </Form.Item>
            <button type="submit" className="btn btn-success px-5">
              Lets get it!
            </button>
          </Form>
        </div>
      </div>
      <div className="card card-solid">
        <div className="card-header card-header-flex">
          <div className="d-flex flex-column justify-content-center mr-auto">
            <div className="d-flex flex-row justify-content-center">
              Select your portfolio settings and allow us pick the best portfolio for you
            </div>
          </div>
        </div>
        <div className="card-body"> 
          <Demo 
            width='100%'
            marginLeft="2500"
          />
        </div>
      </div>

      <div className="card card-solid">
        <div className="card-header card-header-flex">
          <div className="d-flex flex-column justify-content-center mr-auto">
            <div className="d-flex flex-row justify-content-center">
              Finally select your investment themes (optional) by removing the themes you dont want considered in your portfolio.
            </div>
          </div>
        </div>
        <div className="card-body"> 
          <Chips  
            width='100%'
            marginLeft="2500"
          />
        </div>
      </div>
    </div>
    
  )
}

export default DashboardGamma2
