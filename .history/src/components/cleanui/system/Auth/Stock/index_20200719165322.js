import React from 'react'
import { Helmet } from 'react-helmet'
import { Card } from 'antd';

const { Meta } = Card;

const DashboardGamma2 = () => {
  return (
    <div style={{marginLeft: '-120%'}}>


      <Helmet title="Tesla Profile" />
      <div className="cui__utils__heading">
        <strong>$TSLAs</strong>
      </div>
      <div className="card">
        <div className="card-body">
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>,
          <h5 className=".col-md-4">
            <strong>Portolio Form</strong>
          </h5>

        </div>
      </div>
    </div>
    
  )
}

export default DashboardGamma2

