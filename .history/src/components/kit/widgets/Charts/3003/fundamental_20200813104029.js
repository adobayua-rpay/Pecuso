import React from 'react';

import { List, Avatar } from 'antd';

const data = [
  {
    title: 'Current Cash',
    description:'$25913000000'
  },
  {
    title: 'Short Term Investments',
    description:40388000000,
  },
  {
    title: 'Receivables',
    description:40388000000,
  },
  {
    title: 'Inventory',
    description:40388000000,  
},
{
    title: 'Other Current Assets',
    description:40388000000,  
},
{
    title: 'Current Assets',
    description:40388000000,  
},
{
    title: 'Long Term Investments',
    description:40388000000,  
},
{
    title: 'Property Plant Equipment',
    description:40388000000,  
},
{
    title: 'Goodwill',
    description:"Null",  
},
{
    title: 'Intangible Assets',
    description:"Null",  
},
{
    title: 'Other Assets',
    description:40388000000,
},
{
    title: 'Total Assets',
    description:40388000000,
},
{
    title: 'Accounts Payable',
    description:40388000000,
},
{
    title: 'Current Long Term Debt',
    description:40388000000,
},
{
    title: 'Other Current Liabilities',
    description:40388000000,
},
{
    title: 'Total Current Liabilities',
    description:40388000000,
},
{
    title: 'Long Term Debt',
    description:40388000000,
},
{
    title: 'Other Liabilities',
    description:40388000000,
},
{
    title: 'Total Liabilities',
    description:40388000000,
},
{
    title: 'Minority Interest',
    description:40388000000,
},
{
    title: 'Common Stock',
    description:40388000000,
},
{
    title: 'Retained Earnings',
    description:40388000000,
},
{
    title: 'Treasury Stock',
    description:"Null",
},
{
    title: 'Capital Surplus',
    description:"Null",
},
{
    title: 'Shareholder Equity',
    description:40388000000,
},
{
    title: 'Net Tangible Assets',
    description:40388000000,
},
];




const Fundamental = () => {

return(
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
          description={<a href="https://ant.design">{item.description}</a>}
        />
      </List.Item>
    )}
  />
);
    }
    
export default Fundamental