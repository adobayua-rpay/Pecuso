import React from 'react'
import { Helmet } from 'react-helmet'

import { Input,Slider,Form} from 'antd'






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
          <Form {...formItemLayout} labelAlign="left">
            <Form.Item name="fullname6" label="Fullname">
              <Input placeholder="Portfolio NName" />
            </Form.Item>
            <Form.Item name="email6" label="Your Email...">
              <Input placeholder="Portfolio Description" />
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
    </div>
  )
}

export default DashboardGamma2
