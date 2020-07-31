import React from "react";
import { Helmet } from "react-helmet";
import { Descriptions, Badge, } from 'antd';
import {
DollarCircleFilled
  } from '@ant-design/icons';


const firstname = localStorage.getItem('firstname');
const lastname = localStorage.getItem('lasttname');
const country = localStorage.getItem('country');
const tradeplatform = localStorage.getItem('tradeplatform');
const investExperience = localStorage.getItem('investmentexperience');
const broker = localStorage.getItem('broker');
const income = localStorage.getItem('income');
const recommendedincome = broker / 3 

const DashboardGamma2 = () => {
  return (
    <div>
      <Helmet
        title="Portfolio Starter"
        script
        type="module"
        src="https://unpkg.com/x-frame-bypass"
      />
      <Helmet>
        <script type="module" src="https://unpkg.com/x-frame-bypass" />
        <script src="https://unpkg.com/@ungap/custom-elements-builtin" />
      </Helmet>
      <div className="cui__utils__heading">
        <strong>
          Confirm your information, and we will get started creating your
          portfolio
        </strong>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="mb-4">
            <strong>Portfolio Brackin</strong>
          </h5>
          <Descriptions title="User Info" layout="vertical" bordered>
            <Descriptions.Item label="First Name">
              {firstname}
            </Descriptions.Item>
            <Descriptions.Item label="Last Name">{lastname}</Descriptions.Item>
            <Descriptions.Item label="Country">{country}</Descriptions.Item>
            <Descriptions.Item label="Current Trading Platform">
              {tradeplatform}
            </Descriptions.Item>
            <Descriptions.Item label="Investment Experience" span={2}>
              {investExperience}
            </Descriptions.Item>
            <Descriptions.Item label="Current Income" span={3}>
              <DollarCircleFilled />
              <Badge status="processing" text={income * 1000} />
            </Descriptions.Item>
            <Descriptions.Item label="Working Status">
              {income}
            </Descriptions.Item>
            <Descriptions.Item label="Trading License">$20.00</Descriptions.Item>
            <Descriptions.Item label="Registered Broker">
              $60.00
            </Descriptions.Item>
            <Descriptions.Item label="Client Summary">
              Data disk type: MongoDB
              <br />
              Database version: 3.4
              <br />
              Package: dds.mongo.mid
              <br />
              {recommendedincome}
              <br />
              Replication factor: 3
              <br />
              Region: East China 1<br />
            </Descriptions.Item>
          </Descriptions>
          
        </div>
      </div>
    </div>
  );
};

export default DashboardGamma2;
