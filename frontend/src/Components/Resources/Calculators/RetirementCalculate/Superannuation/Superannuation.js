import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import SuperannuationCalculator from './SuperannuationCalculator';
import { marked } from 'marked';

export const SuperannuationInfo = `
# Understanding Superannuation and Retirement Planning

## What is Superannuation?
Superannuation, also known as retirement savings, is a long-term investment strategy designed to provide financial security during retirement. It's a systematic approach to building wealth through regular contributions, investment returns, and compound growth over your working years.

## Key Components of Superannuation

### 1. Employer Contributions
- Mandatory contributions from your employer (typically 10-12% of salary)
- Forms the foundation of your retirement savings
- Tax-advantaged contributions up to certain limits

### 2. Personal Contributions
- Voluntary contributions to boost your retirement savings
- Can be made pre-tax (salary sacrifice) or post-tax
- Additional tax benefits available for eligible contributions
- Flexibility to adjust contribution levels based on your circumstances

### 3. Investment Returns
- Long-term compound growth on your contributions
- Diversified investment options to balance risk and return
- Professional fund management to optimize performance
- Regular monitoring and rebalancing of investments

## Factors Affecting Your Retirement Savings

### Age and Time Horizon
- Earlier start provides longer growth potential
- More time to recover from market fluctuations
- Power of compound interest works in your favor

### Contribution Levels
- Higher contributions lead to larger retirement corpus
- Balance between current needs and future security
- Take advantage of employer matching if available

### Investment Strategy
- Risk tolerance based on age and circumstances
- Diversification across asset classes
- Regular portfolio review and rebalancing
- Professional guidance for optimal returns

## Using the Superannuation Calculator

### How to Use
1. Enter your current age and planned retirement age
2. Input your current superannuation balance
3. Specify your annual salary and contribution rates
4. Adjust investment return and inflation assumptions
5. Review projected retirement balance and contributions

### Understanding Results
- Projected retirement balance shows estimated corpus
- Yearly contributions help plan your savings
- Investment returns demonstrate compound growth
- Use different scenarios to optimize your strategy

## Tips for Maximizing Your Superannuation

### Regular Monitoring
- Review your balance and contributions regularly
- Track investment performance
- Update personal details and beneficiaries
- Stay informed about policy changes

### Strategic Planning
- Consider salary sacrifice opportunities
- Take advantage of government co-contributions
- Review insurance coverage within super
- Plan for transition to retirement

### Risk Management
- Diversify investments appropriately
- Regular portfolio rebalancing
- Professional financial advice
- Consider changing needs with age

## Getting Professional Help
- Consult financial advisors for personalized strategy
- Regular review of retirement goals
- Tax optimization guidance
- Estate planning integration
`;

const Superannuation = () => {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5] relative">
        <div className="container">
          <div className="relative z-20">
            <SuperannuationCalculator />
            <div className="px-4 py-12">
              <div className="space-y-8">
                <section className="prose prose-lg max-w-none">
                  <div className="text-gray-600">
                    <div className="space-y-6" dangerouslySetInnerHTML={{ 
                      __html: marked(SuperannuationInfo, {
                        breaks: true,
                        gfm: true
                      }) 
                    }} />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Superannuation;