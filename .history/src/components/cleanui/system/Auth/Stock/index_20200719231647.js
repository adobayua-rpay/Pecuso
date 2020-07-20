import React from 'react'
import { Helmet } from 'react-helmet'
import { Card } from 'antd';
import Iframe from 'react-iframe'

const { Meta } = Card;
const DashboardGamma2 = () => {
  return (
    <div style={{marginLeft: '-120%'}}>


      <Helmet title="Tesla Profile" />
      <div className="cui__utils__heading">
        <strong>$TSLAs</strong>
      </div>
      <div className="card">
        <div className="row card-body">
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" style={{ height: 240 }} src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" />}
          >
            <Meta title="Elon Musk" description="Tesla CEO" />
          </Card>
          <Card                 
            hoverable
            style={{width:240}}
            cover={<img alt="example" style={{ height: 240 }} src="https://cdn.mos.cms.futurecdn.net/BQwukuZwwwXrg27B9Le2Q6-1200-80.png" />}
          >
            <Meta title="Tesla" description="$TSLA" />
          </Card>
          <Iframe
            url="https://api.stockdio.com/visualization/financial/charts/v1/HistoricalPrices?app-key=&symbol=AAPL&dividends=true&splits=true&palette=Financial-Light"
            id="myId"
            className="myClassname"
            display="initial"
          />

       


    

 
        </div>
      </div>
    </div>
    
  )
}

export default DashboardGamma2

