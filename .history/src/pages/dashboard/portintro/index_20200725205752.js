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
        <strong>Get Started with your portfolios!</strong>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="mb-4">
            <strong>Portolio Formed</strong>
          </h5>
          <Tabs onChange={callback} type="card">
            <TabPane tab="Summary" key="1">
              Summary
            </TabPane>
            <TabPane tab="Exposure" key="2">
              Exposures
            </TabPane>
            <TabPane tab="Metrics" key="3">
              Metrics
            </TabPane>
            <TabPane tab="Metrics" key="3">
              Annual Returns
            </TabPane>
            <TabPane tab="Metrics" key="3">
              Monthly Returns
            </TabPane>
            <TabPane tab="Metrics" key="3">
              Drawdowns
            </TabPane>
            <TabPane tab="Metrics" key="3">
              Aseets
            </TabPane>
          </Tabs>


          
        </div>
      </div>



    </div>
    
  )
}

export default DashboardGamma2
