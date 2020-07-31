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
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button type="primary">Back Home</Button>}
      />
      ,
    </div>
  );
};

export default SystemStarters;
