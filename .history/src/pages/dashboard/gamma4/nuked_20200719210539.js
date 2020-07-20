import React from "react";
import { render } from "react-dom";
import Chart from "./Chart";
import { getData } from "./utils";



async function getData() {
    const promiseMSFT = fetch(
      "https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv"
    )
      .then((response) => response.text())
      .then((data) => tsvParse(data, parseData(parseDate)));
    return promiseMSFT;
  }

class ChartComponent extends React.Component {
  componentDidMount() {
    getData().then((data) => {
      this.setState({ data });
    });
  }
  render() {
    if (this.state == null) {
      return <div>Loading...</div>;
    }
    return (

<Chart type={"svg"} data={getData} />

    );
  }
}

render(<ChartComponent />, document.getElementById("root"));


export default ChartComponent;
