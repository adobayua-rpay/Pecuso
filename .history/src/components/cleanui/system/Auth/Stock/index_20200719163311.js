import React from 'react'
import { Helmet } from 'react-helmet'









  const formItemLayout = {
    labelCol: {
      xs: { span: 204 },
      sm: { span: 205 },
    },
    wrapperCol: {
      xs: { span: 50 },
      sm: { span: 50 },
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
      <Helmet title="Tesla Profile" />
      <div className="cui__utils__heading">
        <strong>$TSLA</strong>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className=".col-md-4">
            <strong>Portolio Form</strong>
          </h5>

        </div>
      </div>
    </div>
    
  )
}

export default DashboardGamma2
