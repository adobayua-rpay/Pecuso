/* eslint-disable */


import React from "react";
import { Helmet } from "react-helmet";
import { Button, Table } from "antd";
import Chart4v1 from "components/kit/widgets/Charts/4v1";
import Chart4v2 from "components/kit/widgets/Charts/4v2";
import Chart4v3 from "components/kit/widgets/Charts/4v3";
import Chart4v4 from "components/kit/widgets/Charts/4v4";
import Chart4v6 from "components/kit/widgets/Charts/4v6";
import Chart11 from "components/kit/widgets/Charts/11";
import Chart11v3 from "components/kit/widgets/Charts/11v3";

import Chart3000 from "components/kit/widgets/Charts/3000";
import Chart3001 from "components/kit/widgets/Charts/3001";
import Chart3002 from "components/kit/widgets/Charts/3002";
import Chart11v1 from "components/kit/widgets/Charts/11v1";
import Chart11v2 from "components/kit/widgets/Charts/11v2";
import General17 from "components/kit/widgets/General/17";
import General17v1 from "components/kit/widgets/General/17v1";
import General17v2 from "components/kit/widgets/General/17v2";
import General18 from "components/kit/widgets/General/18";
import DrawerForm from "components/kit/widgets/General/200";
import General18v1 from "components/kit/widgets/General/18v1";
import General18v3 from "components/kit/widgets/General/18v3";
import General6 from "components/kit/widgets/General/6";
import General6v1 from "components/kit/widgets/General/6v1";
import { tableData } from "./data.json";



const tableColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Amount",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Industry",
    dataIndex: "office",
    key: "office",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Profit / Loss",
    dataIndex: "salary",
    key: "salary",
    sorter: (a, b) => a.salary - b.salary,
  },
];

export const Drawed = () => {
  return (
    <div>
      <DrawerForm />
    </div>

  )
}




const DashboardAlpha = () => {
  return (
    <div>
      <Helmet title="Dashboard: Analytics" />
      <div className="cui__utils__heading">
        <strong>Welcome Dobez [Paper Trading Account]</strong>
      </div>
      <div className="row">
        <div className="col-xl-4">
          <div className="card">
            <Chart11 />
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card">
            <Chart3000 />
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card">
          <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAlpha;
