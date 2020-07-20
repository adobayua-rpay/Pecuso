import React from "react";
import { render } from "react-dom";
import Chart from "./Chart";
import { getData } from "./utils";

class ChartComponent extends React.Component {
  componentDidMount() {
    getData().then((data) => {
      this.setState({ data });
    });
    async function getData() {
        const promiseMSFT = fetch(
          "https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv"
        )
          .then((response) => response.text())
          .then((data) => tsvParse(data, parseData(parseDate)));
        return promiseMSFT;
      }
  }



  render() {
    let data = getData()
    if (this.state == null) {
      return <div>Loading</div>;
    }
    return (
        
      <Chart type={"svg"} data={data} />
    );
  }
  
}


render(<ChartComponent />, document.getElementById("root"));

export default ChartComponent