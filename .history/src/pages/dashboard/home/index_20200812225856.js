/* eslint-disable */

import React from "react";
import { Helmet } from "react-helmet";
import {  Card,Button } from "antd";

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
        
        
        <div className="col-xl-2">
          <div className="card">
              <Button type="primary">Buy</Button>

          </div>
          <div className="card">
              <Button type="primary">Sell</Button>

          </div>
        </div>
        <div className="col-xl-2">
          <div className="card">
              <Button type="primary">Tools</Button>

          </div>
          <div className="card">
              <Button type="primary">Analyze</Button>

          </div>
        </div>

        <div className="col-xl-2">
          <div className="card">
              <Button type="primary">Short</Button>

          </div>
          <div className="card">
              <Button type="primary">Option</Button>

          </div>
        </div>

        <div className="col-xl-2">
          <div className="card">
              <Button type="primary">Trigger</Button>

          </div>
          <div className="card">
              <Button type="primary">Similars</Button>

          </div>
        </div>

        <div className="col-xl-6">
          <div className="card">
              <Button type="primary">Watchlist</Button>

          </div>
          <div className="card">
              <Button type="primary">Favorite</Button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardAlpha;
