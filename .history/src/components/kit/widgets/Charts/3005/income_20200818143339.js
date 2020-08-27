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
const netincome = 'Net income (NI), also called net earnings, is calculated as sales minus cost of goods sold, selling, general and administrative expenses, operating expenses, depreciation, interest, taxes, and other expenses. It is a useful number for investors to assess how much revenue exceeds the expenses of an organization. This number appears on a companys income statement and is also an indicator of a companys profitability.'
const totaliability = 'Total liabilities are the combined debts and obligations that an individual or company owes to outside parties. All assets of a company are either owned by the entity and classified as equity or are subject to future obligations and recorded as a liability. On the balance sheet, total liabilities plus equity must equal total assets.'
const totalrevenue2 = 'Total revenue is the full amount of total sales of goods and services. It is calculated by multiplying the total amount of goods and services sold by the price of the goods and services. Marginal revenue is directly related to total revenue because it measures the change in the total revenue with respect to the change in another variable. Total revenue is important because, in the effort to grow profits, businesses strive to maximize the difference between their total revenues and total costs. Understanding the subtleties of the relationship between revenues and costs distinguishes the best business managers because while increasing production leads to an increase in sales and total revenue, there are also costs involved with increasing production'
const operatingincome2 = 'Operating income measures the profitability of a company’s core business operations. In this case, the core business is the main way that a company produces revenue. Most importantly, operating income excludes “non-operating” income and expense items that are technically not part of the core business operations but can be significant The biggest non-operating expense items are taxes and interest payments. But there is also a category called “other” non-operating income and expenses. Many of these “other” non-operating expenses are outside of a company’s control, and some of them are one-off items that have nothing to do with day-to-day operations.'
const ebit = 'Earnings before interest and taxes (EBIT) is an indicator of a companys profitability. EBIT can be calculated as revenue minus expenses excluding tax and interest. EBIT is also referred to as operating earnings, operating profit, and profit before interest and taxes.'
const ebit2 = 'Earnings before interest and taxes measures the profit a company generates from its operations making it synonymous with operating profit. By ignoring taxes and interest expense, EBIT focuses solely on a companys ability to generate earnings from operations, ignoring variables such as the tax burden and capital structure. EBIT is an especially useful metric because it helps to identify a companys ability to generate enough earnings to be profitable, pay down debt, and fund ongoing operations.'
const interestincome = 'Earnings generated by investments such as savings accounts and certificates of deposit are referred to as interest income. For financial companies, revenue minus expenses is referred to as net interest income. Net interest income is a basic measure of earnings among financial companies, especially banks. Net interest income is the difference between the revenue generated by assets — loans, mortgages, and securities — and the interest costs on liabilities, such deposits in checking and savings accounts, and CDs. Consumer banks generate the bulk of their interest income from mortgage loans, personal loans, and auto loans. When you make a recurring loan payment on your mortgage, the portion of each payment covering interest comprises the bank’s interest income on the loan. Investment banks and other financial institutions generate interest income from securities and a variety of investments. Banks typically front-load interest at the beginning of recurring loan payments to manage risk and secure profits. As customers pay down their loans, interest income declines over the life of the loans'
const pretaxincome = 'Pretax earnings is a companys income after all operating expenses, including interest and depreciation, have been deducted from total sales or revenues, but before income taxes have been subtracted. Because pretax earnings exclude taxes, this measure enables the intrinsic profitability of companies to be compared across industries or geographic regions where corporate taxes differ. For instance, while U.S.-based corporations face the same tax rates at the federal level, they face different tax rates at the state level.'
const pretaxincome2 = 'Taxes affect the overall earnings of a company. Pretax earnings, hence, provide an insight into the company’s financial performance and standing before its tax expense affects the net earnings and brings about any fluctuations. When performing an inter-company or an intra-company financial analysis or comparison, the year-by-year tax expense of an organization is noticeably volatile. This is because it depends not only on the yearly level of its earnings, but also depends on the tax slabs or tax rates which differ from one country to another, or even from one province to another. An assessment of pretax income, as opposed to net earnings after tax, facilitates a much smoother and bias-free comparison of the organization over time, as well as a comparison to other companies. Looking at pretax income eliminates any discrepancies or effects that a tax expense could leave on an organization’s earnings. Another significance of pretax earnings is that it helps provide a more consistent and firm measure of the overall financial performance and fiscal health of a company over time. Pretax earnings eliminate the volatile differences that arise when tax considerations are accounted for. Pretax earnings also help to accurately assess the profitability of a company. The pretax earnings margin is the ratio of a company’s pretax earnings to its total sales. The higher the ratio, the more profitable the position of the company. Using the information provided above, the pretax earnings margin for Company ABC is $6,915,000 / $8,000,000 (Pretax Earnings/Total Sales) = 87%.'
//Understanding the importance of pretax income
const minorityinterest = 'A minority interest is ownership or interest of less than 50% of an enterprise. The term can refer to either stock ownership or a partnership interest in a company. The minority interest of a company is held by an investor or another organization other than the parent company. Minority interests generally come with some rights for the stakeholder such as the participation in sales and certain audit rights. A minority interest shows up as a noncurrent liability on the balance sheet of companies with a majority interest in a company. This represents the proportion of its subsidiaries owned by minority shareholders.'
const minorityinterest2 = 'Minority interests are the portion of a company or stock not held by the parent company, which has a majority interest. Most minority interests range between 20% and 30%. While the majority stakeholder—in most cases, the parent company—has voting rights to set policy and procedures, the minority stakeholders generally have very little say or influence in the direction of the company. Thats why its also referred to as non-controlling interests (NCIs). In some cases, a minority may have some rights such as the ability to take part in sales. There are laws that also allow minority interest holders to certain audit rights. They also may be able to attend shareholder or partnership meetings. In the world of private equity, companies and investors with a minority interest may be able to negotiate control rights. For example, venture capitalists may ask to negotiate for a seat on the board of directors in exchange for his investment in a startup. In the corporate world, a corporation lists minority ownership on its balance sheet. In addition to being reflected on the balance sheet, a minority interest is reported on the consolidated income statement as a share of profit belonging to minority equity holders.'
//Understanding minority interest
const netincomebasic = ''
const sellingGeneraladmin = 'Selling, general and administrative expense (SG&A) is reported on the income statement as the sum of all direct and indirect selling expenses and all general and administrative expenses (G&A) of a company. SG&A, also known as SGA, includes all the costs not directly tied to making a product or performing a service. That is, SG&A includes the costs to sell and deliver products and services and the costs to manage the company.  SG&A is not assigned to manufacturing costs as it deals with all the other factors that come with creating a product. This includes the salaries of various department staff such as accounting, IT, marketing, human resources, etc. It also includes commissions, advertising, and any promotional materials. In addition, rent, utilities, and supplies that are not part of manufacturing are included in SG&A. SG&A includes nearly everything that isnt included in the cost of goods sold (COGS). On the income statement, COGS is deducted from the net revenue figure to determine the gross margin. Below gross margin, SG&A and any other expenses are listed. When these expenses are deducted from the gross margin, the result is net income. Interest expense is one of the notable expenses not included in SG&A; it has its own line on the income statement. Also, research and development costs are not included in SG&A. '
const sellingGeneraladmin2 = 'SG&A plays a key role in a companys profitability and the calculation of its break-even point, which is the point at which revenue generated and expenses incurred are the same. Its also one of the easiest places to look when trying to boost profitability. Cutting operating expenses, such as non-sales personnel salaries, can usually be done quickly and without disrupting the manufacturing or sales processes. SG&A is also one of the first places managers look to reduce redundancies during mergers or acquisitions. Following a merger, there are a number of redundant positions and employees. This area is an easy target for a management team thats looking to quickly boost profits. For example, the day that DuPont and Dow Chemical announced their merger in 2015, the companies announced 5,400 job cuts in an effort to save $750 million in expenses.'
//Understanding and using selling general admin


