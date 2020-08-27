/* eslint-disable */

import React from 'react';

import { Collapse,Button , Typography} from 'antd';
const{Text, Link} = Typography


const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


const operatingincome = 'Operating income is an accounting figure that measures the amount of profit realized from a business operations, after deducting operating expenses such as wages, depreciation and cost of goods sold (COGS).Operating income—also called income from operations—takes a companys gross income, which is equivalent to total revenue minus COGS, and subtracts all operating expenses. A businesss operating expenses are costs incurred from normal operating activities and include items such as office supplies and utilities.';

  class App extends React.Component {
 
  render() {
    return (
      <>
  <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="Report Date" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="Gross Profit" key="2">
      <p>{text}</p>
      <p>
          <Button type="link">About Gross Profit</Button>
      </p>
    </Panel>
    <Panel header="Cost of Revenue" key="3">
      <p>{text}</p>
      <Button type="link">About Cost of Revenue</Button>
      <p><Text type="primary">1 out of 297 (Tech Stocks)</Text></p>
      <p><Text type="primary">1 out of 4,8231 (Total Stocks)</Text></p>


    </Panel>
    <Panel header="Operating Revenue" key="3" disabled>
      <p>{text}</p>
      <Button type="link">About Operating Revenue</Button>

    </Panel>
    <Panel header="Total Revenue" key="4">
      <p>{text}</p>
      <Button type="link">About Total Revenue</Button>

    </Panel>
    <Panel header="Operating Income" key="5">
      <p>{operatingincome}</p>
      <Button type="link">About Operating Income</Button>

    </Panel>
    <Panel header="Total Revenue" key="6">
      <p>{text}</p>
    </Panel>
    <Panel header="Operating Income" key="7">
      <p>{text}</p>
    </Panel>
    <Panel header="Net Income" key="8">
      <p>{text}</p>
      <Button type="link">About Net Income</Button>

    </Panel>
    <Panel header="Research and Development" key="9">
      <p>{text}</p>
      <Button type="link">About Research and Development</Button>

    </Panel>
    <Panel header="Current Assets" key="10">
      <p>{text}</p>
      <Button type="link">About Current Assets</Button>

    </Panel>
    <Panel header="Total Assets" key="11">
      <p>{text}</p>
      <Button type="link">About Total Assets</Button>

    </Panel>
    <Panel header="Total Liabilities" key="12">
      <p>{text}</p>
      <Button type="link">About Total Liabilities</Button>

    </Panel>
    <Panel header="Current Cash" key="13">
      <p>{text}</p>
      <Button type="link">About Current Cash</Button>

    </Panel>
    <Panel header="Current Debt" key="14">
      <p>{text}</p>
      <Button type="link">About Current Debt</Button>

    </Panel>
    <Panel header="Short Term Debt" key="15">
      <p>{text}</p>
      <Button type="link">About Short Term Debt</Button>

    </Panel>
    <Panel header="Long Term Debt" key="16">
      <p>{text}</p>
      <Button type="link">About Long Term Debt</Button>

    </Panel>
    <Panel header="Total Cash" key="17">
      <p>{text}</p>
      <Button type="link">About Total Cash</Button>

    </Panel>
    <Panel header="Total Debt" key="18">
      <p>{text}</p>
      <Button type="link">About Total Debt</Button>

    </Panel>
    <Panel header="Shareholder Equity" key="19">
      <p>{text}</p>
      <Button type="link">About Shareholder Equity</Button>

    </Panel>
    <Panel header="Cash Change" key="20">
      <p>{text}</p>
      <Button type="link">About Cash Change</Button>

    </Panel>
    <Panel header="Cash Flow" key="21">
      <p>{text}</p>
      <Button type="link">About Cash Flow</Button>

    </Panel>
  </Collapse>

      </>
    );
  }
}

export default App