import React from "react";
import Sliders from '@material-ui/core/Slider';

import {
  Form,
  Select,
  InputNumber,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  DatePicker,
  Row,
  Col,
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";

const { Option, OptGroup } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const { RangePicker } = DatePicker;

function handleChange(value) {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
}

//   function onChange(date, dateString) {

//     // console.log(date, dateString);
//     const dates = date
//     const dateStrings = dateString
//     dates.

//   }

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const Formuno = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  //   function onOk(value) {
  //     console.log('onOk: ', value);
  //   }

  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        "input-number": 3,
        "checkbox-group": ["A", "B"],
        rate: 3.5,
      }}
    >
      <Form.Item
        name="select"
        label="Portfolio Strategy"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please select your country!",
          },
        ]}
      >
        <Select placeholder="Please select portfolio strategy">
          <Option value="Autonomous">Autonomous</Option>
          <Option value="Pecus">Pecus Managed</Option>
          <Option value="User">User Managed</Option>
          <Option value="usa">Pecus + User Hybrid</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="timeline"
        label="Portfolio Timeline"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please select your country!",
          },
        ]}
      >
        <RangePicker />
      </Form.Item>
      <Form.Item name="payment" label="Payment method" rules={[{required:true, message:"You must select a payment method"}]}>
        <Select
          defaultValue="Visa"
          style={{ width: 200 }}
          onChange={handleChange}
        >
          <OptGroup label="Credit Card">
            <Option value="amex">Amex</Option>
            <Option value="discover">Discover</Option>
          </OptGroup>
          <OptGroup label="Debit Card">
            <Option value="Yiminghe">MasterCard</Option>
            <Option value="Yiminghe">Visa</Option>
          </OptGroup>
          <OptGroup label="ACH">
            <Option value="Yiminghe">ACH (1-3 days)</Option>
            <Option value="Yiminghe">Wire</Option>
            <Option value="Yiminghe">Cheque</Option>
          </OptGroup>
          <OptGroup label="Others">
            <Option value="Yiminghe">Cash</Option>
            <Option value="Yiminghe">Bitcoin</Option>
            <Option value="Yiminghe">Ethereum</Option>
          </OptGroup>
        </Select>
      </Form.Item>

      <Form.Item
        name="portfoliotarget"
        label="Portfolio Target"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please select your portfolio target",
          },
        ]}
      >
        <Select placeholder="Please select your portfolio target">
          <Option value="china">Retirement</Option>
          <Option value="usa">Savings</Option>
          <Option value="usa">Student Loans</Option>
          <Option value="usa">Mortgage</Option>
          <Option value="usa">Capital</Option>
        </Select>
      </Form.Item>



      <Form.Item label="InputNumber">
        <Form.Item name="input-number" noStyle>
          <InputNumber min={1} max={10} />
        </Form.Item>
        <span className="ant-form-text"> machines</span>
      </Form.Item>



      <Form.Item name="slider" label="Portfolio Starting Balance (Paper $)">
        <Slider
          marks={{
            0: "100,000",
            20: "$200,000",
            40: "400,000",
            60: "600,000",
            80: "800,000",
            100: "1,000,000",
          }}
        />
      </Form.Item>




      <Form.Item name="riskslider" label="Adjust Portfolio Risk">
        <Slider 
          defaultValue={0} 
          tooltipVisible 
        />
       
        
      </Form.Item>

      <Form.Item name="checkbox-group" label="Risk Threshold">
        <Checkbox.Group>
          <Row>
            <Col span={8}>
              <Checkbox
                value="Low"
                style={{
                  lineHeight: "32px",
                }}
              >
                A
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="Medium"
                style={{
                  lineHeight: "32px",
                }}
                disabled
              >
                B
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="Levelled"
                style={{
                  lineHeight: "32px",
                }}
              >
                C
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="High"
                style={{
                  lineHeight: "32px",
                }}
              >
                D
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="High Balanced"
                style={{
                  lineHeight: "32px",
                }}
              >
                E
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>

      <Form.Item name="rate" label="Rate">
        <Rate />
      </Form.Item>

      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="longgggggggggggggggggggggggggggggggggg"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button>
            <UploadOutlined /> Click to upload
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item label="Dragger">
        <Form.Item
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload.
            </p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          span: 12,
          offset: 6,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Formuno;
