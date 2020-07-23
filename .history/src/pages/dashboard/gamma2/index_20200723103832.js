import React from 'react'
import { Helmet } from 'react-helmet'

import { Input,Slider,Form} from 'antd'
import Demo from './demo';




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
      <div className="card card-solid bg-success">
        <div className="card-header card-header-flex">
          <div className="d-flex flex-column justify-content-center mr-auto">
            <div className="d-flex flex-row justify-content-center">
            </div>
          </div>
        </div>
        <div className="card-body"> 
          <p>

          </p>
          <button type="submit" className="btn btn-danger px-15" style={{marginLeft: '50%'}}>
            Lets do this
          </button>
          <Demo />
        </div>
      </div>
    </div>
    
  )
}

export default DashboardGamma2
