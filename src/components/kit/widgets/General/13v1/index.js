import React from 'react'
import { Menu, Dropdown } from 'antd'
import style from './style.module.scss'

const dropdownMenu = (
  <Menu>
    <Menu.Item>
      <a>Action</a>
    </Menu.Item>
    <Menu.Item>
      <a>Another action</a>
    </Menu.Item>
    <Menu.Item>
      <a>Something else here</a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a>Separated link</a>
    </Menu.Item>
  </Menu>
)

const General13v1 = () => {
  return (
    <div>
      <div
        className={`height-200 d-flex flex-column ${style.head}`}
        style={{
          backgroundImage: 'url(resources/images/content/flowers.jpg)',
        }}
      >
        <div className="card-header card-header-flex border-bottom-0">
          <div className="d-flex flex-column justify-content-center">
            <h5 className="mb-0 text-white">Basic Card</h5>
          </div>
          <div className="ml-auto d-flex flex-column justify-content-center">
            <div className="dropdown d-inline-block">
              <Dropdown overlay={dropdownMenu} placement="bottomRight">
                <button
                  type="button"
                  className="btn btn-light dropdown-toggle dropdown-toggle-noarrow"
                >
                  <i className="fe fe-more-horizontal" />
                </button>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="mt-auto mb-3">
          <div className="text-white font-size-24 font-weight-bold pl-4">Bryce Devaughn</div>
        </div>
      </div>
      <div className="card card-borderless">
        <div className="card-header border-bottom-0">
          <div className="d-flex mb-1">
            <div className="text-dark text-uppercase font-weight-bold mr-auto">Contribution YTD</div>
            <div className="text-gray-6">+60% Goal Reached</div>
          </div>
          <div className="d-flex mb-2">
            <div className="text-success font-size-24 font-weight-bold mr-auto">+3,125</div>
            <div className="text-gray-4 font-size-24">5,000</div>
          </div>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              style={{
                width: '60%',
              }}
              role="progressbar"
              aria-valuenow={60}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
        <div className="card-body pt-1">
          Bryce has contributed to 23% of your portfolio performance YTD.
        </div>
      </div>
    </div>
  )
}

export default General13v1
