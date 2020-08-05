import React from "react";
import C3Chart from "react-c3js";

const ChartsC3 = () => {
  const colors = {
    primary: "#01a8fe",
    def: "#acb7bf",
    success: "#46be8a",
    danger: "#fb434a",
    NVIDIA:"#eb5b8d",
    AMD:"#bb10e7",
    MTCH:"#a48131",
    INTC:"#cc0b94",
    CRM:"#5bca95",
    PYPL:"#34a1b0",
    XEROS:"#695601",
    BABA:"#628865",
    MET:"#90ca3f",
    NTRS:"#f38441",
    TROW:"#98ef94",
  };

  const pie = {
    data: {
      columns: [
        ["NVIDIA", 30],
        ["AMD", 13],
        ["MTCH", 8],
        ["INTC", 11],
        ["CRM", 13],
        ["PYPL", 11],
        ["XEROS", 8],
        ["BABA", 18],
        ["MET", 1],
        ["NTRS", 2],
        ["TROW", 3],

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
    <div>
      <div className="row">
        <div className="col-xl-6 col-lg-12">
          <h5 className="mb-4">
            <strong>Current Allocations</strong>
          </h5>
          <div className="mb-5">
            <C3Chart data={pie.data} color={pie.color} />
          </div>
        </div>
        <div className="col-xl-6 col-lg-12">
          <h5 className="mb-4">
            <strong>Donut Chart</strong>
          </h5>
          <div className="mb-5">
            <C3Chart
              data={donut.data}
              color={donut.color}
              donut={donut.donut}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsC3;
