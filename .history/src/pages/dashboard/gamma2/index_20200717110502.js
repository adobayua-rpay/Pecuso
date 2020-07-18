import React from 'react'
import { Helmet } from 'react-helmet'

import Chart11 from 'components/kit/widgets/Charts/11'


const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Office',
    dataIndex: 'office',
    key: 'office',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Salary',
    dataIndex: 'salary',
    key: 'salary',
    sorter: (a, b) => a.salary - b.salary,
  },
]

const DashboardGamma2 = () => {
  return (
    <div>
      <Helmet title="Portfolio Starter" />
      <div className="cui__utils__heading">
        <strong>Get Started with your portfolio!</strong>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <Chart11 />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardGamma2
