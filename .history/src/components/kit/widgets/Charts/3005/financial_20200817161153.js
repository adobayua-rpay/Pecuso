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
const grossprofit2 = 'Gross income (gross profit) is a well-known entry on the income statement, as it represents the core profitability of a company and its products. It is calculated by subtracting the costs of goods sold (COGS) from the total revenue. A company can use gross income to calculate the gross profit margin which provides a common way to analyze gross income. It can be used in comparison to direct competitors as the margins tend to be similar within industries. By watching gross income and profit margin, a company will know when to look deeper into the expenses and costs to find reasons for fluctuations. Also, it will benefit a company to know when they are running at a lower margin than competitors. This will allow them to analyze why and find solutions.  There are many reasons for you to watch gross income and profit margin. Watching for trends to see improving or deteriorating margins can speak volumes on the management and future of the company’s income. Profit margins vary widely by industry and by product type. Plenty of data exists to compare the margins of competitors. Calculating gross profit margin allows you to compare similar companies to each other and to the industry as a whole to determine relative profitability. Companies with higher gross income margins have a competitive edge over rivals. They may charge a higher price for their products leading to higher revenues. Or they may pay less for materials and labor to make the products leading to lower COGS. '
const totalrevenue = 'In business and economics, one of the most important measures for evaluating your success and progress is looking at the trends in your total revenue. You need to know this important measure so that you can eventually calculate your total profit for a business. Total revenue in economics refers to the total receipts from sales of a given quantity of goods or services. It is the total income of a business and is calculated by multiplying the quantity of goods sold by the price of the goods. For example, if Company A produces 100 widgets and sells them for $50 each, the total revenue would be 100 * $50 = $5,000. In economics, total revenue is often represented in a table or as a curve on a graph.'
const operatingrevenue='Operating revenue is revenue generated from a companys primary business activities. For example, a retailer produces revenue through merchandise sales, and a physician derives revenue from the medical services he/she provides. What constitutes operating revenue varies per business or industry.'
const operatingRevenue2 = 'For a successful company, operating revenue and income are the primary sources of earnings per share (EPS); this ratio is a key statistic for evaluating a firms stock price. EPS is defined as earnings available to common shareholders divided by common shares outstanding. A well-managed business can grow operating revenue and income by finding more customers and moving into new markets that generate higher earnings. As EPS increases, many investors and analysts consider the stock to be more valuable and the stock price increases.'
const netincome = 'Net income (NI), also called net earnings, is calculated as sales minus cost of goods sold, selling, general and administrative expenses, operating expenses, depreciation, interest, taxes, and other expenses. It is a useful number for investors to assess how much revenue exceeds the expenses of an organization. This number appears on a companys income statement and is also an indicator of a companys profitability.'
const rand = 'Research and development (R&D) includes activities that companies undertake to innovate and introduce new products and services. It is often the first stage in the development process. The goal is typically to take new products and services to market and add to the companys bottom line.'
const rand2 = 'The term R&D is widely linked to innovation both in the corporate and government world or the public and private sectors. R&D allows a company to stay ahead of its competition. Without an R&D program, a company may not survive on its own and may have to rely on other ways to innovate such as engaging in mergers and acquisitions (M&A) or partnerships. Through R&D, companies can design new products and improve their existing offerings.R&D is separate from most operational activities performed by a corporation. The research and/or development is typically not performed with the expectation of immediate profit. Instead, it is expected to contribute to the long-term profitability of a company. R&D may lead to patents, copyrights, and trademarks as discoveries are made and products created.Companies that set up and employ entire R&D departments commit substantial capital to the effort. They must estimate the risk-adjusted return on their R&D expenditures—which inevitably involves risk of capital—because there is no immediate payoff, and the return on investment (ROI) is uncertain. As more money is invested in R&D, the level of capital risk increases. Other companies may choose to outsource their R&D for a variety of reasons including size and cost.Companies across all sectors and industries undergo R&D activities. Corporations experience growth through these improvements and the development of new goods and services. Pharmaceuticals, semiconductors, and software/technology companies tend to spend the most on R&D. In Europe, R&D is known as research and technical or technological development (RTD).'
const currentassets = 'Current assets represent all the assets of a company that are expected to be conveniently sold, consumed, used, or exhausted through standard business operations with one year. Current assets appear on a companys balance sheet, one of the required financial statements that must be completed each year.'
const currentassets2 = 'The total current assets figure is of prime importance to the company management with regards to the daily operations of a business. As payments toward bills and loans become due at the end of each month, management must be ready to spend the necessary cash. The dollar value represented by the total current assets figure reflects the company’s cash and liquidity position and allows management to prepare for the necessary arrangements to continue business operations.Additionally, creditors and investors keep a close eye on the current assets of a business to assess the value and risk involved in its operations. Many use a variety of liquidity ratios, which represent a class of financial metrics used to determine a debtors ability to pay off current debt obligations without raising external capital. Such commonly used ratios include current assets, or its components, as a component of their calculations'
const totaliability = 'Total liabilities are the combined debts and obligations that an individual or company owes to outside parties. All assets of a company are either owned by the entity and classified as equity or are subject to future obligations and recorded as a liability. On the balance sheet, total liabilities plus equity must equal total assets.'
const cash = 'Cash and cash equivalents refers to the line item on the balance sheet that reports the value of a companys assets that are cash or can be converted into cash immediately. Cash equivalents include bank accounts and marketable securities, which are debt securities with maturities of less than 90 days. However, oftentimes cash equivalents do not include equity or stock holdings because they can fluctuate in value.Examples of cash equivalents include commercial paper, Treasury bills, and short-term government bonds with a maturity date of three months or less. Marketable securities and money market holdings are considered cash equivalents because they are liquid and not subject to material fluctuations in value.'
const cash2 = 'Why are debt and cash considered when valuing a firm? If the firm is sold to a new owner, the buyer has to pay the equity value (in acquisitions, the price is typically set higher than the market price) and must also repay the firms debts. Of course, the buyer gets to keep the cash available with the firm, which is why cash needs to be deducted. Think of two companies that have equal market caps. One has no debt on its balance sheet, while the other one is heavily indebted. The debt-laden company will be making interest payments on the debt over the years. So, even though the two companies have equal market caps, it would cost more to purchase the company with more debt. By the same token, imagine two companies with equal market caps of $250 million and no debt. One has negligible cash and cash equivalents and the other has $250 million in cash. The first company would have an enterprise value of $250 million, while the second companys EV would be $500 million. If a company with a market cap of $250 million carries $150 million as long-term debt, an acquirer would ultimately pay a lot more than $250 million to buy the company in its entirety. With the $150 million in debt, the total acquisition price would be $400 million. Although debt increases the purchase price, cash decreases the price.'
const debt = 'Debt is an amount of money borrowed by one party from another. Debt is used by many corporations and individuals as a method of making large purchases that they could not afford under normal circumstances. A debt arrangement gives the borrowing party permission to borrow money under the condition that it is to be paid back at a later date, usually with interest.'
const debt2 = 'In corporate finance, there is a lot of attention paid to the amount of debt a company has. A company that has a large amount of debt may not be able to make its interest payments if sales drop, putting the business in danger of bankruptcy. Conversely, a company that uses no debt may be missing out on important expansion opportunities. Different industries use debt differently, so the right amount of debt varies from business to business. When assessing the financial standing of a given company, therefore, various metrics are used to determine if the level of debt, or leverage, the company uses to fund operations is within a healthy range.'
const shortdebt = 'There are usually two types of debt, or liabilities, that a company accrues—financing and operating. The former is the result of actions undertaken to raise funding to grow the business, while the latter is the byproduct of obligations arising from normal business operations. Financing debt is normally considered to be long-term debt in that it is has a maturity date longer than 12 months and is usually listed after the current liabilities portion in the total liabilities section of the balance sheet. Operating debt arises from the primary activities that are required to run a business, such as accounts payable, and is expected to be resolved within 12 months, or within the current operating cycle, of its accrual. This is known as short-term debt and is usually made up of short-term bank loans taken out, or commercial paper issued, by a company, The value of the short-term debt account is very important when determining a companys performance. Simply put, the higher the debt to equity ratio, the greater the concern about company liquidity. If the account is larger than the companys cash and cash equivalents, this suggests that the company may be in poor financial health and does not have enough cash to pay off its impending obligations.'
const longdebt = 'Long-term debt is debt that matures in more than one year. Long-term debt can be viewed from two perspectives: financial statement reporting by the issuer and financial investing. In financial statement reporting, companies must record long-term debt issuance and all of its associated payment obligations on its financial statements. On the flip side, investing in long-term debt includes putting money into debt investments with maturities of more than one year.'
const sequity = 'For corporations, shareholder equity (SE), also referred to as shareholders equity and stockholders equity, is the corporations owners residual claim on assets after debts have been paid. Equity is equal to a firms total assets minus its total liabilities.Retained earnings is part of shareholder equity and is the percentage of net earnings that were not paid to shareholders as dividends. Retained earnings should not be confused with cash or other liquid assets. This is because years of retained earnings could be used for either expenses or any asset type to grow the business. Shareholders’ equity for a company that is a going concern is not the same as liquidation value. In liquidation, physical asset values have been reduced and other extraordinary conditions exist'
const sequity2 = 'Shareholder equity can be either negative or positive. If positive, the company has enough assets to cover its liabilities. If negative, the companys liabilities exceed its assets; if prolonged, this is considered balance sheet insolvency. For this reason, many investors view companies with negative shareholder equity as risky or unsafe investments. Shareholder equity alone is not a definitive indicator of a companys financial health; used in conjunction with other tools and metrics, the investor can accurately analyze the health of an organization.All the information needed to compute a companys shareholder equity is available on its balance sheet. Total assets include current and non-current assets. Current assets are assets that can be converted to cash within a year (e.g., cash, accounts receivable, inventory, et al.). Long-term assets are assets that cannot be converted to cash or consumed within a year (e.g. investments; property, plant, and equipment; and intangibles, such as patents). Total liabilities consist of current and long-term liabilities. Current liabilities are debts typically due for repayment within one year (e.g. accounts payable and taxes payable). Long-term liabilities are obligations that are due for repayment in periods longer than one year (e.g., bonds payable, leases, and pension obligations). Upon calculating the total assets and liabilities, shareholder equity can be determined. Shareholder equity is an important metric in determining the return being generated versus the total amount invested by equity investors. For example, ratios like return on equity (ROE), which is the result of a companys net income divided by shareholder equity, is used to measure how well a companys management is using its equity from investors to generate profit. '
const sequity3 = 'For example, assume that ABC company has total assets of $2.6 million and total liabilities of $920,000. Therefore, ABC shareholder equity is $1.68 million.As a real-world example, PepsiCo Inc.s (NYSE: PEP) total stockholders equity declined in the two year period from $17.4 billion in 2014 to $11.1 billion in 2016, which—depending on the reasons—might give analysts concern for the soda and snack food giants health.1﻿ In the same period, arch-rival Coca-Cola Corporations (NYSE: KO) total shareholder equity fell from $30.3 billion to $23.01 billion.2﻿ But the percentage drop isnt as great because Cokes liabilities and accounts payable also consistently decreased, while Pepsis increased, suggesting Coke had a better handle on its debt.'
const totalrevenue2 = 'Total revenue is the full amount of total sales of goods and services. It is calculated by multiplying the total amount of goods and services sold by the price of the goods and services. Marginal revenue is directly related to total revenue because it measures the change in the total revenue with respect to the change in another variable. Total revenue is important because, in the effort to grow profits, businesses strive to maximize the difference between their total revenues and total costs. Understanding the subtleties of the relationship between revenues and costs distinguishes the best business managers because while increasing production leads to an increase in sales and total revenue, there are also costs involved with increasing production'
const operatingincome2 = 'Operating income measures the profitability of a company’s core business operations. In this case, the core business is the main way that a company produces revenue. Most importantly, operating income excludes “non-operating” income and expense items that are technically not part of the core business operations but can be significant The biggest non-operating expense items are taxes and interest payments. But there is also a category called “other” non-operating income and expenses. Many of these “other” non-operating expenses are outside of a company’s control, and some of them are one-off items that have nothing to do with day-to-day operations.'
const netincome2 = 'Essentially, net income tells an investor if a company is profitable. When a company is able to retain more of their revenue, it means they will be more likely to pass along these profits to shareholders in the form of dividends or reinvest the money back into their business without having to take on debt. Both of these are positive signs that their stock may draw the interest of other investors and be set to go higher. It’s important, however, for investors to review net income in a historical context. Sometimes a positive net income number may be sharply lower than the number posted the previous quarter or at the previous quarter in the same period last year. This does not by itself mean the company is a risk, but it does mean that investors should exercise due diligence to determine as best they can the reason for the change in net income.'
const rand3 = 'The decision to spend on research & development can be a tough one for corporate finance managers as they make budgeting decisions. In a new report titled, "The Search for Creative Destruction," the Goldman analysts examine the connection between R&D spending, revenue growth, and stock price returns. We review Technology, Internet and Biotech names currently in the NASDAQ 100 and find a strong correlation between R&D and Sales Growth (8-year CAGR through 2012; R2 75%) and between the latter and stock price returns over this period (R2 71%)," they wrote In effect, companies with strong R&D spending also see the best stock returns. The relationship between sales growth and stock price gains may already be intuitive. But its interesting to see the the connection made to R&D, which is an expense. In our view, R&D reflects the continued commitment to adapt to and stay ahead in an ever-evolving competitive landscape," they write. While not all R&D spend implies that the money is being well-spent – i.e., it does not necessarily translate into new and innovative products or services, we do find a strong correlation with revenue growth."And thats something that should make investors happy'

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
      <p><b>Using Gross Profit as an indicator</b></p>
      <p>{grossprofit2}</p>
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
      <p><b>Total Revenue Importance</b></p>
      <p>{totalrevenue2}</p>

    </Panel>
    <Panel header="Operating Income" key="5">
      <p>{operatingincome}</p>
      <p><b>Operating Income Importance</b></p>
      <p>{operatingincome2}</p>
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
      <p><b>Why is netincome important to investors?</b></p>
      <p>{netincome2}</p>
      <Button type="link">About Net Income</Button>

    </Panel>
    <Panel header="Research and Development" key="9">
      <p>{rand}</p>
      <p><b>Understanding Research and Development (R&D)</b></p>
      <p>{rand2}</p>
      <p><b>Is R&D correlated to stock price returns?</b></p>
      <p>{rand3}</p>
      <Button type="link">About Research and Development</Button>

    </Panel>
    <Panel header="Current Assets" key="10">
    <p>{currentassets}</p>
      <p><b>Understanding Current Assets</b></p>
      <p>{currentassets2}</p>
      <Button type="link">About Current Assets</Button>

    </Panel>
    <Panel header="Total Assets" key="11">
      <p>{text}</p>
      <Button type="link">About Total Assets</Button>

    </Panel>
    <Panel header="Total Liabilities" key="12">
      <p>{totaliability}</p>
      <Button type="link">About Total Liabilities</Button>

    </Panel>
    <Panel header="Current Cash" key="13">
    <p>{cash}</p>
      <p><b>What Cash & Cash Equivalents can tell you about a stock or a business</b></p>
      <p>{cash2}</p>
      <Button type="link">About Current Cash</Button>

    </Panel>
    <Panel header="Current Debt" key="14">
    <p>{debt}</p>
      <p><b>Good Debt vs Bad Debt</b></p>
      <p>{debt2}</p>
      <Button type="link">About Current Debt</Button>

    </Panel>
    <Panel header="Short Term Debt" key="15">
      <p>{shortdebt}</p>
      <Button type="link">About Short Term Debt</Button>

    </Panel>
    <Panel header="Long Term Debt" key="16">
      <p>{longdebt}</p>
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
    <p>{sequity}</p>
      <p><b>What shareholder equity can tell you</b></p>
      <p>{sequity2}</p>
      <p><b>Real Life Examples of Share Holder Equity</b></p>
      <p>{sequity3}</p>
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