import React from 'react';

import { List, Avatar } from 'antd';

const data = [
  {
    title: 'Market Cap',
    description:'$25913000000'
  },
  {
    title: '52 Week High',
    description:"$40388000000",
  },
  {
    title: '52 Week Low',
    description:40388000000,
  },
  {
    title: '52 Week Change',
    description:40388000000,  
},
{
    title: 'Outstanding Shares',
    description:"$40388000000",  
},
{
    title: 'Float',
    description:"$40388000000",  
},
{
    title: '10 Day Average Volume',
    description:"$40388000000",  
},
{
    title: '30 Day Avg Volume',
    description:"$40388000000",  
},
{
    title: '50 Day Moving Average',
    description:"Null",  
},
{
    title: 'Employees',
    description:"Null",  
},
{
    title: 'TTM EPS',
    description:"$40388000000",
},
{
    title: 'TTM Dividend Rate',
    description:"$40388000000",
},
{
    title: 'Dividend Yield',
    description:"$40388000000",
},
{
    title: 'Next Dividend Date',
    description:"$40388000000",
},
{
    title: 'Next Earnings Date',
    description:"$40388000000",
},
{
    title: 'peRatio',
    description:"$40388000000",
},
{
    title: 'Beta',
    description:"$40388000000",
},
{
    title: 'Max Change Percent',
    description:"$40388000000",
},
{
    title: '5 Year Change Percent',
    description:"$40388000000",
},
{
    title: '2 Year Change Percent',
    description:40388000000,
},
{
    title: '1 Year Change Percent',
    description:"40388000000",
},
{
    title: 'Year To Date Change Percent',
    description:"$40388000000",
},
{
    title: '30 Day Change Percent',
    description:"Null",
},
{
    title: '5 Day Change Percent',
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
    style={{width:'100%'}}
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