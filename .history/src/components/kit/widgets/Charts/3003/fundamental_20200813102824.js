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
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
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
        //   description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
);
    }
    
export default Fundamental