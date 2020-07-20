import React from "react";
import { render } from "react-dom";
import { TypeChooser } from "react-stockcharts/lib/helper";
import Chart from "./chart";
import Data from "./MSFT.tsv";

class ChartComponent extends React.Component {
  render() {
    if (this.state == null) {
      return <div>Loading...</div>;
    }
    return (
      <TypeChooser>
        <Chart type="svg" data={Data} />
      </TypeChooser>
    );
  }
}

render(<ChartComponent />, document.getElementById("root"));

export default ChartComponent;
