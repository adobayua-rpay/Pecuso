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

const dataSourced = [
  {
    key: '1',
    name: 'NVIDIA',
    age: "NVDA",
    address: '17%',
    category:"Technology",
    risk:"1.87%",
    return:"$1872"
  },
  {
    key: '5',
    name: 'Match Group',
    age: "MTCH",
    address: '8.76%',
    category:"Technology",
    risk:"1.87%",
    return:"$1872"
  },
  {
    key: '6',
    name: 'Microsoft',
    age: "MTCH",
    address: '7.86',
    category:"Technology",
    risk:"3.41%",
    return:"$408"
  },
  {
    key: '7',
    name: 'Newmont Gold Corp',
    age: "NEM",
    address: '11.86',
    category:"Technology",
    risk:"3.29%",
    return:"$286"
  },
  {
    key: '8',
    name: 'PayPal',
    age: "NEM",
    address: '11.86',
    category:"Technology",
    risk:"0.87%",
    return:"$762"
  },
  {
    key: '9',
    name: 'Intel',
    age: "INTC",
    address: '13.86',
    category:"Technology",
    risk:"4.91%",
    return:"$234"
  },
  {
    key: '10',
    name: 'Advanced Micro Devices',
    age: "AMD",
    address: '19.86',
    category:"Technology",
    risk:"1.87%",
    return:"$1106"
  },
  {
    key: '11',
    name: 'MetLife Inc',
    age: "AMD",
    address: '3.17',
    category:"Technology",
    risk:"2.07%",
    return:"$47"
  },
  {
    key: '12',
    name: 'PNC Financial',
    age: "PNC",
    address: '13.17',
    category:"Technology",
    risk:"2.31%",
    return:"$72"
  },
  {
    key: '13',
    name: 'Gilead Sciences',
    age: "GILD",
    address: '1.17',
    category:"Technology",
    risk:"11.97%",
    return:"$386"
  },
  {
    key: '20',
    name: 'Activision Blizzard, Inc',
    age: "ATVI",
    address: '1.17',
    category:"Technology",
    risk:"0.41%",
    return:"$287"
  },
  {
    key: '21',
    name: 'Corteva Inc',
    age: "CTVA",
    address: '2.86',
    category:"Technology",
    risk:"1.87%",
    return:"$116"
  },
  {
    key: '22',
    name: 'SVB Financial Group',
    age: "SIVB",
    address: '2.90',
    category:"Technology",
    risk:"1.87%",
    return:"$97"
  },
  {
    key: '23',
    name: 'Eastman Chemical Company',
    age: "EMN",
    address: '3.17',
    category:"Technology",
    risk:"1.87%",
    return:"$1872"
  },
  {
    key: '2',
    name: 'Sales Force',
    age: "CRM",
    address: '7%',
    category:"Technology",
    risk:"1.87%",
    return:"$1872"
  },
  {
    key: '3',
    name: 'Equiniz',
    age: "EQIX",
    address: '4%',
    category:"Technology",
    risk:"1.87%",
    return:"$1872"
  },
  {
    key: '4',
    name: 'Biogen',
    age: "BIIB",
    address: '2%',
    category:"Technology",
    risk:"1.87%",
    return:"$1872"
  },
];

const expColumn = [
  {
    title:"Ticker",
    dataIndex:'age',
    key:'age',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Weight',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Return Contribution',
    dataIndex: 'return',
    key: 'return',
  },
  {
    title: 'Risk Contribution',
    dataIndex: 'risk',
    key: 'risk',
  },

]

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

const numbers = ["January, February, March, April,"]


const stackedBar = {
  data: {
    columns: [
      ['May', -30, 200, 300, 400, -150, 250, -30, 200, 300, 400, -150, 250],
      ['June', 130, 100, -400, 100, -150, 50, 130, 100, -400, 100, -150, 50],
      ['July', -230, 200, 200, -300, 250, 250, -230, 200, 200, -300, 250, 250],
      ['August', 100, -250, 150, 200, -300, -100, 100, -250, 150, 200, -300, -100],
    ],
    type: 'bar',
    groups: [["January, February, March, April, May"]],
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
      show: numbers,
      lines: [
        {
          value: numbers
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
          <strong> Monthly Growth</strong>
          <C3Chart
            data={stackedBar.data}
            color={stackedBar.colors2}
            bar={stackedBar.bar}
            grid={stackedBar.grid}
          />
          
        </TabPane>
        <TabPane tab="Metrics" key="3">
          <Table dataSource={dataSourced} columns={expColumn} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Chart3002;
