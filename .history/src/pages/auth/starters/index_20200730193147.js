import React from "react";
import { Helmet } from "react-helmet";
import { Result, Button } from "antd";

const SystemStarters = () => {
  return (
    <div>
      <Helmet title="Starter" />
      <Result
        status="403"
        title="403"
        subTitle="Slow your roll buddy, I'll let you know when its accesible"
        extra={<Button type="primary">Back Home</Button>}
      />
      ,
    </div>
  );
};

export default SystemStarters;

const man = "fame";
