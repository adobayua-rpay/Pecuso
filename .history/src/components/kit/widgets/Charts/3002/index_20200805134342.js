import React from "react";

import { Tabs, Table } from "antd";
import C3Chart from 'react-c3js'

import Cha from './charts'


const { TabPane } = Tabs;
const colors = {
  Inflation: '#01a8fe',
  XGrowth: '#acb7bf',
  Target: '#46be8a',
  Margin: '#fb434a',
}

const colors2 = {
  primary: '#01a8fe',
  def: '#acb7bf',
  success: '#46be8a',
  danger: '#fb434a',
}

function callback(key) {
  console.log(key);
}

const dataSource = [
  {
    key: '1',
    name: 'NVIDIA',
    age: "NVDA",
    address: '17%',
  },
  {
    key: '5',
    name: 'Match Group',
    age: "MTCH",
    address: '8.76%',
  },
  {
    key: '6',
    name: 'Microsoft',
    age: "MTCH",
    address: '7.86',
  },
  {
    key: '7',
    name: 'Newmont Gold Corp',
    age: "NEM",
    address: '11.86',
  },
  {
    key: '8',
    name: 'PayPal',
    age: "NEM",
    address: '11.86',
  },
  {
    key: '9',
    name: 'Intel',
    age: "INTC",
    address: '13.86',
  },
  {
    key: '10',
    name: 'Advanced Micro Devices',
    age: "AMD",
    address: '19.86',
  },
  {
    key: '11',
    name: 'MetLife Inc',
    age: "AMD",
    address: '3.17',
  },
  {
    key: '12',
    name: 'PNC Financial',
    age: "PNC",
    address: '13.17',
  },
  {
    key: '13',
    name: 'Gilead Sciences',
    age: "GILD",
    address: '3.17',
  },
  {
    key: '2',
    name: 'Sales Force',
    age: "CRM",
    address: '7%',
  },
  {
    key: '3',
    name: 'Equiniz',
    age: "EQIX",
    address: '4%',
  },
  {
    key: '4',
    name: 'Biogen',
    age: "BIIB",
    address: '2%',
  },
];

const combination = {
  data: {
    columns: [
      ['Inflation', 30, 20, 50, 40, 60, 50, 30, 20, 50, 40, 60, 50],
      ['XGrowth', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220],
      ['Target', 300, 200, 160, 400, 250, 250, 300, 200, 160, 400, 250, 250],
      ['Margin', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220],
      ['Primary', 130, 120, 150, 140, 160, 150, 130, 120, 150, 140, 160, 150],
      ['Danger2', 90, 70, 20, 50, 60, 120, 90, 70, 20, 50, 60, 120],
    ],
    type: 'bar',
    types: {
      Success: 'spline',
      Danger: 'line',
      Danger2: 'area',
    },
    groups: [['Primary', 'Default']],
  },
  color: {
    pattern: [colors.primary, colors.def, colors.success, colors.danger, colors.danger],
  },
  grid: {
    x: {
      show: !1,
    },
    y: {
      show: !0,
    },
  },
}



const stackedBar = {
  data: {
    columns: [
      ['Primary', -30, 200, 300, 400, -150, 250, -30, 200, 300, 400, -150, 250],
      ['Default', 130, 100, -400, 100, -150, 50, 130, 100, -400, 100, -150, 50],
      ['Danger', -230, 200, 200, -300, 250, 250, -230, 200, 200, -300, 250, 250],
      ['Success', 100, -250, 150, 200, -300, -100, 100, -250, 150, 200, -300, -100],
    ],
    type: 'bar',
    groups: [['Primary', 'Default', 'Danger', 'Success']],
  },
  color: {
    pattern: [colors2.primary, colors2.def, colors2.danger, colors2.success],
  },
  bar: {
    width: {
      max: 45,
    },
  },
  grid: {
    y: {
      show: !0,
      lines: [
        {
          value: 0,
        },
      ],
    },
  },
}
const columns = [
  {
    title: 'Stock',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Ticker',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Allocation',
    dataIndex: 'address',
    key: 'address',
  },
];


const Chart3002 = () => {
  return (
    <div className="card-body overflow-hidden position-relative">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Portfolio vs SPY" key="1">
          <iframe
            is="x-frame-bypass"
            src="https://api.stockdio.com/visualization/financial/charts/v1/ComparePrices?app-key=7A455EB1CB88414CB37D2A847CC2053D&symbol=AAPL&compare=FB;MSFT&indices=SPX&conditionalVolume=false&palette=Financial-Light"
            title="viola"
            width="100%"
            position="absolute"
            height="1300"
            style={{
              position: "relative",
              left: 0,
              top: 0,
              width: "100%",
              height: "1000",
            }}
          />
        </TabPane>
        <TabPane tab="Portfolio Rebalance" key="2">
          <Cha />

          <Table dataSource={dataSource} columns={columns} />
          <strong>Portfolio Backtest Growth</strong>
          <C3Chart
            data={combination.data}
            color={combination.color}
            grid={combination.grid}
          />
          <div className="mb-5">
            <C3Chart
              data={stackedBar.data}
              color={stackedBar.colors2}
              bar={stackedBar.bar}
              grid={stackedBar.grid}
            />
          </div>
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Chart3002;
