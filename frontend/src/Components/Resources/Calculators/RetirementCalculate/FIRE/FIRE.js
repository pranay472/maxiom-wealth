import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import FIRECalculator from './FIRECalculator';
import { marked } from 'marked';

export const FIREInfo = `
# Understanding FIRE (Financial Independence, Retire Early)

## What is FIRE?
FIRE is a financial movement that emphasizes aggressive saving and investing with the goal of retiring much earlier than traditional retirement age. The core principle is to accumulate assets that generate enough passive income to cover your living expenses, typically targeting 25-30 times your annual expenses.

## The FIRE Number
Your FIRE number is the amount of money you need to have invested to live off your portfolio indefinitely. The calculation is based on:
- Annual Expenses × 25 (using the 4% withdrawal rule)
- Adjustments for inflation and lifestyle choices
- Buffer for unexpected expenses and market fluctuations

## Key Strategies

### 1. Maximize Savings Rate
- Save 50-70% of your income
- Reduce current expenses without sacrificing quality of life
- Focus on both big and small cost-cutting opportunities
- Maintain an emergency fund for unexpected expenses

### 2. Smart Investment Approach
- Invest in low-cost index funds
- Diversify across asset classes
- Consider real estate investments
- Regular portfolio rebalancing
- Tax-efficient investment strategies

### 3. Income Optimization
- Develop multiple income streams
- Maximize earning potential through upskilling
- Consider side hustles and passive income sources
- Take advantage of employer benefits and matches

## FIRE Variations

### Traditional FIRE
- Target: 25x annual expenses
- Full retirement from work
- Balanced lifestyle approach
- Standard 4% withdrawal rate

### Lean FIRE
- Lower target amount (15-20x expenses)
- Minimalist lifestyle
- Lower annual expenses
- Faster path to independence

### Fat FIRE
- Higher target (30-40x expenses)
- Maintain luxurious lifestyle
- More financial buffer
- Typically requires high income

## Risk Management

### Health and Insurance
- Maintain adequate health coverage
- Consider long-term care insurance
- Keep emergency medical fund
- Stay physically active

### Market Volatility
- Build in safety margins
- Maintain flexible withdrawal rates
- Keep 2-3 years of expenses in cash
- Regular portfolio review

### Lifestyle Adjustments
- Practice living on reduced budget
- Test retirement lifestyle before committing
- Build strong social networks
- Develop post-retirement activities

## Using Our Calculator

### Input Guidelines
1. Be realistic with current expenses
2. Include all income sources
3. Use conservative return estimates
4. Factor in inflation impact

### Results Analysis
- Review required corpus amount
- Assess savings rate adequacy
- Evaluate timeline feasibility
- Consider multiple scenarios

## Next Steps
1. Track your expenses meticulously
2. Create a detailed FIRE plan
3. Start optimizing investments
4. Regular progress reviews
5. Adjust strategy as needed

Remember: FIRE is not just about retiring early - it's about gaining financial independence and the freedom to make life choices without monetary constraints.
`;

const FIRE = () => {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5] relative">
        <div className="container">
          <div className="relative z-20">
            <FIRECalculator />
            <div className="px-4 py-12">
              <div className="space-y-8">
                <section className="prose prose-lg max-w-none">
                  <div className="text-gray-600">
                    <div className="space-y-6" dangerouslySetInnerHTML={{ 
                      __html: marked(FIREInfo, {
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

export default FIRE;