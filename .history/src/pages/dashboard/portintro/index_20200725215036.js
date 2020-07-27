import React from 'react'
import { Helmet } from 'react-helmet'
import { Tabs } from 'antd';
import Listed from './list'

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
              <Listed />
            </TabPane>
            <TabPane tab="Exposure" key="2">
              <Listed />
            </TabPane>
            <TabPane tab="Metrics" key="3">
              Metrics
            </TabPane>
            <TabPane tab="Annual Returns" key="4">
              Annual Returns
            </TabPane>
            <TabPane tab="Monthly Returns" key="5">
              Monthly Returns
            </TabPane>
            <TabPane tab="Drawdowns" key="6">
              Drawdowns
            </TabPane>
            <TabPane tab="Aseets" key="7">
              Aseets
            </TabPane>
          </Tabs>


          
        </div>
      </div>



    </div>
    
  )
}

export default DashboardGamma2
