import React from "react";
import C3Chart from "react-c3js";

const ChartsC3 = () => {
  const colors = {
    Tech: "#01a8fe",
    HealthCare: "#acb7bf",
    FinancialServices: "#46be8a",
    Conglomerate: "#fb434a",
    RealEstate: "#6e5026",
    ConsumerStaples: "#9627b2",
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
        [colors.NVIDIA, 30],
        [colors.AMD, 13],
        [colors.MTCH, 8],
        [colors.INTC, 11],
        [colors.CRM, 13],
        [colors.PYPL, 11],
        [colors.XEROX, 8],
        [colors.BABA, 18],
        [colors.MET, 1],
        [colors.NTRS, 2],
        [colors.ROW, 3],

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
        [colors.Tech, 30],
        [colors.HealthCare, 120],
        [colors.FinancialServices, 120],
        ["ConsumerStaples", 120],
        ["Conglomerate", 120],
        ["RealEstate", 120],
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
            <strong>Industry Allocations</strong>
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
