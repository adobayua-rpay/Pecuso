import React from "react";
import { Helmet } from "react-helmet";
import { Button, Table,Drawer, Form, Col, Row, Input, Select, DatePicker } from "antd";
import Chart4v1 from "components/kit/widgets/Charts/4v1";
import Chart4v2 from "components/kit/widgets/Charts/4v2";
import Chart4v3 from "components/kit/widgets/Charts/4v3";
import Chart4v4 from "components/kit/widgets/Charts/4v4";
import Chart4v6 from "components/kit/widgets/Charts/4v6";
import Chart11 from "components/kit/widgets/Charts/11";
import Chart11v3 from "components/kit/widgets/Charts/11v3";

import Chart3000 from "components/kit/widgets/Charts/3000";
import Chart3001 from "components/kit/widgets/Charts/3001";
import Chart3002 from "components/kit/widgets/Charts/3002";

import Chart11v1 from "components/kit/widgets/Charts/11v1";
import Chart11v2 from "components/kit/widgets/Charts/11v2";
import General17 from "components/kit/widgets/General/17";
import General17v1 from "components/kit/widgets/General/17v1";
import General17v2 from "components/kit/widgets/General/17v2";
import General18 from "components/kit/widgets/General/18";
import DrawerForm from "components/kit/widgets/General/200";
import General18v1 from "components/kit/widgets/General/18v1";
import General18v3 from "components/kit/widgets/General/18v3";
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';

import General6 from "components/kit/widgets/General/6";
import General6v1 from "components/kit/widgets/General/6v1";
import { tableData } from "./data.json";

const tableColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Amount",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Industry",
    dataIndex: "office",
    key: "office",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Profit / Loss",
    dataIndex: "salary",
    key: "salary",
    sorter: (a, b) => a.salary - b.salary,
  },
];

const drawer = () => {
  return (
    <div>
              <Drawer
          title="Create a new account"
          width={720}
          onClose={closed}
          visible={open}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={this.closed} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.closed} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="url"
                  label="Url"
                  rules={[{ required: true, message: 'Please enter url' }]}
                >
                  <Input
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="owner"
                  label="Owner"
                  rules={[{ required: true, message: 'Please select an owner' }]}
                >
                  <Select placeholder="Please select an owner">
                    <Option value="xiao">Xiaoxiao Fu</Option>
                    <Option value="mao">Maomao Zhou</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[{ required: true, message: 'Please choose the type' }]}
                >
                  <Select placeholder="Please choose the type">
                    <Option value="private">Private</Option>
                    <Option value="public">Public</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="approver"
                  label="Approver"
                  rules={[{ required: true, message: 'Please choose the approver' }]}
                >
                  <Select placeholder="Please choose the approver">
                    <Option value="jack">Jack Ma</Option>
                    <Option value="tom">Tom Liu</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="dateTime"
                  label="DateTime"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                >
                  <DatePicker.RangePicker
                    style={{ width: '100%' }}
                    getPopupContainer={trigger => trigger.parentElement}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: 'please enter url description',
                    },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="please enter url description" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>

    </div>
   
  )
}


const DashboardAlpha = () => {
  return (
    <div>
      <Helmet title="Dashboard: Analytics" />
      <div className="cui__utils__heading">
        <strong>Welcome Dobez [Paper Trading Account]</strong>
      </div>
      <div className="row">
        <div className="col-xl-4">
          <div className="card">
            <Chart11 />
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card">
            <Chart3000 />
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card">
            <Chart11v1 />
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card">
            <Chart11v2 />
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card">
            <Chart11v3 />
          </div>
        </div>
      </div>

      <div className="cui__utils__heading">
        <strong>Portfolio Ticker</strong>
      </div>
      <div className="row">
        <div className="col">
          <iframe
            is="x-frame-bypass"
            // src="https://api.stockdio.com/visualization/financial/charts/v1/Ticker?app-key=7A455EB1CB88414CB37D2A847CC2053D&symbols=ORIC;BEAM;KNDI;CLSK;MSFT;GOOG;FB;ADTX;CVNA;NUZE;FRGI;CRM;NEM;NVDA;CELH;&palette=Financial-Light&layoutType=13&onload=st_ff2d12afdb2a4641bbf345f7f23fae96"
            title="viola"
            width="100%"
            pointer-events="none"
            position="absolute"
            height="65"
            style={{
              position: "relative",
              pointerEvents:"none",
              left: 0,
              top: 0,
              width: "100%",
              height: "1000",
            }}
          />
        </div>
      </div>

      <div className="cui__utils__heading">
        <strong>Portfolio Charts</strong>
      </div>
      <div className="row">
        <div className="col">
          <Chart3002 />
        </div>
      </div>

      <div className="cui__utils__heading">
        <strong>Last Month Statistics</strong>
      </div>
      <div className="row">
        <div className="col-xl-3 col-lg-6">
          <div className="card">
            <div className="card-body">
              <Chart3001 />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card">
            <div className="card-body">
              <Chart4v2 />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card">
            <div className="card-body">
              <Chart4v1 />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card">
            <div className="card-body">
              <Chart4v2 />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card">
            <div className="card-body">
              <Chart4v3 />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card">
            <div className="card-body">
              <Chart4v6 />
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6">
          <div className="card">
            <div className="card-body">
              <Chart4v4 />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <div className="cui__utils__heading mb-0">
                <strong>Recent Portfolio Additions</strong>
              </div>
              <div className="text-muted">
                Recent Purchases made to your portfolio
              </div>
            </div>
            <div className="card-body">
              <div className="kit__utils__table">
                <Table
                  columns={tableColumns}
                  dataSource={tableData}
                  pagination={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cui__utils__heading mb-3">
        <strong>Stock Picks of the day (3)</strong>
        <Button className="ml-3">View All</Button>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <General17 />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <General17v1 />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <General17v2 />
          </div>
        </div>
      </div>
      <div className="cui__utils__heading mb-3">
        <strong>Your Pods (6)</strong>
        <Button className="ml-3">Create new Pod</Button> 
        <Button onClick={drawer}>Clear filters</Button>
        <Button className="ml-3" type="primary" onClick={() => <div><DrawerForm /></div>}>
          Create new Pod
        </Button>

        

            
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <General18 />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <General18v1 />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <General18v3 />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <General18 />
          </div>
        </div>
      </div>
      <div className="cui__utils__heading mb-3">
        <strong>Recent Stock Orders(267)</strong>
        <Button className="ml-3">View All</Button>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <General6 />
          </div>
          <div className="card">
            <General6v1 />
          </div>
          <div className="card">
            <General6 />
          </div>
          <div className="card">
            <General6v1 />
          </div>
          <div className="text-center pb-5">
            <Button type="primary" className="width-200" loading>
              Load More...
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAlpha;
