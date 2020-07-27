import { Table, Button, Space } from 'antd';
import React from 'react';


let stocks = {
  AR:"Antero",
  APA:"Apache Corporation",
  BTE:"Baytex Energy Corp", 
  BSM:"Black Stone Minerals, L.P",
  BCEI:"Bonanza Creek Energy Inc.",
  BORR:"Borr Drilling Limited", 
  MNRL:"Brigham Minerals, Inc.", 
  COG:"Cabot Oil & Gas Corporation", 
  CPE:"Callon Petroleum Company", 
  CNQ:"Canadian Natural Resources Limited", 
  CVE:"Cenovus Energy Inc", 
  CHAP:"Chaparral Energy, Inc.", 
  CHK:"Chesapeake Energy Corporation", 
  CHKR:"Chesapeake Granite Wash Trust", 
  CPK:"Chesapeake Utilities Corporation", 
  XEC:"Cimarex Energy Co", 
  CEO:"CNOOC Limited", 
  CNX: "CNX Resources Corporation", 
  CRK: "Comstock Resources, Inc.", 
  CXO: "Concho Resources Inc.", 
  CLR:"Continental Resources, Inc.", 
  CPG:"Crescent Point Energy Corporation", 
  CRT:"Cross Timbers Royalty Trust", 
  DNR:"Denbury Resources Inc.", 
  DVN:"Devon Energy Corporation", 
  DO:"Diamond Offshore Drilling, Inc.", 
  ESTE:"Earthstone Energy, Inc.", 
  ECT:"ECA Marcellus Trust I", 
  EC:"Ecopetrol S.A.", 
  ECA:"Encana Corporation", 
  ERF: "Enerplus Corporation", 
  EQT: "EQT Corporation", 
  GPRK:"Geopark Ltd", 
  HP:"Helmerich & Payne, Inc.", 
  HESM:"Hess Midstream LP", 
  HPR:"HighPoint Resources Corporation", 
  ICD:"Independence Contract Drilling, Inc.", 
  IO:"Ion Geophysical Corporation", 
  JAG:"Jagged Peak Energy Inc.", 
  LPI:"Laredo Petroleum, Inc.", 

  }
  
let randomItem1 = stocks[Math.floor(Math.random()*stocks.length)];
let randomItem2 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem3 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem4 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem5 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem6 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem7 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem8 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem9 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem10 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem11 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem12 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem13 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem14 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem15 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem16 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem17 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem18 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem19 = stocks[Math.floor(Math.random()*stocks.length)];
// var randomItem20 = stocks[Math.floor(Math.random()*stocks.length)];






const data = [
  {
    key: '1',
    name: randomItem1,
    age: 9.9,
    address: 'Tesla Inc',
  },
  {
    key: '2',
    name: randomItem2,
    age: 9.9,
    address: 'Amazon.com Inc.',
  },
  {
    key: '3',
    name: 'F',
    age: 9.9,
    address: 'Ford Motor Company',
  },
  {
    key: '4',
    name: 'ZNGA',
    age: 9.9,
    address: 'ZYNGA',
  },
  {
    key: '5',
    name: 'UBER',
    age: 9.9,
    address: 'Uber Technolgies Inc',
  },
  {
    key: '6',
    name: 'TWTR',
    age: 9.9,
    address: 'Twitter, Inc.',
  },
  
];

class Tables extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Ticker',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Allocation %',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Name',
        dataIndex: 'address',
        key: 'address',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        ellipsis: true,
      },
    ];
    return (
      <>
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={this.setAgeSort}>Sort age</Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table columns={columns} dataSource={data} onChange={this.handleChange} />
      </>
    );
  }
}

export default Tables