/* eslint-disable */

import React, {Component} from "react";
import { Helmet } from "react-helmet";
import { Card, Button,Modal } from "antd";
import Cars from "./card";
import Chart3002 from "components/kit/widgets/Charts/3002";
import Chart3003 from "components/kit/widgets/Charts/3003";
import DrawerForm from "components/kit/widgets/General/Note";
import Trigger from "components/kit/widgets/General/Trigger";
import { ExclamationCircleOutlined, UpCircleTwoTone } from "@ant-design/icons";







const DashboardAlpha = () => {

React.state = {
state:[
  {visible:false}
]

}

    function showConfirm() {


      showModal = () => {
        this.setState({
          visible:true,
        });
      }

      handleOk = e => {
        console.log(e);
        this.setState({
          visible:false
        });
      };

      handleCancel = e => {
        console.log(e);
        this.setState({
          visible:false,
        });
      }

        confirm({
          title: "Are you sure you want to purchase 25 shares of Apple??",
          icon: <ExclamationCircleOutlined />,
          content: "Apple Price : $428.21",
          onOk() {
            console.log("OK");
          },
          onCancel() {
            console.log("Cancel");
          },
        });
      }

      // state = {
      //   modal1Visible:false, 
      //   modal2Visible:false,
      // };

            
      

      function showSell() {
        confirm({
          title: "You currently do not own any Apple Stock.",
          icon: <ExclamationCircleOutlined />,
          content: "You currently do not own any Apple Stock. perhaps you want to consider shorting?",
          onOk() {
            console.log("OK");
          },
          onCancel() {
            console.log("Cancel");
          },
        });
      }

    //  function setModal1Visible(modal1Visible) {
    //     this.setState({ modal1Visible });
    //   }


    //  function set2Modal1Visible(modal1Visible) {
    //   this.setState({ modal1Visible });
    // }

      const { confirm } = Modal
      const { sell } = Modal


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
            <Button
              className="btn btn-success"
              style={{ width: "100%" }}
              onClick={showConfirm}
            >
              Buy
            </Button>
          </div>
          <div className="card">
          <Button
              className="btn btn-danger"
              style={{ width: "100%" }}
              onClick={showSell}
            >
              Sell
            </Button>
          </div>
          <div className="row">
            <div className="col">
              <iframe
                is="x-frame-bypass"
                src="https://api.stockdio.com/visualization/financial/charts/v1/PricesChange?app-key=7A455EB1CB88414CB37D2A847CC2053D&symbol=AAPL&palette=Financial-Light&showLogo=Title"
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
            <Button type="primary">Similars</Button>
          </div>
        </div>

        <div className="col-xl-4">
          <div className="card">
            {/* <Button type="primary">Add to Pod</Button> */}
            <Button type="primary" onClick={() => this.state.visible(true)}>
          Vertically centered modal dialog
        </Button>
        <Modal
          title="Vertically centered modal dialog"
          centered
          visible={state.visible}
          onOk={() => this.handleOk(false)}
          onCancel={() => this.handleCancel(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
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
