import React, { useState, useEffect } from 'react'
import { Spin, Alert, Table, Select, Tag, Radio, Input, Affix, Form, Rate,Modal,Button,Typography  } from 'antd'
import { Helmet } from 'react-helmet'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
import AntdMenuExample from 'pages/ui-kits/antd/examples/menu'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import TradeChart from './TradeChart'
import getData from './TradeChart/utils'
import styles from './style.module.scss'
import { myOpenOrdersData, marketHistoryData, orderBookBuy, orderBookSell } from './data.json'


const { Title } = Typography;
const DashboardCrypto = () => {

  const [myOpenOrdersLoading, setMyOpenOrdersLoading] = useState(false)
  const [myOpenOrdersLoaded, setMyOpenOrdersLoaded] = useState(false)
  const [myOrderHistoryLoading, setMyOrderHistoryLoading] = useState(false)
  const [myOrderHistoryLoaded, setMyOrderHistoryLoaded] = useState(false)

  const [orderType, setOrderType] = useState('buy')
  const [graphData, setGraphData] = useState(null)

  useEffect(() => {
    getData().then(data => {
      setGraphData(data)
    })
  }, [])

  const animationData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      [1, 2, 2.7, 0, 3, 5, 3, 4, 8, 10, 12, 7],
      [0, 1.2, 2, 7, 2.5, 9, 5, 8, 9, 11, 14, 4],
      [10, 9, 8, 6.5, 6.8, 6, 5.4, 5.3, 4.5, 4.4, 3, 2.8],
    ],
  }

  function showConfirm() {
    confirm({
      title: 'Are you sure you want to purchase 25 shares of Apple??',
      icon: <ExclamationCircleOutlined />,
      content: 'Apple Price : $398.21',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const { confirm } = Modal

  const smilData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    series: [
      [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
      [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
      [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
      [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3],
    ],
  }
  
  const smilOptions = {
    low: 0,
    plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
    seq: 0,
  }
  
  const smilListener = {
    created() {
      smilOptions.seq = 0
    },
    draw(data) {
      const delays = 80
      const durations = 500
  
      if (data.type === 'line') {
        smilOptions.seq += 1
        data.element.animate({
          opacity: {
            begin: smilOptions.seq * delays + 1e3,
            dur: durations,
            from: 0,
            to: 1,
          },
        })
      } else if (data.type === 'label' && data.axis === 'x')
        data.element.animate({
          y: {
            begin: smilOptions.seq * delays,
            dur: durations,
            from: data.y + 100,
            to: data.y,
            easing: 'easeOutQuart',
          },
        })
      else if (data.type === 'label' && data.axis === 'y')
        data.element.animate({
          x: {
            begin: smilOptions.seq * delays,
            dur: durations,
            from: data.x - 100,
            to: data.x,
            easing: 'easeOutQuart',
          },
        })
      else if (data.type === 'point')
        data.element.animate({
          x1: {
            begin: smilOptions.seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart',
          },
          x2: {
            begin: smilOptions.seq * delays,
            dur: durations,
            from: data.x - 10,
            to: data.x,
            easing: 'easeOutQuart',
          },
          opacity: {
            begin: smilOptions.seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'easeOutQuart',
          },
        })
      else if (data.type === 'grid') {
        const pos1Animation = {
          begin: smilOptions.seq * delays,
          dur: durations,
          from: data[`${data.axis.units.pos}1`] - 30,
          to: data[`${data.axis.units.pos}1`],
          easing: 'easeOutQuart',
        }
        const pos2Animation = {
          begin: smilOptions.seq * delays,
          dur: durations,
          from: data[`${data.axis.units.pos}2`] - 100,
          to: data[`${data.axis.units.pos}2`],
          easing: 'easeOutQuart',
        }
        const ctAnimations = {}
        ctAnimations[`${data.axis.units.pos}1`] = pos1Animation
        ctAnimations[`${data.axis.units.pos}2`] = pos2Animation
        ctAnimations.opacity = {
          begin: smilOptions.seq * delays,
          dur: durations,
          from: 0,
          to: 1,
          easing: 'easeOutQuart',
        }
        data.element.animate(ctAnimations)
      }
    },
  }
  
  const animatonOptions = {
    axisX: {
      labelInterpolationFnc(value, index) {
        return index % 2 !== 0 ? !1 : value
      },
    },
  }

  const handleMyOpenOrders = e => {
    e.preventDefault()
    setMyOpenOrdersLoading(true)
    setTimeout(() => {
      setMyOpenOrdersLoading(false)
      setMyOpenOrdersLoaded(true)
    }, 1500)
  }

  const handleMyOrderHistory = e => {
    e.preventDefault()
    setMyOrderHistoryLoading(true)
    setTimeout(() => {
      setMyOrderHistoryLoading(false)
      setMyOrderHistoryLoaded(true)
    }, 1500)
  }

  const toggleOrderType = e => {
    setOrderType(e.target.value)
  }

  const myOrderColumns = [
    {
      title: 'Order Date',
      dataIndex: 'orderDate',
      key: 'orderDate',
    },
    {
      title: 'Open Date',
      dataIndex: 'openDate',
      key: 'openDate',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: value => (
        <span style={{ color: value === 'SELL' ? '#f75535' : '#00a45b' }}>{value}</span>
      ),
    },
    {
      title: 'Bid/Ask',
      dataIndex: 'bidAsk',
      key: 'bidAsk',
    },
    {
      title: 'Filled',
      dataIndex: 'filled',
      key: 'filled',
    },
    {
      title: 'Units Total',
      dataIndex: 'unitsTotal',
      key: 'unitsTotal',
    },
    {
      title: 'Actual Rate',
      dataIndex: 'actualRate',
      key: 'actualRate',
    },
    {
      title: 'Est. Total',
      dataIndex: 'estTotal',
      key: 'estTotal',
    },
  ]

  const marketHistoryColumns = [
    {
      title: 'Date',
      dataIndex: 'orderDate',
      key: 'orderDate',
    },
    {
      title: 'BUY/SELL',
      dataIndex: 'type',
      key: 'type',
      render: value => (
        <span style={{ color: value === 'SELL' ? '#f75535' : '#00a45b' }}>{value}</span>
      ),
    },
    {
      title: 'Bid/Ask',
      dataIndex: 'bidAsk',
      key: 'bidAsk',
    },
    {
      title: 'Units Total',
      dataIndex: 'unitsTotal',
      key: 'unitsTotal',
    },
    {
      title: 'Total Cost',
      dataIndex: 'totalCost',
      key: 'totalCost',
    },
  ]

  const ordersSellColumns = [
    {
      title: 'SUM',
      dataIndex: 'sum',
      key: 'sum',
      align: 'right',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      align: 'right',
    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
      align: 'right',
    },
    {
      title: 'BID',
      dataIndex: 'bid',
      key: 'bid',
      width: 120,
      align: 'right',
      render: value => <span style={{ color: '#00a45b' }}>{value}</span>,
    },
    {
      title: '',
      dataIndex: 'sell',
      key: 'sell',
      width: 60,
      align: 'right',
      render: () => (
        <a href="#" className="utils__link--blue mr-2">
          <strong>SELL</strong>
        </a>
      ),
    },
  ]

  const ordersBuyColumns = [
    {
      title: '',
      dataIndex: 'sell',
      key: 'sell',
      width: 60,
      render: () => (
        <a href="#" className="utils__link--blue ml-2">
          <strong>BUY</strong>
        </a>
      ),
    },
    {
      title: 'ASK',
      dataIndex: 'ask',
      key: 'ask',
      width: 120,
      render: value => <span style={{ color: '#f75535' }}>{value}</span>,
    },
    {
      title: 'Size',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'SUM',
      dataIndex: 'sum',
      key: 'sum',
    },
  ]

  return (
    <div>
      <Helmet title="Dashboard Crypto" />
      <div className={styles.crypto}>
        <div className={styles.listMobile}>
          <div className="cui__utils__heading">
            <strong>Market Portfolio</strong>
          </div>
          <Select showSearch size="large" defaultValue="btc" style={{ width: '100%' }}>
            <Select.Option value="btc">
              BTC (Bitcoin)
              <Tag color="blue" className="ml-3">
                14.7%
              </Tag>
            </Select.Option>
            <Select.Option value="xmr">
              XMR (Monero)
              <Tag color="blue" className="ml-3">
                67.5%
              </Tag>
            </Select.Option>
            <Select.Option value="gld">
              GLD (GoldCoin)
              <Tag color="red" className="ml-3">
                -22.9%
              </Tag>
            </Select.Option>
            <Select.Option value="neo">
              NEO (Neo)
              <Tag color="red" className="ml-3">
                -12.3%
              </Tag>
            </Select.Option>
            <Select.Option value="btg">
              BTG (Bitcoin Gold)
              <Tag color="blue" className="ml-3">
                +4.3%
              </Tag>
            </Select.Option>
            <Select.Option value="xrp">
              XRP (Ripple)
              <Tag color="red" className="ml-3">
                -4.2%
              </Tag>
            </Select.Option>
            <Select.Option value="zec">
              ZEC (ZCash)
              <Tag color="red" className="ml-3">
                -1.7%
              </Tag>
            </Select.Option>
            <Select.Option value="neo">
              ZCL (ZClassic)
              <Tag color="red" className="ml-3">
                -2.8%
              </Tag>
            </Select.Option>
          </Select>
        </div>
        <div className={styles.list}>
          <Affix offsetTop={20}>
            <div className="cui__utils__heading">
              <strong>Adoba Market Portfolio</strong>
            </div>
            <a href="#" className={styles.listItem}>
              <span className={styles.listPercents}>
                <span>64.7%</span>
                30.00016985
              </span>
              <span className={styles.listCurrency}>
                <span>AAPL</span>
                97.20
              </span>
            </a>
            <a href="#" className={`${styles.listItem} ${styles.listItemNegative}`}>
              <span className={styles.listPercents}>
                <span>7.5%</span>
                19.00016985
              </span>
              <span className={styles.listCurrency}>
                <span>UBER</span>
                37.26
              </span>
            </a>
            <a href="#" className={`${styles.listItem} ${styles.listItemNegative}`}>
              <span className={styles.listPercents}>
                <span>-22.9%</span>
                10.00016985
              </span>
              <span className={styles.listCurrency}>
                <span>EXPC</span>
                5.20
              </span>
            </a>
            <a href="#" className={styles.listItem}>
              <span className={styles.listPercents}>
                <span>-42.3%</span>
                39.00016712
              </span>
              <span className={styles.listCurrency}>
                <span>MSFT</span>
                183.20
              </span>
            </a>
            <a href="#" className={styles.listItem}>
              <span className={styles.listPercents}>
                <span>+94.3%</span>
                70.00036234
              </span>
              <span className={styles.listCurrency}>
                <span>BOKFL</span>
                25.64
              </span>
            </a>
            <a href="#" className={`${styles.listItem} ${styles.listItemNegative}`}>
              <span className={styles.listPercents}>
                <span>-4.2%</span>
                0.00035685
              </span>
              <span className={styles.listCurrency}>
                <span>XRP</span>
                96.36
              </span>
            </a>
            <a href="#" className={styles.listItem}>
              <span className={styles.listPercents}>
                <span>-81.7%</span>
                14.00000985
              </span>
              <span className={styles.listCurrency}>
                <span>ZEC</span>
                86.35
              </span>
            </a>
            <a href="#" className={styles.listItem}>
              <span className={styles.listPercents}>
                <span>-92.8%</span>
                0.00000152
              </span>
              <span className={styles.listCurrency}>
                <span>ZCL</span>
                91.03
              </span>
            </a>
            <div className="mb-3">
              <Rate defaultValue={3} />
            </div>
            <h5 className="mb-3">
              <strong>Quick Tools</strong>
            </h5>
            <div className="card">
              <AntdMenuExample />
            </div>
            
          </Affix>     
        </div>
          

        
        <div className={styles.content}>
          <div className="cui__utils__heading">
            <strong>Portfolio Simulation</strong>
          </div>
          <div className="card bg-white">
            <div className="card-body">
              <div style={{ height: 400 }}>
                {graphData !== null && <TradeChart type="hybrid" data={graphData} />}
              </div>
            </div>
          </div>


          <div className="row mb-3">
            <div className="card .col-md1" style={{width: 300, marginLeft:50, backgroundColor:"#96ceb4"}}>
              <div className="fnt-size-36 font-weight-bold text-dark mb-n2" style={{ height: 45,marginLeft:120, }}>
                $3,186
              </div>
              <div className="text-upercase" style={{marginLeft:70}}>
                Expected Earnings (Today)
              </div>
            </div>
            <div className="card .col-md1" style={{width: 300, marginLeft:50, backgroundColor:"#88d8b0"}}>
              <div className="fnt-size-36 font-weight-bold text-dark mb-n2" style={{ height: 45,marginLeft:120, }}>
                +$11,980
              </div>
              <div className="text-upercase" style={{marginLeft:70}}>
                Expected Earnings (Tomorrow)
              </div>
            </div>
            <div className="card .col-md1" style={{width: 300, marginLeft:50, backgroundColor:"#ff6f69"}}>
              <div className="fnt-size-36 font-weight-bold text-dark mb-n2" style={{ height: 45, marginLeft:120, color:"#ffa39e" }}>
                -$86,081
              </div>
              <div className="text-upercase" style={{marginLeft:70}}>
                Expected Earnings (Month)
              </div>
            </div>
          </div>



          

          
            
          <div className="cui__utils__heading">
            <strong>Portfolio Sentiments</strong>
          </div>
          <div className="row mb-3">
            <div className="card mb-3" style={{width: 180, height:180, marginLeft:100, backgroundColor:"#00acee"}}>
              <Title level={4} style={{marginLeft:35}}>Twitter</Title>
            </div>
            <div className="card mb-3" style={{width: 180, height:180, marginLeft:100, backgroundColor:"#3b5998"}}>
              <Title level={4} style={{marginLeft:35, color:"FFFFFF"}}>Facebook</Title>
            </div>
            <div className="card mb-3" style={{width: 180, height:180, marginLeft:100, backgroundColor:"#00acee"}}>
              <Title level={4} style={{marginLeft:35, color:"FFFFFF"}}>News</Title>
            </div>
          </div>

          <div className="cui__utils__heading">
            <strong>Portfolio Charts</strong>
          </div>
          <div className="row mb-3">
            <div className="mb-5">
              <ChartistGraph
                className="height-300 chart-css-animations chartist-theme-dark chartist-animated"
                data={animationData}
                options={animatonOptions}
                type="Line"
              />
            </div>
            <div className="cui__utils__heading">
              <strong>Performance vs SP500</strong>
            </div>
            <div className="mb-5">
              <ChartistGraph
                className="height-300 chart-css-animations chartist-theme-dark chartist-animated"
                data={animationData}
                options={animatonOptions}
                type="Line"
              />
            </div>
            <div className="cui__utils__heading">
              <strong>Performance vs Top Funds</strong>
            </div>
            <div className="mb-5">
              <ChartistGraph
                className="height-300 chart-smil-animations"
                data={smilData}
                options={smilOptions}
                type="Line"
                listener={smilListener}
              />
            </div>


          </div>
          <div className="cui__utils__heading">
            <strong>Order Booketh</strong>
          </div>
          <div className="card">
            <div className="card-body">
              <div className={styles.order}>
                <div className={styles.orderLeft}>
                  <div className={`${styles.table} kit__utils__table`}>
                    <Table
                      columns={ordersSellColumns}
                      dataSource={orderBookSell}
                      pagination={{ position: 'bottom' }}
                      size="small"
                    />
                  </div>
                </div>
                <div className={styles.orderMiddle}>
                  <div className={styles.form}>
                    <Form layout="vertical">
                      <Form.Item>
                        <Radio.Group
                          onChange={toggleOrderType}
                          value={orderType}
                          style={{ width: '100%' }}
                        >
                          <Radio.Button value="buy" style={{ width: '50%', textAlign: 'center' }}>
                            BUY
                          </Radio.Button>
                          <Radio.Button value="sell" style={{ width: '50%', textAlign: 'center' }}>
                            SELL
                          </Radio.Button>
                        </Radio.Group>
                      </Form.Item>
                      {orderType === 'buy' && (
                        <div>
                          <span className={styles.formLabel}>ORDER TYPE</span>
                          <Form.Item>
                            <Select defaultValue="limit">
                              <Select.Option value="limit">Limit (Default)</Select.Option>
                              <Select.Option value="conditional">Conditional</Select.Option>
                            </Select>
                          </Form.Item>
                          <span className={styles.formLabel}>QUANTITY (BTC)</span>
                          <Form.Item>
                            <Input defaultValue="0.00000000" />
                          </Form.Item>
                          <span className={styles.formLabel}>BID PRICE</span>
                          <Form.Item>
                            <Input defaultValue="0.00645198" />
                          </Form.Item>
                          <span className={styles.formLabel}>TOTAL</span>
                          <Form.Item>
                            <Input defaultValue="0.00000000" />
                          </Form.Item>
                          <span className={styles.formLabel}>TIME IN FORCE</span>
                          <Form.Item>
                            <Select defaultValue="good">
                              <Select.Option value="good">
                                Good &#39;Til Cancelled (Default)
                              </Select.Option>
                              <Select.Option value="immediate">Immediate or Cancel</Select.Option>
                            </Select>
                          </Form.Item>

                          <Button className="btn btn-success" style={{ width: '100%' }} onClick={showConfirm}>Buy AAPL
                          
                          </Button>
                          
                          <div className="my-3 text-center">
                            <div>
                              <strong>Available Balance</strong>
                            </div>
                            <div>12.92520000 BTC</div>
                            <div>1450.00 USD</div>
                            <div>
                              <a href="#" className="utils__link--blue utils__link--underlined">
                                <strong>Max Buy</strong>
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                      {orderType === 'sell' && (
                        <div>
                          <span className={styles.formLabel}>ORDER TYPE</span>
                          <Form.Item>
                            <Select defaultValue="limit">
                              <Select.Option value="limit">Limit (Default)</Select.Option>
                              <Select.Option value="conditional">Conditional</Select.Option>
                            </Select>
                          </Form.Item>
                          <span className={styles.formLabel}>QUANTITY (BTC)</span>
                          <Form.Item>
                            <Input defaultValue="0.00000000" />
                          </Form.Item>
                          <span className={styles.formLabel}>ASK PRICE</span>
                          <Form.Item>
                            <Input defaultValue="0.00645198" />
                          </Form.Item>
                          <span className={styles.formLabel}>TOTAL</span>
                          <Form.Item>
                            <Input defaultValue="0.00000000" />
                          </Form.Item>
                          <span className={styles.formLabel}>TIME IN FORCE</span>
                          <Form.Item>
                            <Select defaultValue="good">
                              <Select.Option value="good">
                                Good &#39;Til Cancelled (Default)
                              </Select.Option>
                              <Select.Option value="immediate">Immediate or Cancel</Select.Option>
                            </Select>
                          </Form.Item>
                          <div className="btn btn-danger" style={{ width: '100%' }}>
                            <strong>SELL BTC</strong>
                          </div>
                          <div className="my-3 text-center">
                            <div>
                              <strong>Available Balance</strong>
                            </div>
                            <div>12.92520000 BTC</div>
                            <div>1450.00 USD</div>
                            <div>
                              <a href="#" className="utils__link--blue utils__link--underlined">
                                <strong>Max SELL</strong>
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </Form>
                  </div>
                </div>
                <div className={styles.orderRight}>
                  <div className={`${styles.table} kit__utils__table`}>
                    <Table
                      columns={ordersBuyColumns}
                      dataSource={orderBookBuy}
                      pagination={{ position: 'bottom' }}
                      size="small"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cui__utils__heading">
            <strong>Market History</strong>
          </div>
          <div className="card">
            <div className="card-body">
              <div className={`${styles.table} kit__utils__table`}>
                <Table
                  columns={marketHistoryColumns}
                  dataSource={marketHistoryData}
                  pagination={{ position: 'bottom' }}
                  size="small"
                />
              </div>
            </div>
          </div>
          <div className="cui__utils__heading">
            <strong>My Open Orders</strong>
          </div>
          <div className="card">
            <div className="card-body">
              <div>
                {!myOpenOrdersLoaded && (
                  <a href="#" onClick={handleMyOpenOrders}>
                    <Spin spinning={myOpenOrdersLoading}>
                      <Alert
                        className={styles.warning}
                        message="Click to view open order details"
                        type="info"
                      />
                    </Spin>
                  </a>
                )}
                {myOpenOrdersLoaded && (
                  <div className={`${styles.table} kit__utils__table`}>
                    <Table
                      columns={myOrderColumns}
                      dataSource={myOpenOrdersData}
                      pagination={{ position: 'bottom' }}
                      size="small"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="cui__utils__heading">
            <strong>My Order History</strong>
          </div>
          <div className="card">
            <div className="card-body">
              <div>
                {!myOrderHistoryLoaded && (
                  <a href="#" onClick={handleMyOrderHistory}>
                    <Spin spinning={myOrderHistoryLoading}>
                      <Alert
                        className={styles.warning}
                        message="Click to view order history details"
                        type="info"
                      />
                    </Spin>
                  </a>
                )}
                {myOrderHistoryLoaded && (
                  <div className={`${styles.table} kit__utils__table`}>
                    <Table
                      columns={myOrderColumns}
                      dataSource={myOpenOrdersData}
                      pagination={{ position: 'bottom' }}
                      size="small"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardCrypto
