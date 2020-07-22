import React from 'react'
import { Helmet } from 'react-helmet'
import { Card, Menu, Dropdown} from 'antd';
import Iframe from 'react-iframe'
import {CardSection,Stack,Text } from "@kiwicom/orbit-components/";


const { Meta } = Card;
 
const dropdownMenu = (
  <Menu>
    <Menu.Item>
      <a>Action</a>
    </Menu.Item>
    <Menu.Item>
      <a>Gross Profit</a>
    </Menu.Item>
    <Menu.Item>
      <a>Current Assets</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Total Assets</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Total Liabilities</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Current Cash</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Net Income</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Operating Expense</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Current Assets</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Total Assets</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Total Liabilities</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Current Debt</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Short Term Debt</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Total Cash</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Total Debt</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Shareholder Equity</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Cash Change</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Cash Flow</a>
    </Menu.Item>
  </Menu>
  
)

const balanceMenu = (
  <Menu>
    <Menu.Item>
      <a>Current Cash</a>
    </Menu.Item>
    <Menu.Item>
      <a>Short Term Investments</a>
    </Menu.Item>
    <Menu.Item>
      <a>Receivables</a>
    </Menu.Item>
    <Menu.Item>
      <a>Inventory</a>
    </Menu.Item>
    <Menu.Item>
      <a>Other Current Assets</a>
    </Menu.Item>
    <Menu.Item>
      <a>Current Assets</a>
    </Menu.Item>
    <Menu.Item>
      <a>Long Term Investments</a>
    </Menu.Item>
    <Menu.Item>
      <a>Property Plant Equipment</a>
    </Menu.Item>
    <Menu.Item>
      <a>Intangible Assets</a>
    </Menu.Item>
    <Menu.Item>
      <a>Other Assets</a>
    </Menu.Item>
    <Menu.Item>
      <a>Total Assets</a>
    </Menu.Item>
    <Menu.Item>
      <a>Accounts Payable</a>
    </Menu.Item>
    <Menu.Item>
      <a>Current Long Term Debt</a>
    </Menu.Item>
    <Menu.Item>
      <a>Other Current Liabilities</a>
    </Menu.Item>
    <Menu.Item>
      <a>Total Current Liabilities</a>
    </Menu.Item>
    <Menu.Item>
      <a>Long Term Debt</a>
    </Menu.Item>
    <Menu.Item>
      <a>Other Liabilities</a>
    </Menu.Item>
    <Menu.Item>
      <a>Minority Interest</a>
    </Menu.Item>
    <Menu.Item>
      <a>Total Liabilities</a>
    </Menu.Item>
    <Menu.Item>
      <a>Common Stock</a>
    </Menu.Item>
    <Menu.Item>
      <a>Retained Earnings</a>
    </Menu.Item>
    <Menu.Item>
      <a>Treasury Stock</a>
    </Menu.Item>
    <Menu.Item>
      <a>Capital Surplus</a>
    </Menu.Item>
    <Menu.Item>
      <a>Shareholder Equity</a>
    </Menu.Item>
    <Menu.Item>
      <a>Net Tangible Assets</a>
    </Menu.Item>
  </Menu>

)




const DashboardGamma2 = () => {


  return (
    <div>
      <Helmet title="Tesla Profile" />
      <div className="cui__utils__heading">
        <strong>$TSLA</strong>
      </div>
      
      
      
      <div className="row">
        <div className="card-body">
          <Card
            hoverable
            style={{ width:"15%"}}    
            cover={<img alt="example" src="https://www.biography.com/.image/t_share/MTY2MzU3Nzk2OTM2MjMwNTkx/elon_musk_royal_society.jpg" />}
          >
            <Meta title="Elon Musk" description="Tesla CEO" />
          </Card>

        </div>
          
      </div>
    </div>
    
    
  )
  }

export default DashboardGamma2

