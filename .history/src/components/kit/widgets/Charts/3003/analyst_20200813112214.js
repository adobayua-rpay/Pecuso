/* eslint-disable */

import React from "react";

import { Tabs, Table } from "antd";
import C3Chart from 'react-c3js'

import Cha from './charts'
import Form from './form'
import Fundamental from './fundamental'
import Key from './keystat'

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
    category:"Gold & Mining",
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
    category:"Real Estate",
    risk:"2.07%",
    return:"$47"
  },
  {
    key: '12',
    name: 'PNC Financial',
    age: "PNC",
    address: '13.17',
    category:"Financial Services",
    risk:"2.31%",
    return:"$72"
  },
  {
    key: '13',
    name: 'Gilead Sciences',
    age: "GILD",
    address: '1.17',
    category:"Pharmaceutical",
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
    category:"Pharmaceuticals",
    risk:"1.87%",
    return:"$116"
  },
  {
    key: '22',
    name: 'SVB Financial Group',
    age: "SIVB",
    address: '2.90',
    category:"Financial Services",
    risk:"1.87%",
    return:"$97"
  },
  {
    key: '23',
    name: 'Eastman Chemical Company',
    age: "EMN",
    address: '3.17',
    category:"Bio Technology",
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
    category:"Bio Technology",
    risk:"1.87%",
    return:"$1872"
  },
  {
    key: '4',
    name: 'Biogen',
    age: "BIIB",
    address: '2%',
    category:"Bip Technology",
    risk:"1.87%",
    return:"$1872"
  },
];

const expColumn = [
  {
    title:"Consensus Start Date",
    dataIndex:'consensusStartDate',
    key:'consensusStartDate',
  },
  {
    title: 'consensusEndDate',
    dataIndex: 'consensusEndDate',
    key: 'consensusEndDate',
  },
  {
    title: 'Buy Rating',
    dataIndex: 'ratingBuy',
    key: 'ratingBuy',
  },
  {
    title: 'Overweight Rating',
    dataIndex: 'ratingOverweight',
    key: 'ratingOverweight',
  },
  {
    title: 'Hold Rating',
    dataIndex: 'ratingHold',
    key: 'ratingHold',
  },
  {
    title: 'Underweight Rating',
    dataIndex: 'ratingUnderWeight',
    key: 'ratingUnderWeight',
  },
  {
    title: 'Sell Rating',
    dataIndex: 'ratingSell',
    key: 'ratingSell',
  },
  {
    title: 'Rating None',
    dataIndex: 'ratingNone',
    key: 'ratingNone',
  },
  {
    title: 'Scale Mark Rating',
    dataIndex: 'ratingScaleMark',
    key: 'ratingScaleMark',
  },

]




const dataSourced = [
    {
      key: '1',
      consensusStartDate: 'Consensus Start Date',
      consensusEndDate: "NVDA",
      ratingBuy: '8',
      ratingOverweight:"2",
      ratingHold:"1",
      ratingUnderWeight:"1",
      ratingSell:"1",
      ratingNone:"2",
      ratingScaleMark:"1.042857",


    },
]


const Chart3003 = () => {
  return (
    <div className="card-body overflow-hidden position-relative">
        <Table dataSource={dataSourced} columns={expColumn} />
       
    </div>
  );
};

export default Chart3003;
