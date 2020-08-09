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
import General18v1 from "components/kit/widgets/General/18v1";
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
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Office",
    dataIndex: "office",
    key: "office",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Salary",
    dataIndex: "salary",
    key: "salary",
    sorter: (a, b) => a.salary - b.salary,
  },
];

const DashboardAlpha = () => {
  return (
    <div>
      <Helmet title="Dashboard: Analytics" />
      <div className="cui__utils__heading">
        <strong>Welcome Adoba</strong>
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
            <Chart11v1 />
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card">
            <Chart11v2 />
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card">
            <Chart11v3 />
          </div>
        </div>
      </div>

      <div className="cui__utils__heading">
        <strong>Portfolio Ticker</strong>
      </div>
      <div className="row">
        <div className="col">
          <iframe
            is="x-frame-bypass"
            src="https://api.stockdio.com/visualization/financial/charts/v1/ComparePrices?app-key=7A455EB1CB88414CB37D2A847CC2053D&symbol=SPY&compare=NVDA;MSFT;ADBE;MSFT;QCOM;CRM;ADSK;FITBI;AMTD&indices=SPX&conditionalVolume=false&motif=Wireframe&palette=Aurora&title=Portfolio%20vs%20SPY&grayscaleLogo=true&animate=true"
            title="viola"
            width="100%"
            position="absolute"
            height="1300"
            style={{
              position: "relative",
              left: 0,
              top: 0,
              width: "100%",
              height: "1000",
            }}
          />
        </div>
      </div>

      <div className="cui__utils__heading">
        <strong>Portfolio Charts</strong>
      </div>
      <div className="row">
        <div className="col">
          <Chart3002 />
        </div>
      </div>

      <div className="cui__utils__heading">
        <strong>Last Month Statistics</strong>
      </div>
      <div className="row">
        <div className="col-xl-3 col-lg-6">
          <div className="card">
            <div className="card-body">
              <Chart3001 />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card">
            <div className="card-body">
              <Chart4v2 />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card">
            <div className="card-body">
              <Chart4v1 />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card">
            <div className="card-body">
              <Chart4v2 />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card">
            <div className="card-body">
              <Chart4v3 />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card">
            <div className="card-body">
              <Chart4v6 />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card">
            <div className="card-body">
              <Chart4v4 />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>Recently Stock Purchases</strong>
              </div>
              <div className="text-muted">
                Block with important Recently Referrals information
              </div>
            </div>
            <div className="card-body">
              <div className="kit__utils__table">
                <Table
                  columns={tableColumns}
                  dataSource={tableData}
                  pagination={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cui__utils__heading mb-3">
        <strong>Your Cards (3)</strong>
        <Button className="ml-3">View All</Button>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <General17 />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <General17v1 />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <General17v2 />
          </div>
        </div>
      </div>
      <div className="cui__utils__heading mb-3">
        <strong>Your Accounts (6)</strong>
        <Button className="ml-3">View All</Button>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <General18 />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <General18v1 />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <General18v1 />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <General18 />
          </div>
        </div>
      </div>
      <div className="cui__utils__heading mb-3">
        <strong>Recent Stock Orders(267)</strong>
        <Button className="ml-3">View All</Button>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <General6 />
          </div>
          <div className="card">
            <General6v1 />
          </div>
          <div className="card">
            <General6 />
          </div>
          <div className="card">
            <General6v1 />
          </div>
          <div className="text-center pb-5">
            <Button type="primary" className="width-200" loading>
              Load More...
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAlpha;
