import React from 'react'
import { Helmet } from 'react-helmet'
import { Result, Button } from 'antd';

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
        <strong>Lets get started creating your portfolio!</strong>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="mb-4">
            <strong>Portfolio Brackin</strong>
          </h5>
          <Result
            status="success"
            title="Successfully Purchased Cloud Server ECS!"
            subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
            extra={[
              <Button type="primary" key="console">
                Go Console
              </Button>,
              <Button key="buy">Buy Again</Button>,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardGamma2;
