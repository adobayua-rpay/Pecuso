/* eslint-disable */

import React from 'react';

import { Collapse } from 'antd';



const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
EBITDA, or earnings before interest, taxes, depreciation, and amortization, is a measure of a company's overall financial performance and is used as an alternative to net income in some circumstances. 
EBITDA, however, can be misleading because it strips out the cost of capital investments like property, plant, and equipment.
This metric also excludes expenses associated with debt by adding back interest expense and taxes to earnings. Nonetheless, it is a more precise measure of corporate performance since it is able to show earnings before the influence of accounting and financial deductions.
Simply put, EBITDA is a measure of profitability. While there is no legal requirement for companies to disclose their EBITDA, according to the U.S. generally accepted accounting principles (GAAP), it can be worked out and reported using the information found in a company's financial statements.
`;

const ebitda2 = `
EBITDA is essentially net income (or earnings) with interest, taxes, depreciation, and amortization added back. EBITDA can be used to analyze and compare profitability among companies and industries, as it eliminates the effects of financing and capital expenditures. EBITDA is often used in valuation ratios and can be compared to enterprise value and revenue.
Interest expenses and (to a lesser extent) interest income are added back to net income, which neutralizes the cost of debt, as well as the effect interest payments, have on taxes. 
Income taxes are also added back to net income, which does not always increase EBITDA if the company has a net loss. 
Companies tend to spotlight their EBITDA performance when they do not have very impressive (or even positive) net income. 
It's not always a telltale sign of malicious market trickery, but it can sometimes be used to distract investors from the lack of real profitability.
`;

const rps = `
is the portion of the company’s earnings—or profit—that is allocated to each share of stock in the company.
It is calculated by taking the net income a company produces—which is the money that is left over in the company once all of the appropriate expenses and taxes have been subtracted from the company’s revenue—and dividing it by the total number of outstanding shares of stock in the company.
is the end of the story when it comes to fundamental analysis. Companies with strong EPS numbers typically have strong stock prices, while companies with weak EPS numbers typically have weak stock prices.
Fundamental stock analysts are typically looking for strong and growing revenue numbers and strong and growing EPS numbers when they analyze a company.
`
const rps2  = `
For example, imagine a stock analyst is looking at General Electric (GE) to see if the company is fundamentally sound. To start things off, the analyst will most likely look at GE’s revenue. However, the analyst won’t simply look at the most recent revenue number. The analyst will be interested in how the current revenue number compares with past revenue numbers. If the current revenue number is greater than the previous revenue numbers, and the revenue trend has been increasing, the analyst will view this as a positive sign for GE.
Conversely, if the current revenue number is less than the previous revenue numbers, and the revenue trend has been decreasing, the analyst will view this as a negative sign for GE.
Analysts take a similar approach when they look at a company’s EPS numbers. If the current EPS number is greater than the previous revenue numbers, and the EPS trend has been increasing, the analyst will view this as a positive sign for GE. Conversely, if the current EPS number is less than the previous revenue numbers, and the EPS trend has been decreasing, the analyst will view this as a negative sign for GE.
As a bonus, analysts also like to see EPS numbers growing faster than revenue numbers because it indicates company management is increasing the efficiency with which it runs the company. If more money can make it through the gauntlet of expenses and taxes from the top line to the bottom line, the more profit stockholders make.
`
const rps3 = `
In ranking the predictability, companies with more consistent revenue and earnings growth are ranked high with predictability.

Peter Lynch categorized companies according to their revenue growth:

Slow Grower: Inflation < 10-Year Revenue Growth Rate < 10%:
Stalwart: 10% < 10-Year Revenue Growth Rate < 20%:
Fast Grower: 10-Year Revenue Growth Rate > 20%:
His favorite companies are stalwart, those growing between 10-20% a year.

Companies in cyclical industries may see their revenue fluctuate wildly in good years and bad years.
`

  class App extends React.Component {
 
  render() {
    return (
      <>
  <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="Beta" key="1">
      <p>{text}</p>
    </Panel>
    <Panel header="Total Cash" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="Current Debt" key="3" disabled>
      <p>{text}</p>
    </Panel>
    <Panel header="Revenue" key="4" disabled>
      <p>{text}</p>
    </Panel>
    <Panel header="Gross Profit" key="5">
      <p>{text}</p>
    </Panel>
    <Panel header="EBITDA" key="6">
    <p>{text}</p>
      <p><b>Using EBITDA</b></p>
      <p>{ebitda2}</p>
    </Panel>
    <Panel header="Revenue Per Share" key="7">
    <p>{rps}</p>
      <p><b>What Fundamental Analysts are looking for</b></p>
      <p>{rps2}</p>
      <p><b>Using Revenue Per Share To Trade</b></p>
      <p>{rps3}</p>
    </Panel>
    <Panel header="Revenue Per Employee" key="8">
      <p>{text}</p>
    </Panel>
    <Panel header="Debt To Equity" key="9">
      <p>{text}</p>
    </Panel>
    <Panel header="Profit To Margin" key="10">
      <p>{text}</p>
    </Panel>
    <Panel header="Enterprise Value" key="11">
      <p>{text}</p>
    </Panel>
    <Panel header="Enterprise Value To Revenue" key="12">
      <p>{text}</p>
    </Panel>
    <Panel header="Price To Sales" key="13">
      <p>{text}</p>
    </Panel>
    <Panel header="Price To Book" key="14">
      <p>{text}</p>
    </Panel>
    <Panel header="Forward PE Ratio" key="15">
      <p>{text}</p>
    </Panel>
    <Panel header="PEG Ratio" key="16">
      <p>{text}</p>
    </Panel>
    <Panel header="PE High" key="17">
      <p>{text}</p>
    </Panel>
    <Panel header="PE Low" key="18">
      <p>{text}</p>
    </Panel>
    <Panel header="Put Call Ratio" key="19">
      <p>{text}</p>
    </Panel>
  </Collapse>

      </>
    );
  }
}

export default App