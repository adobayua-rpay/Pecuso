import React from "react";

import { Tabs } from "antd";

import {
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
} from "react-timeseries-charts";

const { TabPane } = Tabs;

const Chart3002 = () => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  function callback(key) {
    console.log(key);
  }

  return (
    <div className="card-body overflow-hidden position-relative">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
          <ChartContainer timeRange={series1.timerange()} width={800}>
            <ChartRow height="200">
              <YAxis
                id="axis1"
                label="AUD"
                min={0.5}
                max={1.5}
                width="60"
                type="linear"
                format="$,.2f"
              />
              <Charts>
                <LineChart axis="axis1" series={series1} column={["aud"]} />
                <LineChart axis="axis2" series={series2} column={["euro"]} />
              </Charts>
              <YAxis
                id="axis2"
                label="Euro"
                min={0.5}
                max={1.5}
                width="80"
                type="linear"
                format="$,.2f"
              />
            </ChartRow>
          </ChartContainer>
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
