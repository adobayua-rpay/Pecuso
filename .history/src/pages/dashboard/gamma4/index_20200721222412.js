import React from 'react'
import { Helmet } from 'react-helmet'
import { Card, Menu, Dropdown, Button,Space} from 'antd';
import {CardSection,Stack,Text } from "@kiwicom/orbit-components/";
import Iframe from 'react-iframe'


const small = "large"
const { Meta } = Card;
const dropdownMenu = (
  <Menu>
    <Menu.Item>
      <a>Action</a>
    </Menu.Item>
    <Menu.Item>
      <a>Gross Profit</a>
    </Menu.Item>
    <Menu.Item>
      <a>Current Assets</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Total Assets</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Total Liabilities</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Current Cash</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Net Income</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Operating Expense</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Current Assets</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Total Assets</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Total Liabilities</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Current Debt</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Short Term Debt</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Total Cash</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Total Debt</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Shareholder Equity</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Cash Change</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Cash Flow</a>
    </Menu.Item>
  </Menu>
  
)

const balanceMenu = (
  <Menu>
    <Menu.Item>
      <a>Current Cash</a>
    </Menu.Item>
    <Menu.Item>
      <a>Short Term Investments</a>
    </Menu.Item>
    <Menu.Item>
      <a>Receivables</a>
    </Menu.Item>
    <Menu.Item>
      <a>Inventory</a>
    </Menu.Item>
    <Menu.Item>
      <a>Other Current Assets</a>
    </Menu.Item>
    <Menu.Item>
      <a>Current Assets</a>
    </Menu.Item>
    <Menu.Item>
      <a>Long Term Investments</a>
    </Menu.Item>
    <Menu.Item>
      <a>Property Plant Equipment</a>
    </Menu.Item>
    <Menu.Item>
      <a>Intangible Assets</a>
    </Menu.Item>
    <Menu.Item>
      <a>Other Assets</a>
    </Menu.Item>
    <Menu.Item>
      <a>Total Assets</a>
    </Menu.Item>
    <Menu.Item>
      <a>Accounts Payable</a>
    </Menu.Item>
    <Menu.Item>
      <a>Current Long Term Debt</a>
    </Menu.Item>
    <Menu.Item>
      <a>Other Current Liabilities</a>
    </Menu.Item>
    <Menu.Item>
      <a>Total Current Liabilities</a>
    </Menu.Item>
    <Menu.Item>
      <a>Long Term Debt</a>
    </Menu.Item>
    <Menu.Item>
      <a>Other Liabilities</a>
    </Menu.Item>
    <Menu.Item>
      <a>Minority Interest</a>
    </Menu.Item>
    <Menu.Item>
      <a>Total Liabilities</a>
    </Menu.Item>
    <Menu.Item>
      <a>Common Stock</a>
    </Menu.Item>
    <Menu.Item>
      <a>Retained Earnings</a>
    </Menu.Item>
    <Menu.Item>
      <a>Treasury Stock</a>
    </Menu.Item>
    <Menu.Item>
      <a>Capital Surplus</a>
    </Menu.Item>
    <Menu.Item>
      <a>Shareholder Equity</a>
    </Menu.Item>
    <Menu.Item>
      <a>Net Tangible Assets</a>
    </Menu.Item>
  </Menu>

)

