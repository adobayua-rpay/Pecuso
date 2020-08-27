/* eslint-disable */

import React from 'react';

import { Collapse } from 'antd';



const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;



  class App extends React.Component {
 
  render() {
    return (
      <>
  <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="Beta" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="Total Cash" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="Current Debt" key="3" disabled>
      <p>{text}</p>
    </Panel>
    <Panel header="Revenue" key="3" disabled>
      <p>{text}</p>
    </Panel>
    <Panel header="Gross Profit" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="EBITDA" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="Revenue Per Share" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="Revenue Per Employee" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="Debt To Equity" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="Profit To Margin" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="Enterprise Value" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="Enterprise Value To Revenue" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="Price To Sales" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="Price To Book" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="Forward PE Ratio" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="PEG Ratio" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="PE High" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="PE Low" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="Put Call Ratio" key="2">
      <p>{text}</p>
    </Panel>
  </Collapse>

      </>
    );
  }
}

export default App