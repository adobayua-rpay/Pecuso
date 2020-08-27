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
