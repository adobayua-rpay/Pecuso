import React from 'react'
import { Helmet } from 'react-helmet'

import { Input,Button } from 'antd'




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
              <strong>Portfolio Name</strong>
            </h5>
            <div className="mb-5">
              <Input placeholder="What Would you like to call this portfolio?" />
            </div>
            
            <div className="mb-5" style={{height:'10px'}}>
              <div className=".col-md-4">
                <Button className="mr-3 mb-3">Begin!</Button>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardGamma2
