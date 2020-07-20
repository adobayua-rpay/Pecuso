import React from 'react'
import { Helmet } from 'react-helmet'
import { Card } from 'antd';
import anychart from 'anychart'
import Iframe from 'react-iframe'
import {  CardSection,Text,Stack } from "@kiwicom/orbit-components/";

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
          <Card title="Premium Precision Alpha Price Dynamics" style={{ width: 50 }}>
            <CardSection
              expandable
              title="Stock Probability Up"
            >
              <Stack direction="column" spacing="condensed">
                <Text type="primary">Computed, machine learned probability that the value of the measured asset will go up in the next time step (next day probability). The probability is computed exactly (up to double precision numerical error). Value is between 0 and 1.</Text>
                <Text type="secondary">Probability Up = 0.5623</Text>
                <Text type="secondary">Probability Down</Text>
                  
              </Stack>
            </CardSection>
            <CardSection
              expandable
              title="Stock Probability Down"
            >
              <Stack direction="column" spacing="condensed">
                <Text type="primary">Computed, machine learned probability that the value of the measured asset will go down in the next time step (next day probability). The probability is computed exactly (up to double precision numerical error). Value is between 0 and 1.</Text>
                <Text type="secondary">Probability Down = 0.1623</Text>
              </Stack>


            </CardSection>
            <CardSection
              expandable
              title="Market Emotion"
            >
              <Stack direction="column" spacing="condensed">
                <Text type="primary">Computed, machine learned Behavioral Energy measured from the equilibrium energy as zero offset. Positive: Bull, Negative: Bear. Measured in millivolts</Text>
                <Text type="secondary">Market Emotion = 0.2981</Text>
              </Stack>


            </CardSection>
            <CardSection
              expandable
              title="Market Power"
            >
              <Stack direction="column" spacing="condensed">
                <Text type="critical">Power is the rate (energy amount per time period) at which work is done or energy converted to price movement. Market power combines Emotion and Resistance. At equilibrium, Power is equal to Emotion squared divided by R, that is, V2/R). Measured in microWatts. Power is zero at equilibrium</Text>
                <Text type="info">Market Power = 52492.8458</Text>
              </Stack>
              
              <CardSection
                expandable
                title="Market Resistance"
              >
                <Stack direction="column" spacing="condensed">
                  <Text type="warning">Market resistance to changing price. Same as market viscosity. Measured in ohms.</Text>
                  <Text type="attention">Market Resistance = 2.7492</Text>
                </Stack>
              </CardSection>


            </CardSection>

          </Card>



            
          <Card title="Tesla Profile" bordered={false}>
            Tesla is an American tech and Automobile company ran by CEO Elon Musk. Tesla, Inc. engages in the design, development, manufacture, and sale of fully electric vehicles, energy generation and storage systems. It also provides vehicle service centers, supercharger station, and self-driving capability. The company operates through the following segments.
            Automotive and Energy Generation and Storage. The Automotive segment includes the design, development, manufacture and sale of electric vehicles. The Energy Generation and Storage segment includes the design, manufacture, installation, sale, and lease of stationary energy storage products and solar energy systems, and sale of electricity generated by its solar energy systems to customers. It develops energy storage products for use in homes, commercial facilities and utility sites. The company was founded by Jeffrey B. Straubel, Elon Reeve Musk, Martin Eberhard, and Marc Tarpenning on July 1, 2003 and is headquartered in Palo Alto, CA.
          </Card>

          <div className="card-body" style={{ width: 900 }}>
            <Iframe
              url="https://api.stockdio.com/visualization/financial/charts/v1/HistoricalPrices?app-key=9570C608187A4630BAAD2492DC33BB7F&symbol=TSLA&dividends=true&splits=true&palette=Financial-Light"
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

