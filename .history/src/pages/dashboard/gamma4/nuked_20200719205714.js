import React from "react";
import { render } from "react-dom";
import Chart from "./Chart";
import Data from "./MSFT.tsv";
import { TypeChooser } from "react-stockcharts/lib/helper";

class ChartComponent extends React.Component {
  render() {
    if (this.state == null) {
      return <div>Loading...</div>;
    }
    return (
      <TypeChooser>
        {(type) => <Chart type={type} data={Data} />}
      </TypeChooser>
    );
  }
}

render(<ChartComponent />, document.getElementById("root"));

export default ChartComponent;
