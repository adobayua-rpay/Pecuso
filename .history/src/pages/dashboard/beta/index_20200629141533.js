import React, { useState } from 'react'

import { DownOutlined,EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons'
import { Slider, Calendar, Badge, Table, Dropdown, Button, Menu, Progress, Tabs,Card, Avatar, } from 'antd'
import ChartistGraph from 'react-chartist'
import { Helmet } from 'react-helmet'
import General23 from 'components/kit/widgets/General/23'
import General23v1 from 'components/kit/widgets/General/23v1'
import General24 from 'components/kit/widgets/General/24'
import General24v1 from 'components/kit/widgets/General/24v1'
import General14 from 'components/kit/widgets/General/14'
// import General20 from 'components/kit/widgets/General/20'
// import General20v1 from 'components/kit/widgets/General/20v1'
import General21 from 'components/kit/widgets/General/21'
import General21v1 from 'components/kit/widgets/General/21v1'
import General21v2 from 'components/kit/widgets/General/21v2'
import General21v3 from 'components/kit/widgets/General/21v3'
import General22 from 'components/kit/widgets/General/22'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/core";




import {
  rangeSlider,
  calendarData,
  weekChartistData,
  monthCartistData,
  taskTableData,
  tableData,
  progressGroup,
} from './data.json'

const { TabPane } = Tabs
const { Meta } = Card

// Slider Range Settings //
const rangeMarks = {
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

const [isOpen, setIsOpen] = React.useState();
const onClose = () => setIsOpen(false);
const cancelRef = React.useRef();


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

// Calendar Settings //
function getListData(value) {
  const date = value.date()
  const itemName = `date_${date}`
  let listData
  if (calendarData[itemName] !== undefined) {
    listData = calendarData[itemName]
  }
  return listData || []
}

function dateCellRender(value) {
  const listData = getListData(value)
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  )
}

// Week Chartist Settings //
const weekChartistOptions = {
  fullWidth: true,
  showArea: false,
  chartPadding: {
    right: 30,
    left: 0,
  },
  plugins: [
    // tooltip({
    //   seriesName: false,
    // }),
  ],
}

// Month Chartist Settings //
const monthChartistOptions = {
  seriesBarDistance: 10,
}

const DashboardBeta = () => {
  const [taskTableSelectedRowKeys, setTaskTableSelectedRowKeys] = useState([])

  const onSelectChange = keys => {
    setTaskTableSelectedRowKeys(keys)
  }

  const taskTableRowSelection = {
    taskTableSelectedRowKeys,
    onChange: onSelectChange,
  }

  // const dropdownMenu = (
  //   <Menu>
  //     <Menu.Item key="1">1st menu item</Menu.Item>
  //     <Menu.Item key="2">2nd menu item</Menu.Item>
  //     <Menu.Item key="3">3rd item</Menu.Item>
  //   </Menu>
  // )

  const taskTableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'Username',
      dataIndex: 'username',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: () => (
        <div className="pull-right">
          <Dropdown overlay={dropdownMenu}>
            <Button style={{ marginLeft: 8 }} size="small">
              Action <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      ),
    },
  ]
 

  

  const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Office',
      dataIndex: 'office',
      key: 'office',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary',
      sorter: (a, b) => a.salary - b.salary,
    },
  ]

  return (
    <div>
      <Helmet title="Dashboard: Beta" />
      <div className="row">
        <div className="col-lg-12 col-xl-6">
          <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>TESLA</strong>
              </div>
              <div className="text-muted">$TSLA</div>
            </div>
            {/* <div className="card-body">
              <General19 />
            </div> */}
          </div>
          <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>TESLA BIO</strong>
              </div>
              <div className="text-muted">Tesla, Inc. engages in the design, development, manufacture, and sale of fully electric vehicles, energy generation and storage systems. It also provides vehicle service centers, supercharger station, and self-driving capability. The company operates through the following segments: Automotive and Energy Generation and Storage. The Automotive segment includes the design, development, manufacture and sale of electric vehicles. The Energy Generation and Storage segment includes the design, manufacture, installation, sale, and lease of stationary energy storage products and solar energy systems, and sale of electricity generated by its solar energy systems to customers. It develops energy storage products for use in homes, commercial facilities and utility sites. The company was founded by Jeffrey B. Straubel, Elon Reeve Musk, Martin Eberhard, and Marc Tarpenning on July 1, 2003 and is headquartered in Palo Alto, CA.</div>
            </div>
            {/* <div className="card-body">
              <General19 />
            </div> */}
          </div>
          <div className="card">
            <div className="card-header card-header-flex">
              <div className="d-flex flex-column justify-content-center mr-auto">
                <h5 className="mb-0">Key Stats</h5>
              </div>
              <Tabs defaultActiveKey="1" className="kit-tabs-pills">
                <TabPane tab={<a className="nav-link">Key Section 1</a>} key="1" />
                <TabPane tab={<a className="nav-link">Key Stats Section 2</a>} key="2" />
                <TabPane tab={<a className="nav-link">Key Stats Section 3</a>} key="3" />
              </Tabs>
            </div>
            <div className="card-body">
              Market Cap - 
              Outstanding Shares - 
              52 Week High - 
              52 Week Low - 
              Beta - 
              Employees - 
            </div>
          </div>
          <div className="col-lg-6">
            <h5 className="mb-3">
              <strong>News</strong>
            </h5>
            <div className="mb-5">
              <div className="mb-3">
                <Card
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Bulls And Bears Of The Week: Apple, Facebook, Tesla And More"
                    description="Benzinga has examined the prospects for many investor favorite stocks over the past week. This week's bullish calls again included the iPhone maker and the king of e-commerce. The electric vehicle leader and a social media colossus were among the bearish calls. The main U.S. indexes lost ground this past week, led by the 3.3% retreat in the Dow Jones industrials. It was a week in which the iPhone maker held its annual developers conference , the e-commerce leader made a big acquisition and America's bestselling vehicle got a makeover. Business leaders were unhappy with recent immigration changes , the specter of new tariffs loomed and Democrats gained momentum . Bulls: Benzinga continues to examine the prospects for many of the stocks most popular with investors. The following are some of the week's most bullish and bearish posts that are worth another look"
                  />
                </Card>
                <Card
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://cloud.iexapis.com/v1/news/image/a9d4926a-d631-4487-bc80-a6ec75917686"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={
                      <Avatar src="https://images.boerse-online.de/images/aaa/firmen/t/tesla003-kl-bo.jpg" />
                    }
                    title="Tesla community celebrates 49 years of Elon Musk’s relentless pursuit of dreams and sustainability"
                    description="Tesla and SpaceX CEO Elon Musk is celebrating his 49th birthday today, and both the electric car and space community are celebrating a life that has so far been dedicated to the pursuit of dreams and sustainability. Musk’s journey has been arduous, but his sheer determination has played a notable part in accelerating today’s shift […] The post Tesla community celebrates 49 years of Elon Musk’s relentless pursuit of dreams and sustainability appeared first on TESLARATI ."
                  />
                </Card>
              </div>
              {/* <div className="mb-3">
                <Card style={{ width: 300, marginTop: 16 }} loading>
                  <Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                  />
                </Card>
              </div> */}
            </div>
          </div>


          <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>Shares Outstanding</strong>
              </div>
              <div className="text-muted">Here is your Portfolio Diversity</div>
            </div>
            <div className="card-body">
              <div>
                <strong>Market Cap</strong>
                <p className="text-muted mb-1">Tech Stocks Booming Baby</p>
                <div className="mb-3">
                  <Progress
                    percent={progressGroup.first.progress}
                    status={progressGroup.first.status}
                  />
                </div>
                <strong>52 Week High</strong>
                <p className="text-muted mb-1">Airplane Stocks arent doing as well due to Covid</p>
                <div className="mb-3">
                  <Progress
                    percent={progressGroup.second.progress}
                    status={progressGroup.second.status}
                  />
                </div>
                <strong>52 Week Low</strong>
                <p className="text-muted mb-1">Robotics portfolio has taken the biggest hit</p>
                <div className="mb-3">
                  <Progress
                    percent={progressGroup.third.progress}
                    status={progressGroup.third.status}
                  />
                </div>
                <strong>{progressGroup.fourth.name}</strong>
                <p className="text-muted mb-1">TSLA is big booming baby</p>
                <div className="mb-3">
                  <Progress
                    percent={progressGroup.fourth.progress}
                    status={progressGroup.fourth.status}
                  />
                </div>
                <strong>{progressGroup.fives.name}</strong>
                <p className="text-muted mb-1">{progressGroup.fives.description}</p>
                <div className="mb-3">
                  <Progress percent={progressGroup.fives.progress} />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>Friends</strong>
              </div>
              <div className="text-muted">Adobas friends.</div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="card bg-light border-0 mb-0">
                    <General23 />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 mb-0">
                    <General23v1 />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>Trade Collaborators</strong>
              </div>
              <div className="text-muted">Heres who you are trading with.</div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="kit__utils__table">
                    <Table
                      columns={taskTableColumns}
                      dataSource={taskTableData}
                      rowSelection={taskTableRowSelection}
                      pagination={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>Information Cards</strong>
              </div>
              <div className="text-muted">Block with important Information Cards information</div>
            </div>
            <div className="card-body">
              <div className="card bg-primary border-0 mb-4">
                <div className="card-body">
                  <General24 />
                </div>
              </div>
              <div className="card bg-light border-0 mb-0">
                <div className="card-body">
                  <General24v1 />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-xl-6">
          {/* <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>Server Info</strong>
              </div>
              <div className="text-muted">Block with important Server Info information</div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="overflow-hidden rounded card border-0 mb-0">
                    <General20 />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="overflow-hidden rounded card border-0 mb-0">
                    <General20v1 />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="card">
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
          <div className="card">
            <div className="card-header card-header-flex">
              <div className="d-flex flex-column justify-content-center mr-auto">
                <div className="d-flex flex-row justify-content-center">
                  <h5 className="mb-0 mr-2">Balance Sheet Stats</h5>
                  <span className="text-muted">If you are interested in this stock long term, look at the fundamentals of its finance. </span>
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
          <div className="card card-solid bg-success">
            <div className="card-header card-header-flex">
              <div className="d-flex flex-column justify-content-center mr-auto">
                <div className="d-flex flex-row justify-content-center">
                  <h5 className="mb-0 mr-2">CEO Compensation ELON MUSK</h5>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p>
                Salary - $36,580
              </p>
              <p>
                Option Awards - $2,283,988,504
              </p>
            </div>
          </div>
          <div className="card card-solid bg-danger">
            <div className="card-header card-header-flex">
              <div className="d-flex flex-column justify-content-center mr-auto">
                <div className="d-flex flex-row justify-content-center">
                  <h5 className="mb-0 mr-2">Fraud Score</h5>
                </div>
              </div>
            </div>
            <div className="card-body">
              <p>
                The Similarity Index quantifies the textual differences between a given company’s annual or quarterly filings on an “as disclosed” basis.
                Intuitively, firms breaking from routine phrasing and content in mandatory disclosures give clues about their future performance which eventually drive stock returns over time. This data set captures significant changes in disclosure texts in the form of low similarity scores. 
                Academic research has shown that a portfolio that shorts low similarity scores and longs high similarity scores earns non-trivial and uncorrelated returns over a period of 12-18 months.
                
              </p>
            </div>
            <Button variantColor="red" onClick={() => setIsOpen(true)}>
        Delete Customer
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Customer
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button variantColor="red" onClick={onClose} ml={3}>
              Delete
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
            
          
        
          </div>
          <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>Server Statistics</strong>
              </div>
              <div className="text-muted">Block with important Server Statistics information</div>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <General21 />
                  <General21v1 />
                </div>
                <div className="col-lg-6">
                  <General21v2 />
                  <General21v3 />
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>Indicator Reach</strong>
              </div>
              <div className="text-muted">
                ADX Direction Index. Attach this to a portfolio.
              </div>
            </div>
            <div className="card-body">
              <div className="mb-5">
                <Slider marks={rangeMarks} defaultValue={rangeSlider.first} />
              </div>
              <div className="mb-4">
                <Slider range marks={rangeMarks} defaultValue={rangeSlider.second} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>Week Revenue Statistics, Billions</strong>
              </div>
              <span className="mr-2">
                <span className="kit__utils__donut kit__utils__donut--primary" />
                Stocks
              </span>
              <span className="mr-2">
                <span className="kit__utils__donut kit__utils__donut--success" />
                Simulation 
              </span>
              <span className="mr-2">
                <span className="kit__utils__donut kit__utils__donut--yellow" />
                Prediction
              </span>
            </div>
            <div className="card-body">
              <ChartistGraph
                data={weekChartistData}
                options={weekChartistOptions}
                type="Line"
                className="chart-area height-300 mt-4 chartist"
              />
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>Month Portfolio Growth, %</strong>
              </div>
              <span className="mr-2">
                <span className="kit__utils__donut kit__utils__donut--primary" />
                Income
              </span>
              <span className="mr-2">
                <span className="kit__utils__donut kit__utils__donut--success" />
                Outcome
              </span>
            </div>
            <div className="card-body">
              <ChartistGraph
                data={monthCartistData}
                options={monthChartistOptions}
                type="Bar"
                className="chart-area height-300 mt-4 chartist"
              />
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>Chat</strong>
              </div>
              <div className="text-muted">Chat with Adoba here</div>
            </div>
            <div className="card-body">
              <General14 />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="mb-4">
                <General22 />
              </div>
              <div className="kit__utils__table">
                <Table columns={tableColumns} dataSource={tableData} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>Calendar</strong>
              </div>
              <div className="text-muted">Block with important Calendar information</div>
            </div>
            <div className="card-body">
              <Calendar dateCellRender={dateCellRender} />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardBeta
