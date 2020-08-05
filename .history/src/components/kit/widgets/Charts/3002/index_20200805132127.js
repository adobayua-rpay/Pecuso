import React from "react";

import { Tabs, Table } from "antd";
import Cha from './charts'

const { TabPane } = Tabs;

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

          <Table dataSource={dataSource} columns={columns} />;
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Chart3002;
