
/* eslint-disable */

import React from 'react';

class myComponent extends React.Component {
  componentDidMount() {
    this.obj = ''
    const apiUrl = 'https://cloud.iexapis.com/stable/stock/aapl/company?token=pk_6c6a49f506644c7990b08fee0710a634';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => this.obj = data)
   //   .then((data) => console.log('This is your data', data));
   console.log('obj' + this.obj)
  }
  render() {
    console.log('obj' + this.obj)
    return <h1>{this.obj}</h1>;
    
  }
}
export default myComponent;