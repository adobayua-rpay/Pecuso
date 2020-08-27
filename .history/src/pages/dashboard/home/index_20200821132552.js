/* eslint-disable */

import React, {Component} from "react";
import { Helmet } from "react-helmet";
import { Card, Button,Modal } from "antd";
import Cars from "./card";
import Chart3002 from "components/kit/widgets/Charts/3002";
import Chart3003 from "components/kit/widgets/Charts/3003";
import Chart3005 from "components/kit/widgets/Charts/3005";
import firebase from 'firebase/app'
import 'firebase/firestore';
import DrawerForm from "components/kit/widgets/General/Note";
import Trigger from "components/kit/widgets/General/Trigger";
import { ExclamationCircleOutlined, UpCircleTwoTone } from "@ant-design/icons";
import Pod from './pod'
import Fit from './fit'
import Buy from './buy'

if (!firebase.apps.length) {
  firebase.initializeApp({});
}
const { confirm } = Modal
const { sell } = Modal

const DashboardAlpha = () => {

  const db = firebase.firestore();

  const docRef = db.collection('users').doc('alovelace');

    docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });

  // firebase.auth().onAuthStateChanged(function(user) {
  //     if (user) {
  //       console.log('user signed in')
  //     } else {
  //       console.log("Nope")
  //     }
  //   });

React.state = {
state:[
  {visible:false}
]

}








      let stocksymbol = localStorage.getItem('stockname');
      let source = "https://api.stockdio.com/visualization/financial/charts/v1/PricesChange?app-key=7A455EB1CB88414CB37D2A847CC2053D&symbol="+stocksymbol+"&palette=Financial-Light&showLogo=Title"


        return (
      <div>
      <Helmet title="Dashboard: Analytics" />
      <div className="cui__utils__heading">
        <strong>Welcome Dobez [Paper Trading Account]</strong>
      </div>
      <div className="row">
        <div className="col-xl-4">
          <div className="card" style={{ width: '100%' }}>
            {/* <Card
              title="$AAPL"
              extra={<a href="#">About</a>}
              style={{ width: '100%' }}
            >
              <p>APPLE</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card> */}
            <Cars style={{ width: '100%' }} />
          </div>
        </div>

        <div className="col-xl-2">
          <div className="card">
            {/* <Button
              className="btn btn-success"
              style={{ width: "100%" }}
              onClick={this.showModal}
            >
              Buy
            </Button> */}
            <Buy />
          </div>
          <div className="card">
          <Button
              className="btn btn-danger"
              style={{ width: "100%" }}
              // onClick={}
            >
              Sell
            </Button>
          </div>
          <div className="row">
            <div className="col">
              <iframe
                is="x-frame-bypass"
                // src="https://api.stockdio.com/visualization/financial/charts/v1/PricesChange?app-key=7A455EB1CB88414CB37D2A847CC2053D&symbol=AAPL&palette=Financial-Light&showLogo=Title"
                src={source}
                title="viola"
                width="100%"
                position="absolute"
                height="1100"
                style={{
                  position: "relative",
                  left: 0,
                  top: 0,
                  width: "400%",
                  height: "250%",
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
            <Trigger />
          </div>
          <div className="card">
            <Button type="primary">Compare</Button>
          </div>
        </div>

        <div className="col-xl-4">
          <div className="card">
            {/* <Button type="primary">Add to Pod</Button> */}
            <Pod />

          </div>
          <div className="card">
            <Button type="primary" onClick={showFit}>See Portfolio Fit</Button>
          </div>
        </div>
      </div>
      {/* <div className="cui__utils__heading">
        <strong>Portfolio Charts</strong>
      </div>
      <div className="col">
        <Chart3003 />
      </div> */}
      <div><p></p></div>
      <div><p></p></div>

      <div className="cui__utils__heading">
        <strong>Sweet Moving</strong>
      </div>
      <div className="col">
        <Chart3005 />
      </div>


      </div>
      );
};

export default DashboardAlpha;

