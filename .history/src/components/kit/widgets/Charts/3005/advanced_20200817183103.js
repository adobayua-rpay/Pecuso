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

const revper = 'Revenue per Employee is a measure of the total Revenue for the last twelve months (LTM) divided by the current number of Full-Time Equivalent employees. This ratio is among the most universally applicable and is often used to compare companies within the same industry.'
const debt2eq = 'The debt-to-equity (D/E) ratio is calculated by dividing a company’s total liabilities by its shareholder equity. These numbers are available on the balance sheet of a company’s financial statements.The ratio is used to evaluate a companys financial leverage. The D/E ratio is an important metric used in corporate finance. It is a measure of the degree to which a company is financing its operations through debt versus wholly-owned funds. More specifically, it reflects the ability of shareholder equity to cover all outstanding debts in the event of a business downturn.'
const debt2eq2 = 'Given that the debt-to-equity ratio measures a company’s debt relative to the value of its net assets, it is most often used to gauge the extent to which a company is taking on debt as a means of leveraging its assets. A high debt/equity ratio is often associated with high risk; it means that a company has been aggressive in financing its growth with debt. If a lot of debt is used to finance growth, a company could potentially generate more earnings than it would have without that financing. If leverage increases earnings by a greater amount than the debt’s cost (interest), then shareholders should expect to benefit. However, if the cost of debt financing outweighs the increased income generated, share values may decline. The cost of debt can vary with market conditions. Thus, unprofitable borrowing may not be apparent at first. Changes in long-term debt and assets tend to have the greatest impact on the D/E ratio because they tend to be larger accounts compared to short-term debt and short-term assets. If investors want to evaluate a company’s short-term leverage and its ability to meet debt obligations that must be paid over a year or less, other ratios will be used.'
const debt2eq3 = 'At the end of 2017, Apache Corp (APA) had total liabilities of $13.1 billion, total shareholder equity of $8.79 billion,1﻿ and a debt/equity ratio of 1.49. ConocoPhillips (COP) had total liabilities of $42.56 billion, total shareholder equity of $30.8 billion,2 and a debt-to-equity ratio of 1.38 at the end of 2017: On the surface, it appears that APA’s higher leverage ratio indicates higher risk. However, this may be too generalized to be helpful at this stage and further investigation would be needed. We can also see how reclassifying preferred equity can change the D/E ratio in the following example, where it is assumed a company has $500,000 in preferred stock, $1 million in total debt (excluding preferred stock), and $1.2 million in total shareholder equity (excluding preferred stock). Other financial accounts, such as unearned income, will be classified as debt and can distort the D/E ratio. Imagine a company with a prepaid contract to construct a building for $1 million. The work is not complete, so the $1 million is considered a liability. Assume that the company has purchased $500,000 of inventory and materials to complete the job that has increased total assets and shareholder equity. If these amounts are included in the D/E calculation, the numerator will be increased by $1 million and the denominator by $500,000, which will increase the ratio.'
const profitmargin = 'Profit margin is one of the commonly used profitability ratios to gauge the degree to which a company or a business activity makes money. It represents what percentage of sales has turned into profits. Simply put, the percentage figure indicates how many cents of profit the business has generated for each dollar of sale. For instance, if a business reports that it achieved a 35% profit margin during the last quarter, it means that it had a net income of $0.35 for each dollar of sales generated.'
const profitmargin2 = 'From a billion-dollar publicly listed company to an average Joe’s sidewalk hot dog stand, the profit margin figure is widely used and quoted by all kinds of businesses across the globe. Beyond individual businesses, it is also used to indicate the profitability potential of larger sectors and of overall national or regional markets. It is common to see headlines like “ABC Research warns on declining profit margins of American auto sector,” or “European corporate profit margins are breaking out. In essence, the profit margin has become the globally adopted standard measure of the profit-generating capacity of a business and is a top-level indicator of its potential. It is one of the first few key figures to be quoted in the quarterly results reports that companies issue. Internally, business owners, company management, and external consultants use it for addressing operational issues and to study seasonal patterns and corporate performance during different timeframes. A zero or negative profit margin translates to a business either struggling to manage its expenses or failing to achieve good sales. A further drill-down helps identify the leaking areas—like high unsold inventory, excess yet underutilized employees and resources, or high rentals—and then devise appropriate action plans. Enterprises operating multiple business divisions, product lines, stores, or geographically spread-out facilities may use profit margin for assessing the performance of each unit and compare it against one another. Profit margins often come into play when a company seeks funding. Individual businesses, like a local retail store, may need to provide it for seeking (or restructuring) a loan from banks and other lenders. It also becomes important while taking out a loan against a business as collateral. Large corporations issuing debt to raise money are required to reveal their intended use of collected capital, and that provides insights to investors about profit margin that can be achieved either by cost cutting or by increasing sales or a combination of both. The number has become an integral part of equity valuations in the primary market for initial public offerings (IPO) Finally, profit margins are a significant consideration for investors. Investors looking at funding a particular startup may like to assess the profit margin of the potential product/service being developed. While comparing two or more ventures or stocks to identify the better one, investors often hone in on the respective profit margins.'
const profitmargin3 = 'However, profit margin cannot be the sole decider for comparison as each business has its own distinct operations. Usually, all businesses with low profit margins, like retail and transportation, will have high turnaround and revenue which makes up for overall high profits despite the relatively low profit margin figure. High-end luxury goods have low sales, but high profits per unit make up for high profit margins. Below is a comparison between the profit margins of four long-running and successful companies from the technology and retail space: Technology companies like Microsoft and Alphabet have high double-digit quarterly profit margins compared to the single-digit margins achieved by Walmart and Target. However, it does not mean Walmart and Target did not generate profits or were less successful businesses compared to Microsoft and Alphabet. A look at stock returns between 2006 and 2012 indicate similar performances across the four stocks, though Microsoft and Alphabets profit margin were way ahead of Walmart and Targets during that period. Since they belong to different sectors, a blind comparison solely on profit margins may be inappropriate. Profit margin comparisons between Microsoft and Alphabet, and between Walmart and Target is more appropriate'
const ev = 'Enterprise value (EV) is a measure of a companys total value, often used as a more comprehensive alternative to equity market capitalization. EV includes in its calculation the market capitalization of a company but also short-term and long-term debt as well as any cash on the companys balance sheet. Enterprise value is a popular metric used to value a company for a potential takeover.'
const ev2 = 'Enterprise value (EV) could be thought of like the theoretical takeover price if a company were to be bought. EV differs significantly from simple market capitalization in several ways, and many consider it to be a more accurate representation of a firms value. The value of a firms debt, for example, would need to be paid off by the buyer when taking over a company. As a result, enterprise value provides a much more accurate takeover valuation because it includes debt in its value calculation. Why doesnt market capitalization properly represent a firms value? It leaves a lot of important factors out, such as a companys debt on the one hand and its cash reserves on the other. Enterprise value is basically a modification of market cap, as it incorporates debt and cash for determining a companys valuation.'
const ev3 = 'Enterprise value is used as the basis for many financial ratios that measure the performance of a company. An enterprise multiple that contains enterprise value relates the total value of a company as reflected in the market value of its capital from all sources to a measure of operating earnings generated, such as earnings before interest, taxes, depreciation, and amortization (EBITDA). EBITDA is a measure of a companys ability to generate revenue and is used as an alternative to simple earnings or net income in some circumstances. EBITDA, however, can be misleading because it strips out the cost of capital investments like property, plant, and equipment. Another figure, EBIT, can be used as a similar financial metric without the drawback of removing depreciation and amortization expenses related to property, plant and equipment. EBITDA is calculated using the following formula: The enterprise value/EBITDA metric is used as a valuation tool to compare the value of a company, debt included, to the company’s cash earnings less non-cash expenses. Its ideal for analysts and investors looking to compare companies within the same industry. Another commonly used multiple for determining the relative value of firms is the enterprise value to sales ratio or EV/sales. EV/sales is regarded as a more accurate measure than the price/sales ratio since it takes into account the value and amount of debt a company must repay at some point. Generally, the lower the EV/sales multiple, the more attractive or undervalued the company is believed to be valued. The EV/sales ratio can actually be negative at times when the cash held by a company is more than the market capitalization and debt value, implying that the company can essentially be by itself with its own cash.'
const ev4 = 'The enterprise value-to-revenue multiple (EV/R) is a measure of the value of a stock that compares a companys enterprise value to its revenue. EV/R is one of several fundamental indicators that investors use to determine whether a stock is priced fairly The EV/R multiple is also often used to determine a companys valuation in the case of a potential acquisition. It’s also called the enterprise value-to-sales multiple.'
const ev5 = 'Say a company has $20 million in short-term liabilities on the books and $30 million in long-term liabilities. It has $125 million worth of assets, and 10% of those assets are reported as cash. There are 10 million shares of the companys common stock outstanding, and the current price per share of the stock is $17.50. The company reported $85 million in revenue last year. As a real-life example, consider the major retail sector, notably Wal-Mart (NYSE: WMT), Target (NYSE: TGT), and Big Lots (NYSE: BIG). The enterprise values of Wal-Mart, Target, and Big Lots are $338 billion, $48.5 billion, and $1.7 billion, respectively, as of Feb. 15, 2019. Meanwhile, the three have revenues over the trailing twelve months of $512 billion, $74.5 billion, and $5.3 billion, respectively. Dividing each of their enterprise values by revenues means Wal-Mart’s EV/R is 0.66, Target’s is 0.65, and Big Lots’ 0.32.'
const p2s = 'Investors are always seeking ways to compare the value of stocks. The price-to-sales ratio utilizes a companys market capitalization and revenue to determine whether the stock is valued properly. The price-to-sales ratio (Price/Sales or P/S) is calculated by taking a companys market capitalization (the number of outstanding shares multiplied by the share price) and divide it by the companys total sales or revenue over the past 12 months. The lower the P/S ratio, the more attractive the investment. Price-to-sales provides a useful measure for sizing up stocks.'
const p2s2 = 'The price-to-sales ratio shows how much the market values every dollar of the companys sales. This ratio can be effective in valuing growth stocks that have yet to turn a profit or have suffered a temporary setback. For example, if a company isnt earning a profit yet, investors can look at the P/S ratio to determine whether the stock is undervalued or overvalued. If the P/S ratio is lower than comparable companies in the same industry that is profitable, investors might consider buying the stock due to the low valuation. Of course, the P/S ratio needs to be used with other financial ratios and metrics when determining whether a stock is valued properly. In a highly cyclical industry such as semiconductors, there are years when only a few companies produce any earnings. This does not mean semiconductor stocks are worthless. In this case, investors can use price-to-sales instead of the price-earnings ratio (P/E Ratio or PE) to determine how much they are paying for a dollar of the companys sales rather than a dollar of its earnings. If a companys earnings are negative, the P/E ratio is not optimal since it will not be able to value the stock because the denominator is less than zero. The price-to-sales ratio can be used for spotting recovery situations or for double-checking that a companys growth has not become overvalued. It comes in handy when a company begins to suffer losses and, as a result, has no earnings with which investors can assess the shares. Lets consider how we evaluate a firm that has not made any money in the past year. Unless the firm is going out of business, the P/S will show whether the firms shares are valued at a discount against others in its sector. Lets say the company has a P/S of 0.7 while its peers average a 2.0 for P/S. If the company can turn things around, its shares will enjoy substantial upside as the P/S becomes more closely matched with those of its peers. Meanwhile, a company that goes into a loss (negative earnings) may also lose its dividend yield. In this case, P/S represents one of the last remaining measures for valuing the business. All things being equal, a low P/S is good news for investors, while a very high P/S can be a warning sign.'
const p2b1 = 'Companies use the price-to-book ratio (P/B ratio) to compare a firms market capitalization to its book value. Its calculated by dividing the companys stock price per share by its book value per share (BVPS). An assets book value is equal to its carrying value on the balance sheet, and companies calculate it netting the asset against its accumulated depreciation. Book value is also the tangible net asset value of a company calculated as total assets minus intangible assets (patents, goodwill) and liabilities. For the initial outlay of an investment, book value may be net or gross of expenses, such as trading costs, sales taxes, and service charges. Some people may know this ratio by its less common name, price-equity ratio. '
const p2b2 = 'The P/B ratio reflects the value that market participants attach to a companys equity relative to the book value of its equity. A stocks market value is a forward-looking metric that reflects a companys future cash flows. The book value of equity is an accounting measure based on the historic cost principle and reflects past issuances of equity, augmented by any profits or losses, and reduced by dividends and share buybacks. The price-to-book ratio compares a companys market value to its book value. The market value of a company is its share price multiplied by the number of outstanding shares. The book value is the net assets of a company. In other words, if a company liquidated all of its assets and paid off all its debt, the value remaining would be the companys book value. P/B ratio provides a valuable reality check for investors seeking growth at a reasonable price and is often looked at in conjunction with return on equity (ROE), a reliable growth indicator. Large discrepancies between the P/B ratio and ROE often send up a red flag on companies. Overvalued growth stocks frequently show a combination of low ROE and high P/B ratios. If a companys ROE is growing, its P/B ratio should also be growing.'
const p2b3 = 'It is difficult to pinpoint a specific numeric value of a "good" price-to-book (P/B) ratio when determining if a stock is undervalued and therefore a good investment. Ratio analysis can vary by industry. A good P/B ratio for one industry might be a poor ratio for another. Its helpful to identify some general parameters or a range for P/B value, and then consider various other factors and valuation measures that more accurately interpret the P/B value and forecast a companys potential for growth. The P/B ratio has been favored by value investors for decades and is widely used by market analysts. Traditionally, any value under 1.0 is considered a good P/B for value investors, indicating a potentially undervalued stock. However, value investors may often consider stocks with a P/B value under 3.0 as their benchmark.'
const p2b4 = 'Assume that a company has $100 million in assets on the balance sheet and $75 million in liabilities. The book value of that company would be calculated simply as $25 million ($100M - $75M). If there are 10 million shares outstanding, each share would represent $2.50 of book value. If the share price is $5, then the P/B ratio would be 2x (5 / 2.50). This illustrates that the market price is valued at twice its book value'
const forwardpe1 = 'Forward price-to-earnings (forward P/E) is a version of the ratio of price-to-earnings (P/E) that uses forecasted earnings for the P/E calculation. While the earnings used in this formula are just an estimate and not as reliable as current or historical earnings data, there is still benefit in estimated P/E analysis.'
const forwardpe2 = 'Analysts like to think of the P/E ratio as a price tag on earnings. It is used to calculate a relative value based on a companys level of earnings. In theory, $1 of earnings at company A is worth the same as $1 of earnings at company B. If this is the case, both companies should also be trading at the same price, but this is rarely the case If company A is trading for $5, and company B is trading for $10, this implies that the market values company Bs earnings more. There can be various interpretations as to why company B is valued more. It could mean that company Bs earnings are overvalued. It could also mean that company B deserves a premium on the value of its earnings due to superior management and a better business model. When calculating the trailing P/E ratio, analysts compare todays price against earnings for the last 12 months, or the last fiscal year. However, both are based on historical prices. Analysts use earnings estimates to determine what the relative value of the company will be at a future level of earnings. The forward P/E estimates the relative value of the earnings. For example, if the current price of company B is $10, and earnings are estimated to double next year to $2, the forward P/E ratio is 5x, or half the value of the company when it made $1 in earnings. If the forward P/E ratio is lower than the current P/E ratio, this implies that analysts are expecting earnings to increase. If the forward P/E is higher than the current P/E ratio, analysts expect a decrease in earnings.'
const peg = 'The price/earnings to growth ratio (PEG ratio) is a stocks price-to-earnings (P/E) ratio divided by the growth rate of its earnings for a specified time period. The PEG ratio is used to determine a stocks value while also factoring in the companys expected earnings growth, and it is thought to provide a more complete picture than the more standard P/E ratio.'
const peg2 = 'While a low P/E ratio may make a stock look like a good buy, factoring in the companys growth rate to get the stocks PEG ratio may tell a different story. The lower the PEG ratio, the more the stock may be undervalued given its future earnings expectations. Adding a companys expected growth into the ratio helps to adjust the result for companies that may have a high growth rate and a high P/E ratio. The degree to which a PEG ratio result indicates an over or underpriced stock varies by industry and by company type. As a broad rule of thumb, some investors feel that a PEG ratio below one is desirable. According to well-known investor Peter Lynch, a companys P/E and expected growth should be equal, which denotes a fairly valued company and supports a PEG ratio of 1.0. When a companys PEG exceeds 1.0, its considered overvalued while a stock with a PEG of less than 1.0 is considered undervalued.'
const putcall = 'The put-call ratio is a measurement that is widely used by investors to gauge the overall mood of a market. A "put" or put option is a right to sell an asset at a predetermined price. A "call" or call option is a right to buy an asset at a predetermined price. If traders are buying more puts than calls, it signals a rise in bearish sentiment. If they are buying more calls than puts, it suggests that they see a bull market ahead.'
const putcall2 = 'A put-call ratio of 1 indicates that the number of buyers of calls is the same as the number of buyers for puts. However, a ratio of 1 is not an accurate starting point to measure sentiment in the market because there are normally more investors buying calls than buying puts. So, an average put-call ratio of .7 for equities is considered a good basis for evaluating sentiment. A rising put-call ratio, or a ratio greater than .7 or exceeding 1, means that equity traders are buying more puts than calls. It suggests that bearish sentiment is building in the market. Investors are either speculating that the market will move lower or are hedging their portfolios in case there is a sell-off. A falling put-call ratio, or below .7 and approaching .5, is considered a bullish indicator. It means more calls are being bought versus puts. The put-call ratio helps investors gauge market sentiment before the market turns. However, its important to look at the demand for both the numerator (the puts) and the denominator (the calls). The number of call options is found in the denominator of the ratio. That means a reduction in the number of traded calls will increase the value of the ratio. This is significant because fewer calls being bought can push the ratio higher without an increased number of puts being purchased. In other words, we dont need to see a large number of puts being purchased for the ratio to rise. As bullish traders sit on the sidelines, the result by default is that there are more bearish traders in the market. It doesnt necessarily mean the market is bearish, but rather that bullish traders are in a wait-and-see mode until an upcoming event occurs like an election, a Fed meeting, or a release of economic data. '

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
      <p>{revper}</p>
    </Panel>
    <Panel header="Debt To Equity" key="9">
      <p>{debt2eq}</p>
      <p><b>Using Debt 2 Equity</b></p>
      <p>{debt2eq2}</p>
      <p><b>Example of Debt 2 Equity</b></p>
      <p>{debt2eq3}</p>
    </Panel>
    <Panel header="Profit To Margin" key="10">
      <p>{profitmargin}</p>
      <p><b>Using Profit Margin</b></p>
      <p>{profitmargin2}</p>
      <p><b>Comparing Profit Margins</b></p>
      <p>{profitmargin3}</p>
    </Panel>
    <Panel header="Enterprise Value" key="11">
      <p>{ev}</p>
      <p><b>What does Enterprise Value Tell You</b></p>
      <p>{ev2}</p>
      <p><b>Enterprise Value as an Evaluation Method</b></p>
      <p>{ev3}</p>
    </Panel>
    <Panel header="Enterprise Value To Revenue" key="12">
      <p>{ev4}</p>
      <p><b>Example</b></p>
      <p>{ev5}</p>
    </Panel>
    <Panel header="Price To Sales" key="13">
    <p>{p2s}</p>
      <p><b>How to use Price To Sales</b></p>
      <p>{p2s2}</p>
    </Panel>
    <Panel header="Price To Book" key="14">
    <p>{p2b1}</p>
      <p><b>What Price-To-Book Ratio can tell you</b></p>
      <p>{p2b2}</p>
      <p><b>P/B Ratios & Public Companies</b></p>
      <p>{p2b3}</p>
      <p><b>Examples of How to Use the P/B Ratio</b></p>
      <p>{p2b4}</p>
    </Panel>
    <Panel header="Forward PE Ratio" key="15">
      <p>{forwardpe1}</p>
      <p><b>What does Forward PE Ratio tell you about a company?</b></p>
      <p>{forwardpe2}</p>
    </Panel>
    <Panel header="PEG Ratio" key="16">
      <p>{peg}</p>
      <p><b>What Does the Price/Earnings-to-Growth Ratio Tell You?</b></p>
      <p>{peg2}</p>
    </Panel>
    <Panel header="PE High" key="17">
      <p>{text}</p>
    </Panel>
    <Panel header="PE Low" key="18">
      <p>{text}</p>
    </Panel>
    <Panel header="Put Call Ratio" key="19">
    <p>{putcall}</p>
      <p><b>Understanding the put call</b></p>
      <p>{putcall2}</p>
    </Panel>
  </Collapse>

      </>
    );
  }
}

export default App