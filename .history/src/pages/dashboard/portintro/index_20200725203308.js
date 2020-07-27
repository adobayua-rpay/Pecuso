import React from 'react'
import { Helmet } from 'react-helmet'
import { Tabs } from 'antd';


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}





  


const DashboardGamma2 = () => {
  return (
    <div>
      <Helmet title="Portfolio Starter" script type="module" src="https://unpkg.com/x-frame-bypass" />
      <Helmet>
        <script type="module" src="https://unpkg.com/x-frame-bypass" />
        <script src="https://unpkg.com/@ungap/custom-elements-builtin" />
      </Helmet>
      <div className="cui__utils__heading">
        <strong>Get Started with your portfolio!</strong>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="mb-4">
            <strong>Portolio Form</strong>
          </h5>
          <Tabs onChange={callback} type="card">
              Content of Tab Pane 1
          </Tabs>
          
        </div>
      </div>



    </div>
    
  )
}

export default DashboardGamma2
