import React from "react"; 
import {
    Form,
    Select,
    InputNumber,
    Switch,
    Radio,
    Slider,
    Button,
    Upload,
    Rate,
    Checkbox,
    Input,
    Row,
    Col,
  } from "antd";
  import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
  
  const { Option } = Select;
  const formItemLayout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 14,
    },
  };
  
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
        <Form.Item label="Plain Text">
          <span className="ant-form-text">China</span>
        </Form.Item>
        
        <Form.Item
          label="Client First Name"
          name="username"
          rules={[
            {
              required: true,
              message: "Please select your country!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Client Last Name"
          name="username"
          rules={[
            {
              required: true,
              message: "Please select your country!",
            },
          ]}
        >
          <Input />
        </Form.Item>



        <Form.Item
          name="select"
          label="Client Country"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select your country!",
            },
          ]}
        >
          <Select placeholder="Please select a country">
            <Option value="china">China</Option>
            <Option value="usa">U.S.A</Option>
            <Option value="usa">Canada</Option>
            <Option value="usa">Poland</Option>
          </Select>
        </Form.Item>
  
        <Form.Item
          name="select-multiple"
          label="Investment Exprience"
          rules={[
            {
              required: true,
              message: "Please select your Investment Experience from the following!",
              type: "array",
            },
          ]}
        >
          <Select mode="multiple" placeholder="Please select investment experience">
            <Option value="red">Beginner</Option>
            <Option value="green">Seasoned Vet</Option>
            <Option value="blue">Ready to learn</Option>
            <Option value="blue">Robinhood</Option>
            <Option value="blue">Ally Investing</Option>
            <Option value="blue">Betterment</Option>
            <Option value="blue">Wealth Front</Option>
            <Option value="blue">M1 Finance</Option>
            <Option value="blue">Stash</Option>
            <Option value="blue">Acorns</Option>

          </Select>
        </Form.Item>
  
        <Form.Item label="InputNumber">
          <Form.Item name="input-number" noStyle>
            <InputNumber min={1} max={10} />
          </Form.Item>
          <span className="ant-form-text"> machines</span>
        </Form.Item>
  
        <Form.Item name="switch" label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
  
        <Form.Item name="slider" label="Adjust Current Income">
          <Slider
            marks={{
              0: "0",
              20: "$20,000",
              40: "40,000",
              60: "60,000",
              80: "80,000",
              100: "100,000",
            }}
          />
        </Form.Item>
  
        <Form.Item name="radio-group" label="Work Status">
          <Radio.Group>
            <Radio value="a">Student</Radio>
            <Radio value="b">Unemployed</Radio>
            <Radio value="c">Freelancer</Radio>
          </Radio.Group>
        </Form.Item>
  
        <Form.Item name="radio-button" label="Radio.Button">
          <Radio.Group>
            <Radio.Button value="a">item 1</Radio.Button>
            <Radio.Button value="b">item 2</Radio.Button>
            <Radio.Button value="c">item 3</Radio.Button>
          </Radio.Group>
        </Form.Item>
  
        <Form.Item name="checkbox-group" label="Checkbox.Group">
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox
                  value="A"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  A
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="B"
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
                  value="C"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  C
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="D"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  D
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="E"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  E
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="F"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  F
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
  
  export default Formuno
