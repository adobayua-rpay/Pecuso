/* eslint-disable */

import React from 'react';

import { Collapse,Button , Typography} from 'antd';
const{Text, Link} = Typography


const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


const operatingincome = 'Operating income is an accounting figure that measures the amount of profit realized from a business operations, after deducting operating expenses such as wages, depreciation and cost of goods sold (COGS).Operating income—also called income from operations—takes a companys gross income, which is equivalent to total revenue minus COGS, and subtracts all operating expenses. A businesss operating expenses are costs incurred from normal operating activities and include items such as office supplies and utilities.';

const costofrevenue = 'The cost of revenue is the total cost of manufacturing and delivering a product or service to consumers. Cost of revenue information is found in a companys income statement and is designed to represent the direct costs associated with the goods and services the company provides. The service industry often favors using the cost of revenue metric because it is a more comprehensive account of the various costs associated with selling a good or service.'
const grossprofit = 'Gross profit is the profit a company makes after deducting the costs associated with making and selling its products, or the costs associated with providing its services. Gross profit will appear on a companys income statement and can be calculated by subtracting the cost of goods sold (COGS) from revenue (sales). These figures can be found on a companys income statement. What Does the Gross Profit Margin Tell You?If a companys gross profit margin wildly fluctuates, this may signal poor management practices and/or inferior products. On the other hand, such fluctuations may be justified in cases where a company makes sweeping operational changes to its business model, in which case temporary volatility should be no cause for alarm.For example, if a company decides to automate certain supply chain functions, the initial investment may be high, but the cost of goods ultimately decreases due to the lower labor costs resulting from the introduction of the automation.'
const totalrevenue = 'In business and economics, one of the most important measures for evaluating your success and progress is looking at the trends in your total revenue. You need to know this important measure so that you can eventually calculate your total profit for a business. Total revenue in economics refers to the total receipts from sales of a given quantity of goods or services. It is the total income of a business and is calculated by multiplying the quantity of goods sold by the price of the goods. For example, if Company A produces 100 widgets and sells them for $50 each, the total revenue would be 100 * $50 = $5,000. In economics, total revenue is often represented in a table or as a curve on a graph.'
const operatingrevenue='Operating revenue is revenue generated from a companys primary business activities. For example, a retailer produces revenue through merchandise sales, and a physician derives revenue from the medical services he/she provides. What constitutes operating revenue varies per business or industry.'
const operatingRevenue2 = 'For a successful company, operating revenue and income are the primary sources of earnings per share (EPS); this ratio is a key statistic for evaluating a firms stock price. EPS is defined as earnings available to common shareholders divided by common shares outstanding. A well-managed business can grow operating revenue and income by finding more customers and moving into new markets that generate higher earnings. As EPS increases, many investors and analysts consider the stock to be more valuable and the stock price increases.'
const netincome = 'Net income (NI), also called net earnings, is calculated as sales minus cost of goods sold, selling, general and administrative expenses, operating expenses, depreciation, interest, taxes, and other expenses. It is a useful number for investors to assess how much revenue exceeds the expenses of an organization. This number appears on a companys income statement and is also an indicator of a companys profitability.'
const rand = 'Research and development (R&D) includes activities that companies undertake to innovate and introduce new products and services. It is often the first stage in the development process. The goal is typically to take new products and services to market and add to the companys bottom line.'
const rand2 = 'The term R&D is widely linked to innovation both in the corporate and government world or the public and private sectors. R&D allows a company to stay ahead of its competition. Without an R&D program, a company may not survive on its own and may have to rely on other ways to innovate such as engaging in mergers and acquisitions (M&A) or partnerships. Through R&D, companies can design new products and improve their existing offerings.R&D is separate from most operational activities performed by a corporation. The research and/or development is typically not performed with the expectation of immediate profit. Instead, it is expected to contribute to the long-term profitability of a company. R&D may lead to patents, copyrights, and trademarks as discoveries are made and products created.Companies that set up and employ entire R&D departments commit substantial capital to the effort. They must estimate the risk-adjusted return on their R&D expenditures—which inevitably involves risk of capital—because there is no immediate payoff, and the return on investment (ROI) is uncertain. As more money is invested in R&D, the level of capital risk increases. Other companies may choose to outsource their R&D for a variety of reasons including size and cost.Companies across all sectors and industries undergo R&D activities. Corporations experience growth through these improvements and the development of new goods and services. Pharmaceuticals, semiconductors, and software/technology companies tend to spend the most on R&D. In Europe, R&D is known as research and technical or technological development (RTD).'

