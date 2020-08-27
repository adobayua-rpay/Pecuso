import React from 'react';

class myComponent extends React.Component {
  componentDidMount() {
    const apiUrl = 'https://cloud.iexapis.com/stable/stock/aapl/company?token=pk_6c6a49f506644c7990b08fee0710a634';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default myComponent;