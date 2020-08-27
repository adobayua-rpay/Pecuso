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
          <div className="row">
        <div className="col">
          <iframe
            is="x-frame-bypass"
            // src="https://api.stockdio.com/visualization/financial/charts/v1/Ticker?app-key=7A455EB1CB88414CB37D2A847CC2053D&symbols=ORIC;BEAM;KNDI;CLSK;MSFT;GOOG;FB;ADTX;CVNA;NUZE;FRGI;CRM;NEM;NVDA;CELH;&palette=Financial-Light&layoutType=13&onload=st_ff2d12afdb2a4641bbf345f7f23fae96"
            title="viola"
            width="400"
            pointer-events="none"
            position="absolute"
            height="65"
            style={{
              position: "relative",
              pointerEvents:"none",
              left: 0,
              top: 0,
              width: "100%",
              height: "1000",
            }}
          />
        </div>
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

        <div className="col-xl-4">
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