class App extends React.Component {
 
  render() {
    return (
      <>
  <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="Report Date" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="Gross Profit" key="2">
      <p>{grossprofit}</p>
      <p>
          <Button type="link">What does Gross Profit Margin Tell You</Button>
      </p>
    </Panel>
    <Panel header="Cost of Revenue" key="3">
      <p>{costofrevenue}</p>
      <Button type="link">About Cost of Revenue</Button>
      <p><Text type="primary">1 out of 297 (Tech Stocks)</Text></p>
      <p><Text type="primary">1 out of 4,8231 (Total Stocks)</Text></p>


    </Panel>
    <Panel header="Operating Revenue" key="3" disabled>
      <p>{operatingrevenue}</p>
      <p><b>How Operating Revenue Affects Stock Price</b></p>
      <p>{operatingRevenue2}</p>
      <Button type="link">About Operating Revenue</Button>

    </Panel>
    <Panel header="Total Revenue" key="4">
      <p>{totalrevenue}</p>
      <Button type="link">About Total Revenue</Button>

    </Panel>
    <Panel header="Operating Income" key="5">
      <p>{operatingincome}</p>
      <Button type="link">About Operating Income</Button>

    </Panel>
    <Panel header="Total Revenue" key="6">
      <p>{text}</p>
    </Panel>
    <Panel header="Operating Income" key="7">
      <p>{text}</p>
    </Panel>
    <Panel header="Net Income" key="8">
      <p>{netincome}</p>
      <Button type="link">About Net Income</Button>

    </Panel>
    <Panel header="Research and Development" key="9">
      <p>{rand}</p>
      <p><b>Understanding Research and Development (R&D)</b></p>
      <p>{rand2}</p>
      <Button type="link">About Research and Development</Button>

    </Panel>
    <Panel header="Current Assets" key="10">
      <p>{text}</p>
      <Button type="link">About Current Assets</Button>

    </Panel>
    <Panel header="Total Assets" key="11">
      <p>{text}</p>
      <Button type="link">About Total Assets</Button>

    </Panel>
    <Panel header="Total Liabilities" key="12">
      <p>{text}</p>
      <Button type="link">About Total Liabilities</Button>

    </Panel>
    <Panel header="Current Cash" key="13">
      <p>{text}</p>
      <Button type="link">About Current Cash</Button>

    </Panel>
    <Panel header="Current Debt" key="14">
      <p>{text}</p>
      <Button type="link">About Current Debt</Button>

    </Panel>
    <Panel header="Short Term Debt" key="15">
      <p>{text}</p>
      <Button type="link">About Short Term Debt</Button>

    </Panel>
    <Panel header="Long Term Debt" key="16">
      <p>{text}</p>
      <Button type="link">About Long Term Debt</Button>

    </Panel>
    <Panel header="Total Cash" key="17">
      <p>{text}</p>
      <Button type="link">About Total Cash</Button>

    </Panel>
    <Panel header="Total Debt" key="18">
      <p>{text}</p>
      <Button type="link">About Total Debt</Button>

    </Panel>
    <Panel header="Shareholder Equity" key="19">
      <p>{text}</p>
      <Button type="link">About Shareholder Equity</Button>

    </Panel>
    <Panel header="Cash Change" key="20">
      <p>{text}</p>
      <Button type="link">About Cash Change</Button>

    </Panel>
    <Panel header="Cash Flow" key="21">
      <p>{text}</p>
      <Button type="link">About Cash Flow</Button>

    </Panel>
  </Collapse>

      </>
    );
  }
}

export default App