class App extends React.Component {
 
  render() {
    return (
      <>
  <Collapse defaultActiveKey={['1']} onChange={callback}>
    <Panel header="EBIT" key="1">
      <p>{ebit}</p>
      <p><b>Understanding EBIT and using it</b></p>
      <p>{ebit2}</p>
      <p>
          <Button type="link">Compare EBIT</Button>
      </p>
    </Panel>
    <Panel header="Interest Income" key="2">
      <p>{interestincome}</p>
    </Panel>
    <Panel header="Pre Tax Income" key="3">
      <p>{pretaxincome}</p>
      <p><b>Understanding Pre Tax Income and using it</b></p>
      <p>{pretaxincome2}</p>
      <p>
          <Button type="link">Compare Pre Tax Income</Button>
      </p>

    </Panel>
    <Panel header="Minority Interest" key="13" disabled>
      <p>{minorityinterest}</p>
      <p><b>Understanding & Using Minority Interest</b></p>
      <p>{minorityinterest2}</p>
      <Button type="link">Compare Minority Interest</Button>

    </Panel>
    <Panel header="Selling General & Admin" key="4">
      <p>{sellingGeneraladmin}</p>
      <p><b>About & Using Selling General & Admin</b></p>
      <p>{sellingGeneraladmin2}</p>
      <Button type="link">Compare Selling General & Admin</Button>

    </Panel>
  </Collapse>

      </>
    );
  }
}

export default App