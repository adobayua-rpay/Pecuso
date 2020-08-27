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
<p></p>
<Progress type="circle" percent={100} format={()=> 'Price Target Average - $178.59 '} />
<p><Progress type="circle" percent={100} format={()=> 'Price Target High - $245 '} /></p>
<p><Progress type="circle" percent={100} format={()=> 'Price Target Low - $140 '} /></p>
<p><Progress type="circle" percent={34} format={()=> 'Number of Analyst - 34 '} /></p>


      </>
    );
  }
}

export default App