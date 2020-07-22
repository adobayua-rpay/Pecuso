import React from 'react'
import { Helmet } from 'react-helmet'
import { Card} from 'antd';



const { Meta } = Card;


const DashboardGamma2 = () => {


  return (
    <div>
      <Helmet title="Tesla Profile" />
      <div className="cui__utils__heading">
        <strong>$TSLA</strong>
      </div>
      
      
      
      <div className="row">
        <div className="col-12">
          <Card
            hoverable
            style={{width:"15%"}}
            cover={<img alt="example" src="https://cdn.mos.cms.futurecdn.net/BQwukuZwwwXrg27B9Le2Q6-1200-80.png" />}
          >
            <Meta title="Tesla" description="$TSLA" />
          </Card>
        </div>
        <div className="col-6">
          <Card
            hoverable
            style={{width:"15%"}}
            cover={<img alt="example" src="https://cdn.mos.cms.futurecdn.net/BQwukuZwwwXrg27B9Le2Q6-1200-80.png" />}
          >
            <Meta title="Tesla" description="$TSLA" />
          </Card>
        </div>
      </div>
      
    </div>
    
    
  )
  }

export default DashboardGamma2

