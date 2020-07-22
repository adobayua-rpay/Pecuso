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
        <div className="col">
          <div className="card">
            <Card
              hoverable   
              cover={<img alt="example" src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" />}
            >
              <Meta title="Elon Muskeaseeeeeeeee" description="Tesla CEO" />
            </Card>
            <Card
              hoverable
              style={{width:"35%"}}
              cover={<img alt="example" src="https://cdn.mos.cms.futurecdn.net/BQwukuZwwwXrg27B9Le2Q6-1200-80.png" />}
            >
              <Meta title="Tesla" description="$TSLA" />
            </Card>

          </div>
        </div>
        <div className="card">
          <Card
            hoverable
            style={{width:"35%"}}
            cover={<img alt="example" src="https://cdn.mos.cms.futurecdn.net/BQwukuZwwwXrg27B9Le2Q6-1200-80.png" />}
          >
            <Meta title="Tesla" description="$TSLA" />
          </Card>
        </div>

          
      </div>
      <div className="row">
        <div className="col-lg-12 col-xl-6">
          <Card
            hoverable
            style={{ width:"35%"}}    
            cover={<img alt="example" src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" />}
          >
            <Meta title="Elon Muskeaseeeeeeeee" description="Tesla CEO" />
          </Card>

        </div>
          
      </div>
      
    </div>
    
    
  )
  }

export default DashboardGamma2

