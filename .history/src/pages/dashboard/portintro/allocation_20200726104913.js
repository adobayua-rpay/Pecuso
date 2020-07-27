import React from "react";
import C3Chart from "react-c3js";

const ChartsC3 = () => {
  const colors = {
    primary: "#01a8fe",
    def: "#acb7bf",
    success: "#46be8a",
    danger: "#fb434a",
  };


  const pie = {
    data: {
      columns: [
        ["Primary", 30],
        ["Success", 70],
      ],
      type: "pie",
    },
    color: {
      pattern: [colors.primary, colors.success],
    },
  };
  const donut = {
    data: {
      columns: [
        ["Danger", 30],
        ["Success", 120],
      ],
      type: "donut",
    },
    color: {
      pattern: [colors.danger, colors.success],
    },
    donut: {
      title: "Connections",
    },
  };


  return (
    <div className="row">
      <div className="col-xl-6 col-lg-12">
        <h5 className="mb-4">
          <strong>Asset Allocation</strong>
        </h5>
        <div className="mb-5">
          <C3Chart data={pie.data} color={pie.color} />
        </div>
      </div>
      <div className="col-xl-6 col-lg-12">
        <h5 className="mb-4">
          <strong>Equity Market Capitalization</strong>
        </h5>
        <div className="mb-5">
          <C3Chart data={donut.data} color={donut.color} donut={donut.donut} />
        </div>
      </div>
    </div>
  );
};

export default ChartsC3;
