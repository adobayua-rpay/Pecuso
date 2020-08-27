/* eslint-disable */

import React from "react";
import { Helmet } from "react-helmet";
import {  Card,Button } from "antd";
import Cars from "./card"
import Chart3002 from "components/kit/widgets/Charts/3002";
import Chart3003 from "components/kit/widgets/Charts/3003";
import DrawerForm from "components/kit/widgets/General/Note";
import { ExclamationCircleOutlined,UpCircleTwoTone  } from '@ant-design/icons';


const DashboardAlpha = () => {

    function showConfirm() {
        confirm({
          title: 'Are you sure you want to purchase 25 shares of Apple??',
          icon: <ExclamationCircleOutlined />,
          content: 'Apple Price : $428.21',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
      }
  return (
    <div>
      <Helmet title="Dashboard: Analytics" />
      <div className="cui__utils__heading">
        <strong>Welcome Dobez [Paper Trading Account]</strong>
      </div>
      <div className="row">
        <div className="col-xl-4">
          <div className="card">
            {/* <Card
              title="$AAPL"
              extra={<a href="#">About</a>}
              style={{ width: '100%' }}
            >
              <p>APPLE</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card> */}
            <Cars />
          </div>
        </div>
        
        
        <div className="col-xl-2">
          <div className="card">
          <Button className="btn btn-success" style={{ width: '100%' }} onClick={showConfirm}>Buy                
           </Button>
          </div>
          <div className="card">
              <Button type="primary">Sell</Button>

          </div>
          <div className="row">
        <div className="col">
        <iframe
            is="x-frame-bypass"
            //src="https://api.stockdio.com/visualization/financial/charts/v1/ComparePrices?app-key=7A455EB1CB88414CB37D2A847CC2053D&symbol=SPY&compare=NVDA;MSFT;ADBE;MSFT;QCOM;CRM;ADSK;FITBI;AMTD&indices=SPX&conditionalVolume=false&motif=Wireframe&palette=Aurora&title=Portfolio%20vs%20SPY&grayscaleLogo=true&animate=true"
            title="viola"
            width="100%"
            position="absolute"
            height="1300"
            style={{
              position: "relative",
              left: 0,
              top: 0,
              width: "400%",
              height: "300%",
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
              {/* <Button type="primary">Analyze</Button> */}
              <DrawerForm />

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
      <div className="cui__utils__heading">
        <strong>Portfolio Charts</strong>
      </div>
      <div className="col">
          <Chart3003 />
        </div>
    </div>
  );
};

export default DashboardAlpha;
