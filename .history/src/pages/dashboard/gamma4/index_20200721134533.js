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

      <div className="card">
        <div className="row">
          <div className="col">
            <Card
              hoverable
              style={{ width:"55%"}}    
              cover={<img alt="example" src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" />}
            >
              <Meta title="Elon Musk" description="Tesla CEO" />
            </Card>
          </div>
          <div className="col">
            <Card
              hoverable
              style={{ width:"55%"}}    
              cover={<img alt="example" src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" />}
            >
              <Meta title="Elon Musk" description="Tesla CEO" />
            </Card>
          </div>
          <div className="col">
            <Card
              hoverable
              style={{ width:"35%"}}    
              cover={<img alt="example" src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" />}
            >
              <Meta title="Elon Musk" description="Tesla CEO" />
            </Card>
          </div>
        </div>
      </div>

    </div>
    
  )
  }

export default DashboardGamma2