const DashboardGamma2 = () => {


  return (
    <div>
      <Helmet title="Tesla Profile" />
      <div className="cui__utils__heading">
        <strong>$TSLA</strong>
      </div>

      <div className="card">
        <div className="row">
          <div className="col" style={{ width:"100%"}}>
            <div className="row">
              <Card
                hoverable
                style={{ width:"100%", marginLeft:15}}    
                cover={<img alt="example" src="https://cdn2.iconfinder.com/data/icons/investing-crayons-vol-2/256/Volatility-512.png" />}
              >
                <Meta title="Stock Volatility" description="1.98%" />
              </Card>
              <Card
                hoverable
                style={{ width:"100%"}}    
                cover={<img alt="example" src="https://cdn3.iconfinder.com/data/icons/data-science-15/64/19-512.png" />}
              >
                <Meta title="Stock Rating" description="8.24 (Buy)" />
              </Card>

            </div>
            <Card
              hoverable
              style={{ width:"40%"}}    
              cover={<img alt="example" src="https://cdn.mos.cms.futurecdn.net/BQwukuZwwwXrg27B9Le2Q6-1200-80.png" />}
            >
              <Meta title="Elon Musk" description="Tesla CEO" />
            </Card>
            <Card
              hoverable
              style={{ width:"40%"}}    
              cover={<img alt="example" src="https://cdn.mos.cms.futurecdn.net/BQwukuZwwwXrg27B9Le2Q6-1200-80.png" />}
            >
              <Meta title="Elon Musk" description="Tesla CEO" />
            </Card>
            <Card
              hoverable
              style={{ width:"40%"}}    
              cover={<img alt="example" src="https://cdn.mos.cms.futurecdn.net/BQwukuZwwwXrg27B9Le2Q6-1200-80.png" />}
            >
              <Meta title="Elon Musk" description="Tesla CEO" />
            </Card>
          </div>
          <div className="col">
            <Card
              hoverable
              style={{ width:"100%"}}    
              cover={<img alt="example" src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" />}
            >
              <Meta title="Elon Musk" description="Tesla CEO" />
            </Card>
          </div>
          <div className="col">
            <Card
              hoverable
              style={{ width:"100%"}}    
              cover={<img alt="example" src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" />}
            >
              <Meta title="Elon Musk" description="Tesla CEO" />
            </Card>
            <Iframe
              url="https://widget-api-cdn.intrinio.com/intrinio-widgets.min.js"
              userId="2095ee9f024bec25558304c415c30338bdd1271613906cd7b5125229f23d654b"
              className="myClassname"
              display="initial"
              width="100%"
              height="10%"
            />

          </div>
        </div>
      </div>
      <div className="card">
        <div className="row">
          <Card title="Premium Precision Alpha Price Dynamics" style={{ width: '50%'}}>
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
          <div className="card-body" style={{ width: '50%', height:'15%' }}>
            <Iframe
              url="https://api.stockdio.com/visualization/financial/charts/v1/SingleQuote?app-key=9570C608187A4630BAAD2492DC33BB7F&symbol=TSLA&showCurrency=true&palette=Financial-Light"
              id="myId"
              className="myClassname"
              display="initial"
              width="100%"
              height="10%"
            />
          </div>
          <div className="card-body" style={{ width: '20%', height:'100%' }}>
            <Iframe
              url="https://api.stockdio.com/visualization/financial/charts/v1/QuoteBoard?app-key=9570C608187A4630BAAD2492DC33BB7F&symbols=GM;NKLA;HOG;F;HOG&includeLogo=false&includeCompany=false&includeChange=false&includeTrend=false&palette=Financial-Light&title=Watch%20List&onload=st_3a89f6d5f88b40d5bc8842aa66b9340c"
              id="myId"
              className="myClassname"
              display="initial"
              width="100%"
              height="200"
            />
          </div>

      
        </div>
        <Card title="Tesla Profile" bordered={false}>
          Tesla is an American tech and Automobile company ran by CEO Elon Musk. Tesla, Inc. engages in the design, development, manufacture, and sale of fully electric vehicles, energy generation and storage systems. It also provides vehicle service centers, supercharger station, and self-driving capability. The company operates through the following segments.
          Automotive and Energy Generation and Storage. The Automotive segment includes the design, development, manufacture and sale of electric vehicles. The Energy Generation and Storage segment includes the design, manufacture, installation, sale, and lease of stationary energy storage products and solar energy systems, and sale of electricity generated by its solar energy systems to customers. It develops energy storage products for use in homes, commercial facilities and utility sites. The company was founded by Jeffrey B. Straubel, Elon Reeve Musk, Martin Eberhard, and Marc Tarpenning on July 1, 2003 and is headquartered in Palo Alto, CA.
        </Card>

      </div>
      <div className="card">
        <div className="row">
          <div className="card-body">
            <Iframe
              url="https://api.stockdio.com/visualization/financial/charts/v1/HistoricalPrices?app-key=9570C608187A4630BAAD2492DC33BB7F&symbol=TSLA&dividends=true&splits=true&palette=Financial-Light"
              id="myId"
              className="myClassname"
              display="initial"
              width="100%"
              height="300"
            />
          </div>
        </div>
      </div>
      <div className="card">
        <div className="row">
          <div className="card-body" title="TSLA vs Competitors">
            <strong>Price Comparison vs Competitors</strong>
            <Iframe
              url="https://api.stockdio.com/visualization/financial/charts/v1/ComparePrices?app-key=9570C608187A4630BAAD2492DC33BB7F&symbol=TSLA&compare=GM;F;TM&indices=NYA;SPX&palette=Financial-Light&showLogo=Title"
              id="myId"
              className="myClassname"
              display="initial"
              width="100%"
              height="300"
            />
          </div>

        </div>
      </div>
      <div className="card">
        <div className="row">
          <div className="card-body" title="TSLA vs Competitors">
            <strong>Tesla Company News</strong>
            <Iframe
              url="https://api.stockdio.com/visualization/financial/charts/v1/News?app-key=9570C608187A4630BAAD2492DC33BB7F&symbol=TSLA&palette=Financial-Light&title=News&onload=st_072347b317d04d0a93a3c178f384ec2e"
              id="myId"
              className="myClassname"
              display="initial"
              width="100%"
              height="300"
            />
          </div>

        </div>
      </div>

      <div className="card">
        <div className="row">
          <div className="card-body" title="Tehnical Data">
            <div className="card-header card-header-flex">
              <div className="d-flex flex-column justify-content-center mr-auto">
                <div className="d-flex flex-row justify-content-center">
                  <h5 className="mb-0 mr-2">Key Financial Stats</h5>
                  <span className="text-muted">Selected Financial Stat</span>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <Dropdown overlay={dropdownMenu} placement="bottomRight">
                  <button type="button" className="btn btn-light">
                    <i className="fe fe-more-vertical" />
                  </button>
                </Dropdown>
              </div>
            </div>
            <div className="card-body">
              <p>
                Here you can select key financial stats you would like to see about a stock Ticker.
              </p>
              <p>
                Simply use the three dot stripe on the right to change what financial metric you would like to look at.
              </p>
            </div>


          </div>
        </div>
      </div>

      <div className="card">
        <div className="row">
          <div className="card-body" title="Tehnical Data">
            <div className="card-header card-header-flex">
              <div className="d-flex flex-column justify-content-center mr-auto">
                <div className="d-flex flex-row justify-content-center">
                  <h5 className="mb-0 mr-2">Balance Sheet Stats</h5>
                  <span className="text-muted">Selected Financial Stat</span>
                </div>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <Dropdown overlay={balanceMenu} placement="bottomRight">
                  <button type="button" className="btn btn-light">
                    <i className="fe fe-more-vertical" />
                  </button>
                </Dropdown>
              </div>
            </div>
            <div className="card-body">
              <p>
                Fundamental analysis, allows you to see the basic fundamental financials of a stock, use this if you are new to this platform
              </p>
              <p>
                It is available quaterly or annually witht the default setting being the last available quater
              </p>
            </div>


          </div>
        </div>
      </div>
      <div className="card">
        <div className="row">
          <div className="card-body" title="Quick Tools">
            <Space size={small}>
              <Button type="primary">Stock Diagnostic</Button>
              <Button type="primary">Price Prediction</Button>
              <Button type="primary">Stock Volatility</Button>
            </Space>

          </div>
        </div>
      </div>
      

    </div>
    
  )
  }

export default DashboardGamma2


