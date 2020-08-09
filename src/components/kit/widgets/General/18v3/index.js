import React from 'react'

const General18v1 = () => {
  return (
    <div>
      <div className="py-3 px-4" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1580508174046-170816f65662?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)`}}>
        <div className="d-flex flex-wrap-reverse align-items-center pb-3">
          <div className="mr-auto">
            <div className="text-uppercase font-weight-bold font-size-24 text-dark">
              Savings Pod
            </div>
            <div className="font-size-18">$4,382,136.78</div>
          </div>
          <div className="flex-shrink-0 font-size-36 text-gray-4 pl-1">
            <i className="fe fe-server" />
          </div>
        </div>
        <div className="font-italic font-size-14 text-center border-top pt-3">
          Current Profit / Loss: $,0187,291
        </div>
        <div className="font-italic font-size-14 text-center border-top pt-3" style={{color:"green"}}>
          Portfolio Value :  $6,801,219
        </div>
      </div>
    </div>
  )
}

export default General18v1
