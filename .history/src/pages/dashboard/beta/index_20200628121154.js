import React, { useState } from 'react'

import { DownOutlined } from '@ant-design/icons'
import { Slider, Calendar, Badge, Table, Dropdown, Button, Menu, Progress } from 'antd'
import ChartistGraph from 'react-chartist'
import { Helmet } from 'react-helmet'
//import General19 from 'components/kit/widgets/General/19'
import General23 from 'components/kit/widgets/General/23'
import General23v1 from 'components/kit/widgets/General/23v1'
import General24 from 'components/kit/widgets/General/24'
import General24v1 from 'components/kit/widgets/General/24v1'
import General14 from 'components/kit/widgets/General/14'
import General20 from 'components/kit/widgets/General/20'
import General20v1 from 'components/kit/widgets/General/20v1'
import General21 from 'components/kit/widgets/General/21'
import General21v1 from 'components/kit/widgets/General/21v1'
import General21v2 from 'components/kit/widgets/General/21v2'
import General21v3 from 'components/kit/widgets/General/21v3'
import General22 from 'components/kit/widgets/General/22'
import {
  rangeSlider,
  calendarData,
  weekChartistData,
  monthCartistData,
  taskTableData,
  tableData,
  progressGroup,
} from './data.json'

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

  const dropdownMenu = (
    <Menu>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  )

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
          <div className="card">
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
