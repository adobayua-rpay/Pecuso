import React from 'react'
import { Helmet } from 'react-helmet'
import { Card } from 'antd';
import AnyChart from 'anychart-react'
import anychart from 'anychart'
import Iframe from 'react-iframe'
import Data from './microsoft.csv'


const { Meta } = Card;





const DashboardGamma2 = () => {
  let  msftDataTable = anychart.data.table();
  msftDataTable = anychart.data.table();
  msftDataTable.addData(Data);
  const chart = anychart.stock();
  const firstPlot = chart.plot(0);
  firstPlot.area(msftDataTable.mapAs({ value: 4 })).name("MSFT");
  chart.scroller().area(msftDataTable.mapAs({ value: 4 }));
  chart.selectRange("2005-01-03", "2005-11-20");

  return (
    <div>
      <Helmet title="Tesla Profile" />
      <div className="cui__utils__heading">
        <strong>$TSLAs</strong>
      </div>
      
      
       
      <div className="row">
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
          <Card 
            hoverable
            style={{width:240}}
            cover={<img alt="example" style={{ height: 240 }} src="https://842930.smushcdn.com/1760858/wp-content/uploads/2020/06/wooden-toys-08-car.png?lossy=1&strip=1&webp=1" />}
          >
            <Meta title="Automotive Stock" description="Tesla is a car maker" />
          </Card>
          <Card
            hoverable
            style={{width:240}}
            cover={<img alt="example" style={{ height: 240 }} src="https://842930.smushcdn.com/1760858/wp-content/uploads/2020/05/boom-11-payment.png?lossy=1&strip=1&webp=1" />}
          >
            <Meta title="$250b Club" description="$TSLA has a market cap > $250B" />
          </Card>


            
          <Card title="Tesla Profile" bordered={false}>
            Tesla is an American tech and Automobile company ran by CEO Elon Musk. Tesla, Inc. engages in the design, development, manufacture, and sale of fully electric vehicles, energy generation and storage systems. It also provides vehicle service centers, supercharger station, and self-driving capability. The company operates through the following segments.
            Automotive and Energy Generation and Storage. The Automotive segment includes the design, development, manufacture and sale of electric vehicles. The Energy Generation and Storage segment includes the design, manufacture, installation, sale, and lease of stationary energy storage products and solar energy systems, and sale of electricity generated by its solar energy systems to customers. It develops energy storage products for use in homes, commercial facilities and utility sites. The company was founded by Jeffrey B. Straubel, Elon Reeve Musk, Martin Eberhard, and Marc Tarpenning on July 1, 2003 and is headquartered in Palo Alto, CA.
          </Card>
          <AnyChart
            type="pie"
            data={[1, 2, 3, 4]}
            instance={chart}
            title="Simple pie chart"
          />
          <div className="card-body" style={{ width: 900 }}>
            <Iframe
              url="https://api.stockdio.com/visualization/financial/charts/v1/HistoricalPrices?app-key=9570C608187A4630BAAD2492DC33BB7F&symbol=AAPL&dividends=true&splits=true&palette=Financial-Light"
              id="myId"
              className="myClassname"
              display="initial"
              width="100%"
              height="355"
            />
          </div>



          
         

    

        </div>
      </div>
    </div>
    
    
  )
  }

export default DashboardGamma2

