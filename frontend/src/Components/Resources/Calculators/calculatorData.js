import { 
  TrendingUp, 
  PiggyBank, 
  Landmark, 
  Wallet, 
  Repeat, 
  Calculator, 
  Calendar, 
  Clock,
  Rocket,
  Sigma,
  Users,
  Book,
  Heart,
  Target,
  Car,
  Home,
  Globe
} from 'lucide-react';

export const calculatorData = [
  {
    id: 'cagr',
    title: 'CAGR Tracker',
    description: 'Track Your Wealth Growth with CAGR Calculator',
    Icon: TrendingUp,
    category: 'Investment',
    path: '/resources/calculators/cagr'
  },
  {
    id: 'compound-interest',
    title: 'Compound Interest Tool',
    description: "Boost Savings with Compound Interest Calculator",
    Icon: PiggyBank,
    category: 'Investment',
    path: '/resources/calculators/compound-interest'
  },
  {
    id: 'fd',
    title: 'FD Returns Estimator',
    description: 'Maximise FD Returns with Fixed Deposit Calculator',
    Icon: Landmark,
    category: 'Investment',
    path: '/resources/calculators/fd'
  },
  {
    id: 'ppf',
    title: 'PPF Planner',
    description: 'Secure Your Future with PPF Calculator',
    Icon: Wallet,
    category: 'Investment',
    path: '/resources/calculators/ppf'
  },
  {
    id: 'rd',
    title: 'Recurring Deposit Planner',
    description: 'Save Consistently with Recurring Deposit Calculator',
    Icon: Repeat,
    category: 'Investment',
    path: '/resources/calculators/rd'
  },
  {
    id: 'simple-interest',
    title: 'Simple Interest',
    description: 'Know your Payment Plan',
    Icon: Calculator,
    category: 'Investment',
    path: '/resources/calculators/simple-interest'
  },
  {
    id: 'sip',
    title: 'SIP',
    description: 'Calculate how much you can make if you invest a fixed amount per month for "n" years',
    Icon: Calendar,
    category: 'Investment',
    path: '/resources/calculators/sip'
  },
  {
    id: 'sip-delay',
    title: 'SIP Delay Cost',
    description: 'Calculate how much you would potentially lose if you delay your SIP by a few years',
    Icon: Clock,
    category: 'Investment',
    path: '/resources/calculators/sip-delay'
  },
  {
    id:'sip-growth',
    title:'SIP Growth Calculator',
    description:'Calculate the growth of your SIP over time',
    Icon: Rocket,
    category:'Investment',
    path:'/resources/calculators/sip-growth'
  },
  {
    id:'weighted-average-returns',
    title:'Weighted Average Returns',
    description:'Calculate the weighted average returns of your investments',
    Icon: Sigma,
    category:'Investment',
    path:'/resources/calculators/weighted-returns'
  },
  {
    id: 'mutual-fund',
    title: 'Mutual Fund Calculator',
    description: 'Calculate returns and growth of your mutual fund investments',
    Icon: TrendingUp,
    category: 'Investment',
    path: '/resources/calculators/mutual-fund'
  },
  {
    id: 'elss',
    title: 'ELSS Calculator',
    description: 'Calculate returns on tax-saving ELSS mutual fund investments',
    Icon: Calculator,
    category: 'Investment',
    path: '/resources/calculators/elss'
  },
  {
    id: 'lumpsum-investment',
    title: 'Lumpsum Investment Calculator',
    description: 'Calculate returns on one-time investment amounts',
    Icon: Wallet,
    category: 'Investment',
    path: '/resources/calculators/lumpsum'
  },
  {
    id: 'swp',
    title: 'SWP Calculator',
    description: 'Calculate Systematic Withdrawal Plan returns',
    Icon: Repeat,
    category: 'Investment',
    path: '/resources/calculators/swp'
  },
  {
    id: 'future-value',
    title: 'Future Value Calculator',
    description: 'Calculate the future value of your investments',
    Icon: Target,
    category: 'Investment',
    path: '/resources/calculators/fv'
  },
  {
    id:'custom-goal',
    title:'Custom Goal Tracker',
    description:'Achieve Any Financial Goals with Custom Goal Calculator',
    Icon: Target,
    category:'Investment',
    path:'/resources/calculators/custom-goals'
  },
  {
    id: 'epf-calculator',
    title: 'EPF Calculator',
    description: 'Calculate your Employee Provident Fund returns',
    Icon: PiggyBank,
    category: 'Investment',
    path: '/resources/calculators/epf'
  },
  {
    id: 'sukanya-samriddhi',
    title: 'Sukanya Samruddi Yojana',
    description: 'Calculate returns from Sukanya Samriddhi Yojana investment',
    Icon: Heart,
    category: 'Investment',
    path: '/resources/calculators/sukanya-samriddhi'
  },
  {
    id: 'portfolio-rebalancing',
    title: 'Portfolio Rebalancing Calculator',
    description: 'Analyze investments with this rebalancing calculator.',
    Icon: Heart,
    category: 'Investment',
    path: '/resources/calculators/portfolio-rebalancing'
  },
  {
    id: 'stock-return',
    title: 'Stock Return Calculator',
    description: 'Calculate returns from stock investments',
    Icon: Heart,
    category: 'Investment',
    path: '/resources/calculators/stock-return'
  },
  {
    id: 'dividend-yield',
    title: 'Dividend Yield Calculator',
    description: 'Estimate dividend yields with this calculator.',
    Icon: Heart,
    category: 'Investment',
    path: '/resources/calculators/dividend-yield'
  },{
    id: 'gold-investment',
    title: 'Gold Investment Calculator',
    description: 'Calculate gold returns with this calculator.',
    Icon: Heart,
    category: 'Investment',
    path: '/resources/calculators/gold-investment'
  },{
    id: 'better-funds-checker',
    title: 'Better Funds Checker',
    description: 'Check impact of getting stuck in bad investmetns with Better Funds Calculator',
    Icon: Heart,
    category: 'Investment',
    path: '/resources/calculators/better-funds-checker'
  },
  {
    id: 'savings-goal',
    title: 'Savings Goal Calculator',
    description: 'Estimate savings with this calculator.',
    Icon: Heart,
    category: 'personal-fin',
    path: '/resources/calculators/savingsgoal'
  },
  {
    id: 'emergency-fund',
    title: 'Emergency Fund Calculator',
    description: 'Determine emergency savings with this calculator.',
    Icon: Heart,
    category: 'personal-fin',
    path: '/resources/calculators/emergencyfund'
  },
  {
    id: 'debt-repay',
    title: 'Debt Repayment Calculator',
    description: 'Plan debt repayments with this calculator.',
    Icon: Heart,
    category: 'personal-fin',
    path: '/resources/calculators/debt-repay'
  },
  {
    id: 'credit-card',
    title: 'Credit Card Payoff Calculator',
    description: 'Calculate credit card payoff with this calculator.',
    Icon: Heart,
    category: 'personal-fin',
    path: '/resources/calculators/credit-card'
  },
  {
    id: 'net-worth',
    title: 'Net Worth Calculator',
    description: 'Assess financial health with this calculator.',
    Icon: Heart,
    category: 'personal-fin',
    path: '/resources/calculators/net-worth'
  },
  {
    id:'aging-parents',
    title:'Aging Parents',
    description:'Calculate how much you need to secure for your aging parents',
    Icon: Users,
    category:'Family',
    path:'/resources/calculators/aging-parents'
  },
  {
    id:'child-education',
    title:'Child Education',
    description:'Calculate how much you need to secure for your child\'s education',
    Icon: Book,
    category:'Family',
    path:'/resources/calculators/child-education'
  },
  {
    id:'child-marriage',
    title:'Child Marriage',
    description:'Calculate how much you need to secure for your child\'s marriage',
    Icon: Heart,
    category:'Family',
    path:'/resources/calculators/child-marriage'
  },
  {
    id:'travel-budget',
    title:'Travel Budget Calculator',
    description:'Plan travel budgets with this calculator',
    Icon: Globe,
    category:'Goals',
    path:'/resources/calculators/travel-budget'
  },
  {
    id:'wedding-budget',
    title:'Wedding Budget Planner',
    description:'Break down wedding costs with this calculator',
    Icon: Heart,
    category:'Goals',
    path:'/resources/calculators/wedding-budget'
  },
  {
    id:'home-renovation-budget',
    title:'Home Renovation Budget Planner',
    description:'Calculate renovation costs with this calculator.',
    Icon: Landmark,
    category:'Goals',
    path:'/resources/calculators/home-renovation-budget'
  },
  {
    id:'dream-wedding',
    title:'Dream Wedding Fund',
    description:'Plan a memorable wedding with Dream Wedding Fund Calculator',
    Icon: Heart,
    category:'Goals',
    path:'/resources/calculators/dream-wedding' 
  },
  {id:'first-car',
    title:'First Car Planner',
    description:'Get moving with First Car Calculator',
    Icon: Car,
    category:'Goals',
    path:'/resources/calculators/first-car'
  },
  {
    id:'first-crore-goal',
    title:'First Crore Goal',
    description:'Become a Crorepati with First Crore Goal Calculator',  
    Icon: Target,
    category:'Goals',
    path:'/resources/calculators/first-crore'
  },
  {
    id:'home-goal',
    title:'Home Purchase Planner',
    description:'Secure your dream home with Home Goal Calculator',
    Icon: Home,
    category:'Goals',
    path:'/resources/calculators/home-goal'
  },
  {
    id:'overseas-vacation',
    title:'Vacation Goal Planner',
    description:'Become a Jetsetter with Overseas Vacation Goal Calculator',
    Icon: Globe,
    category:'Goals',
    path:'/resources/calculators/overseas-vacation'
  },
  {
    id:'recurring-world-tour',
    title:'Recurring Vacation Fund',
    description:'Become a Frequent Flying Jetsetter with Recurring Vacation Goal Calculator',
    Icon: Target,
    category:'Goals',
    path:'/resources/calculators/recurring-world-tour'
  },
  {
    id: 'car-loan-emi',
    title: 'Car Loan EMI',
    description: 'Calculate your monthly EMI for car loan',
    Icon: PiggyBank,
    category: 'Loan',
    path: '/resources/calculators/car-loan-emi'
  },
  {
    id: 'emi',
    title: 'EMI',
    description: 'Calculate Equated Monthly Installments for your loan',
    Icon: Sigma,
    category: 'Loan',
    path: '/resources/calculators/emi'
  },
  {
    id: 'home-loan-emi',
    title: 'Home Loan EMI',
    description: 'Calculate your monthly EMI for home loan',
    Icon: Landmark,
    category: 'Loan',
    path: '/resources/calculators/home-loan-emi'
  },
  {
    id: 'personal-loan-emi',
    title: 'Personal Loan EMI',
    description: 'Calculate your monthly EMI for personal loan',
    Icon: Users,
    category: 'Loan',
    path: '/resources/calculators/personal-loan-emi'
  },
  {
    id: 'education-loan-emi',
    title: 'Education Loan EMI',
    description: 'Calculate your monthly EMI for education loan',
    Icon: Target,
    category: 'Loan',
    path: '/resources/calculators/education-loan-emi'
  },
  {
    id: 'home-extension-loan',
    title: 'Home Extension/Renovation Loan Calculator',
    description: 'Calculate loan EMI for your home renovation or extension',
    Icon: Rocket,
    category: 'Loan',
    path: '/resources/calculators/home-extension-loan'
  },
  {
    id: 'land-construction-loan',
    title: 'Land Construction Loan Calculator',
    description: 'Calculate loan EMI for land construction',
    Icon: Globe,
    category: 'Loan',
    path: '/resources/calculators/land-construction-loan'
  },
  {
    id: 'marriage-loan',
    title: 'Marriage Loan Calculator',
    description: 'Calculate loan EMI for marriage expenses',
    Icon: Calendar,
    category: 'Loan',
    path: '/resources/calculators/marriage-loan'
  },
  {
    id: 'loan-eligibility',
    title: 'Loan Eligibility Calculator',
    description: 'Assess loan eligibility with this calculator.',
    Icon: Calendar,
    category: 'Loan',
    path: '/resources/calculators/loan-eligibility'
  },
  {
    id: 'top-up-loan',
    title: 'Top-Up Loan Calculator',
    description: 'Calculate loan EMI for top-up expenses',
    Icon: Calendar,
    category: 'Loan',
    path: '/resources/calculators/top-up-loan'
  },
  {
    id: 'balance-transfer',
    title: 'Balance Transfer Calculator',
    description: 'Calculate loan EMI for balance transfer expenses',
    Icon: Calendar,
    category: 'Loan',
    path: '/resources/calculators/balance-transfer'
  },
  {
    id: 'inflation',
    title: 'Inflation',
    description: 'Calculate the impact of inflation on your money',
    Icon: TrendingUp,
    category: 'Miscellaneous',
    path: '/resources/calculators/inflation'
  },
  {
    id: 'single-amount',
    title: 'Single Amount',
    description: 'Calculate returns for one-time investments',
    Icon: Wallet,
    category: 'Miscellaneous',
    path: '/resources/calculators/single-amount'
  },
  {
    id: 'gratuity',
    title: 'Gratuity Calculator',
    description: 'Calculate your gratuity amount',
    Icon: Calculator,
    category: 'Miscellaneous',
    path: '/resources/calculators/gratuity'
  },
  {
    id: 'brokerage',
    title: 'Brokerage Calculator',
    description: 'Calculate brokerage charges for your trades',
    Icon: Landmark,
    category: 'Miscellaneous',
    path: '/resources/calculators/brokerage'
  },
  {
    id: 'margin',
    title: 'Margin Calculator',
    description: 'Calculate trading margin requirements',
    Icon: Sigma,
    category: 'Miscellaneous',
    path: '/resources/calculators/margin'
  },
  {
    id: 'option-value',
    title: 'Option Value Calculator',
    description: 'Calculate option values and premiums',
    Icon: Target,
    category: 'Miscellaneous',
    path: '/resources/calculators/option-value'
  },
  {
    id: 'ebidta-margin',
    title: 'EBIDTA Margin Calculator',
    description: 'Calculate Earnings Before Interest, Depreciation, Taxes, and Amortization margin',
    Icon: Calculator,
    category: 'Miscellaneous',
    path: '/resources/calculators/ebidta-margin'
  },
  {
    id: 'fund-switch',
    title: 'Moving from poor funds to better funds',
    description: 'Calculate the benefit of switching from underperforming to better performing funds',
    Icon: Repeat,
    category: 'Miscellaneous',
    path: '/resources/calculators/fund-switch'
  },
  {
    id: 'retirement-plan',
    title: 'Retirement Plan Calculator',
    description: 'Plan your retirement savings and estimate your retirement corpus',
    Icon: Target,
    category: 'Retirement',
    path: '/resources/calculators/retirement-plan'
  },
  {
    id: 'superannuation',
    title: 'Superannuation',
    description: 'Calculate your superannuation benefits and retirement savings',
    Icon: PiggyBank,
    category: 'Retirement',
    path: '/resources/calculators/superannuation'
  },
  {
    id: 'fire',
    title: 'Achieve early/fire retirement',
    description: 'Plan your path to financial independence and early retirement',
    Icon: Rocket,
    category: 'Retirement',
    path: '/resources/calculators/fire'
  },
  {
    id: 'gratuity',
    title: 'Gratuity Estimator',
    description: 'Know how much you will get from your employer with Gratuity Calculator',
    Icon: Rocket,
    category: 'Retirement',
    path: '/resources/calculators/gratuity'
  },
  {
    id: 'pension',
    title: 'Pension Calculator',
    description: 'Estimate retirement pensions with this calculator.',
    Icon: PiggyBank,
    category: 'Retirement',
    path: '/resources/calculators/pension'
  },
  {
    id: 'post-retirement-expenses',
    title: 'Post-Retirement Expenses Calculator',
    description: 'Plan retirement expenses with this calculator.',
    Icon: PiggyBank,
    category: 'Retirement',
    path: '/resources/calculators/post-retirement-expenses'
  },
  {
    id: 'reverse-mortgage',
    title: 'Reverse Mortgage Calculator',
    description: 'Evaluate reverse mortgage benefits with this calculator.',
    Icon: Rocket,
    category: 'Retirement',
    path: '/resources/calculators/reverse-mortgage'
  },
  {
    id: 'nps-reinvestment',
    title: 'NPS Reinvestment in annuity',
    description: 'Calculate returns on NPS reinvestment in annuity schemes',
    Icon: Repeat,
    category: 'Retirement',
    path: '/resources/calculators/nps-reinvestment'
  },
  {
    id: 'nps',
    title: 'NPS Calculator',
    description: 'Calculate returns on National Pension System investments',
    Icon: PiggyBank,
    category: 'Retirement',
    path: '/resources/calculators/nps'
  },
  {
    id: 'student-loan',
    title: 'Student Loan Calculator',
    description: 'Plan student loan repayments with this calculator.',
    Icon: PiggyBank,
    category: 'EducationCareer',
    path: '/resources/calculators/student-loan'
  },
  {
    id: 'career-growth-planner',
    title: 'Career Growth Planner',
    description: 'Estimate career growth benefits with this calculator.',
    Icon: PiggyBank,
    category: 'EducationCareer',
    path: '/resources/calculators/career-growth-planner'
  },
  {
    id: 'gst',
    title: 'GST Calculator',
    description: 'Calculate GST amounts with this calculator.',
    Icon: PiggyBank,
    category: 'Tax',
    path: '/resources/calculators/gst'
  },
  {
    id: 'hra-exemption',
    title: 'HRA Exemption Calculator',
    description: 'Maximize HRA exemptions with this calculator.',
    Icon: PiggyBank,
    category: 'Tax',
    path: '/resources/calculators/hra-exemption'
  },
  {
    id: 'capital-gains-tax',
    title: 'Capital Gains Tax Calculator',
    description: 'Calculate capital gains taxes with this calculator..',
    Icon: PiggyBank,
    category: 'Tax',
    path: '/resources/calculators/capital-gains-tax'
  },
  {
    id: 'freelancer-income-tax',
    title: 'Freelancer Income Tax Calculator',
    description: 'Calculate freelancer taxes with this calculator.',
    Icon: PiggyBank,
    category: 'Tax',
    path: '/resources/calculators/freelancer-income-tax'
  },
  {
    id: 'irregular-cash-flow',
    title: 'Irregular Cash Flow',
    description: 'Calculate returns for irregular cash flow investments',
    Icon: Repeat,
    category: 'Incomeflow',
    path: '/resources/calculators/irregular-cash-flow'
  },
  {
    id: 'rental-yield',
    title: 'Rental Yield Calculator',
    description: 'Calculate the yield from your rental property',
    Icon: Home,
    category: 'Incomeflow',
    path: '/resources/calculators/rental-yield'
  },
  {
    id: 'rental-yield',
    title: 'Brokerage Cost Tool',
    description: 'Know costs of trading with Brokerage Calculator',
    Icon: Home,
    category: 'Trading',
    path: '/resources/calculators/brokerage-cost-tool'
  },
  {
    id: 'margin',
    title: 'Margin Calculator',
    description: 'Plan your trading better with Margin Calculator',
    Icon: Sigma,
    category: 'Trading',
    path: '/resources/calculators/margin'
  },
  {
    id: 'option-value',
    title: 'Option Value Estimator',
    description: 'Plan your derivatives better with Option Value Calculator',
    Icon: Target,
    category: 'Trading',
    path: '/resources/calculators/option-value'
  },
];
