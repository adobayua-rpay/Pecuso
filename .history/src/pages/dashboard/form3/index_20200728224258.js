import React from "react";
import { Helmet } from "react-helmet";
import { Descriptions, Badge } from 'antd';


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
            <Descriptions.Item label="Product">
              Cloud Database
            </Descriptions.Item>
            <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
            <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
            <Descriptions.Item label="Order time">
              2018-04-24 18:00:00
            </Descriptions.Item>
            <Descriptions.Item label="Usage Time" span={2}>
              2019-04-24 18:00:00
            </Descriptions.Item>
            <Descriptions.Item label="Status" span={3}>
              <Badge status="processing" text="Running" />
            </Descriptions.Item>
            <Descriptions.Item label="Negotiated Amount">
              $80.00
            </Descriptions.Item>
            <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
            <Descriptions.Item label="Official Receipts">
              $60.00
            </Descriptions.Item>
            <Descriptions.Item label="Config Info">
              Data disk type: MongoDB
              <br />
              Database version: 3.4
              <br />
              Package: dds.mongo.mid
              <br />
              Storage space: 10 GB
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
