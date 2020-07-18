import React from 'react'
import { Helmet } from 'react-helmet'

import Chart11 from 'components/kit/widgets/Charts/11'




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
            <Chart11 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardGamma2
