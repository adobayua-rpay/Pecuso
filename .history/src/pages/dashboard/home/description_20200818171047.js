
/* eslint-disable */

import React from 'react';

class myComponent extends React.Component {
  componentDidMount() {
    var obj;
    const apiUrl = 'https://cloud.iexapis.com/stable/stock/aapl/company?token=pk_6c6a49f506644c7990b08fee0710a634';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => obj = data)
   //   .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>{obj}</h1>;
  }
}
export default myComponent;