import React from 'react'
import style from './style.module.scss'

const General17 = () => {
  return (
    <div>
      <div className="position-relative bg-success py-3 px-4 text-center">
        <div className={`${style.flag}`}>$560,245.35</div>
        <div className="font-size-70 pt-3 pb-w text-gray-4">
          <i className="fe fe-star" />
        </div>
        <h5 className="font-size-24 font-weight-bold mb-1">Amgen Pharmaceuticals</h5>
        <div className="font-size-18 text-uppercase mb-3">Buy Signal +91%</div>
        <div className="font-weight-bold font-size-18 text-uppercase mb-4">AMGN</div>
        <div className="border-top pt-3 font-italic">Expires at 03/22</div>
      </div>
    </div>
  )
}

export default General17
