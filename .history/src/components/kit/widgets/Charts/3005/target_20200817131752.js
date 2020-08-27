/* eslint-disable */

import React from 'react';

import { Collapse,Progress } from 'antd';



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
<Progress type="circle" percent={75} format={percent => `${percent}`} />

<Progress type="circle" percent={100} format={()=> 'Average - $178.59 '} />
<Progress type="circle" percent={100} format={()=> 'High - $245 '} />
<Progress type="circle" percent={100} format={()=> ' Low - $140 '} />
<Progress type="circle" percent={34} format={()=> 'Analysts - 34 '} />


      </>
    );
  }
}

export default App