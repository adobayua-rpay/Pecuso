import React from 'react'
import { Helmet } from 'react-helmet'

import { Input } from 'antd'

const { Search, TextArea } = Input



const DashboardGamma2 = () => {
  return (
    <div>
      <Helmet title="Portfolio Starter" />
      <div className="cui__utils__heading">
        <strong>Get Started with your portfolio!</strong>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="card">
            <h5 className="mb-3">
              <strong>Basic</strong>
            </h5>
            <div className="mb-5">
              <Input placeholder="Basic usage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardGamma2
