/* eslint-disable */

import React from "react";
import { Helmet } from "react-helmet";
import {  Card } from "antd";

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
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: '100%' }}
            >
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
