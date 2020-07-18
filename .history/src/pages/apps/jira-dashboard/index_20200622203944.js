import React from 'react'
import { Helmet } from 'react-helmet'
import { Menu, Dropdown } from 'antd'

import General1 from 'components/kit/widgets/General/1'
import General6 from 'components/kit/widgets/General/6'
import General6v1 from 'components/kit/widgets/General/6v1'
import List11 from 'components/kit/widgets/Lists/11'
import Table1 from 'components/kit/widgets/Tables/1'

const dropdownMenu = (
  <Menu>
    <Menu.Item>
      <a href="#" onClick={e => e.preventDefault()}>
        Action
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#" onClick={e => e.preventDefault()}>
        Another action
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#" onClick={e => e.preventDefault()}>
        Something else here
      </a>
    </Menu.Item>
    <div className="dropdown-divider" />
    <Menu.Item>
      <a href="#" onClick={e => e.preventDefault()}>
        Separated link
      </a>
    </Menu.Item>
  </Menu>
)

const ExtraAppsJiraDashboard = () => {
  return (
    <div>
      <Helmet title="Jira Dashboard" />
      <div className="row">
        <div className="col-lg-6">
          <div className="card kit__utils__cardMarked kit__utils__cardMarked--primary">
            <div className="card-header card-header-flex">
              <div className="d-flex flex-column justify-content-center mr-auto">
                <h5 className="mb-0">Introduction</h5>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <Dropdown overlay={dropdownMenu} placement="bottomRight">
                  <button type="button" className="btn btn-light">
                    <i className="fe fe-more-vertical" />
                  </button>
                </Dropdown>
              </div>
            </div>
            <div className="card-body">
              <h3 className="text-dark font-size-18 font-weight-bold mb-3">Exponential Decay</h3>
              <p>
                Dont understand how this algo trigger works? No Problem.
                <a href="#" onClick={e => e.preventDefault()} className="text-blue">
                  Jira User&apos;s Guide.
                </a>
              </p>
              <p>
                The Fisher Transform is a technical indicator created by J.F. Ehlers that converts prices into a Gaussian normal distribution. In this way, the indicator highlights when prices have moved to an extreme, based on recent prices. This may help in spotting turning points in the price of an asset. It also helps show the trend and isolate the price waves within a trend. 
              </p>
            </div>
          </div>
          <div className="card kit__utils__cardMarked kit__utils__cardMarked--primary">
            <div className="card-header card-header-flex">
              <div className="d-flex flex-column justify-content-center mr-auto">
                <h5 className="mb-0">Revenue</h5>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <Dropdown overlay={dropdownMenu} placement="bottomRight">
                  <button type="button" className="btn btn-light">
                    <i className="fe fe-more-vertical" />
                  </button>
                </Dropdown>
              </div>
            </div>
            <div className="card-body">
              <General1 />
            </div>
          </div>
          <div className="card">
            <General6 />
          </div>
          <div className="card">
            <General6v1 />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card kit__utils__cardMarked kit__utils__cardMarked--primary">
            <div className="card-header card-header-flex">
              <div className="d-flex flex-column justify-content-center mr-auto">
                <h5 className="mb-0">Introduction</h5>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <Dropdown overlay={dropdownMenu} placement="bottomRight">
                  <button type="button" className="btn btn-light">
                    <i className="fe fe-more-vertical" />
                  </button>
                </Dropdown>
              </div>
            </div>
            <div className="card-body">
              <p>
                You currently have no{' '}
                <a href="#" onClick={e => e.preventDefault()} className="text-blue">
                  issues
                </a>{' '}
                assigned to you. Enjoy your day!
              </p>
            </div>
          </div>
          <div className="card kit__utils__cardMarked kit__utils__cardMarked--primary">
            <div className="card-header card-header-flex">
              <div className="d-flex flex-column justify-content-center mr-auto">
                <h5 className="mb-0">Activity Stream</h5>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <Dropdown overlay={dropdownMenu} placement="bottomRight">
                  <button type="button" className="btn btn-light">
                    <i className="fe fe-more-vertical" />
                  </button>
                </Dropdown>
              </div>
            </div>
            <div className="card-body">
              <List11 />
            </div>
          </div>
          <div className="card kit__utils__cardMarked kit__utils__cardMarked--primary">
            <div className="card-header card-header-flex">
              <div className="d-flex flex-column justify-content-center mr-auto">
                <h5 className="mb-0">Statistics</h5>
              </div>
              <div className="d-flex flex-column justify-content-center">
                <Dropdown overlay={dropdownMenu} placement="bottomRight">
                  <button type="button" className="btn btn-light">
                    <i className="fe fe-more-vertical" />
                  </button>
                </Dropdown>
              </div>
            </div>
            <div className="card-body">
              <Table1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExtraAppsJiraDashboard
