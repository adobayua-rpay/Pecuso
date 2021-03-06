import React from "react";

import { Tabs } from "antd";

import Iframe from 'react-iframe'


const { TabPane } = Tabs;

const Chart3002 = () => {
  

  return (
    <div className="card-body overflow-hidden position-relative">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
        <Iframe url="https://www.google.com"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Chart3002;
