import React from 'react'
import style from './style.module.scss'

const General17v1 = () => {
  return (
    <div>
      <div className="position-relative bg-secondary py-3 px-4 text-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)`}}>
        <div className={`${style.flag}`}>$1,021</div>
        <div className="font-size-70 pt-3 pb-w text-gray-4">
          <i className="fe fe-star" />
        </div>
        <h5 className="font-size-24 font-weight-bold mb-1">SHOP</h5>
        <div className="font-size-18 text-uppercase mb-3">Buy Signal +24%</div>
        <div className="font-weight-bold font-size-18 text-uppercase mb-4">Shopify</div>
        <div className="border-top pt-3 font-italic">Expires at 03/22</div>
      </div>
    </div>
  )
}

export default General17v1
