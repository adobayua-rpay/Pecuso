/* eslint-disable */
import React from 'react'
import { List, Avatar, Typography } from 'antd'

const dataList = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
]

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
]

class AntdListExample extends React.Component {
  render() {
    return (
      <div>
        <h5 className="mb-3">
          <strong>Portfolio Allocations</strong>
        </h5>
        <div className="mb-5">
          <List
            header={<div>Header</div>}
            footer={<div>Footer</div>}
            bordered
            dataSource={dataList}
            renderItem={item => (
              <List.Item>
                <Typography.Text code>[#]</Typography.Text> {item}
              </List.Item>
            )}
          />
        </div>
       
           
      </div>
    )
  }
}

export default AntdListExample
