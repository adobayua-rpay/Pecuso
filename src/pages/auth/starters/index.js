import React from 'react'
import { Helmet } from 'react-helmet'
import Login from 'components/cleanui/system/Auth/Starters'

const SystemStarters = () => {
  return (
    <div>
      <Helmet title="Starter" />
      <Login />
    </div>
  )
}

export default SystemStarters
