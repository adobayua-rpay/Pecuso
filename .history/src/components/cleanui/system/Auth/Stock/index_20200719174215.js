import React from 'react'
import { Helmet } from 'react-helmet'
import { Card } from 'antd';

const { Meta } = Card;

const DashboardGamma2 = () => {
  return (
    <div>
      <Helmet title="Tesla Profile" />
      <div className="cui__utils__heading">
        <strong>$TSLAs</strong>
      </div>
      
      
      <div className="row col-xl-3 col-lg-6">
        <div className="col-6" style={{ width: 540 }}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" style={{ height: 140 }} src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" />}
          >
            <Meta title="Elon Musk" description="Tesla CEO" />
          </Card>
          <Card
            hoverable
            style={{width:240}}
            cover={<img alt="example" style={{ height: 140 }} src="https://cdn.mos.cms.futurecdn.net/BQwukuZwwwXrg27B9Le2Q6-1200-80.png" />}
          >
            <Meta title="Tesla" description="$TSLA" />
          </Card>

    

        </div>
      </div>
    </div>
    
    
  )
}

export default DashboardGamma2

