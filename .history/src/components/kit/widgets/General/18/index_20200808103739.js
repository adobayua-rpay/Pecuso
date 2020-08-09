import React from 'react'
import { green } from '@material-ui/core/colors'

const General18 = () => {
  return (
    <div>
      <div className="py-3 px-4">
        <div className="d-flex flex-wrap-reverse align-items-center pb-3">
          <div className="mr-auto">
            <div className="text-uppercase font-weight-bold font-size-24 text-dark">
              Retirement Pod
            </div>
            <div className="font-size-18">$2,156.78</div>
          </div>
          <div className="flex-shrink-0 font-size-36 text-gray-4 pl-1">
            <i className="fe fe-server" />
          </div>
        </div>
        <div className="font-italic font-size-14 text-center border-top pt-3">
          Current Profit / Loss: $187,291
        </div>
        <div className="font-italic font-size-14 text-center border-top pt-3" style={{color:green}}>
          Portfolio Value :  $2,801,219
        </div>

      </div>
    </div>
  )
}

export default General18