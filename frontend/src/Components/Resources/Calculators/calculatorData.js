import { 
  TrendingUp, 
  PiggyBank, 
  Landmark, 
  Wallet, 
  Repeat, 
  Calculator, 
  Calendar, 
  Clock 
} from 'lucide-react';

export const calculatorData = [
  {
    id: 'cagr',
    title: 'CAGR',
    description: 'Calculate the compounded annual growth of your investments over time',
    Icon: TrendingUp,
    category: 'Investment',
    path: '/resources/calculators/cagr'
  },
  {
    id: 'compound-interest',
    title: 'Compound Interest',
    description: "How can you make the most of your money? With compound interest, that's how!",
    Icon: PiggyBank,
    category: 'Investment',
    path: '/resources/calculators/compound-interest'
  },
  {
    id: 'fd',
    title: 'FD',
    description: 'Calculate and grow your money with fixed deposits',
    Icon: Landmark,
    category: 'Investment',
    path: '/resources/calculators/fd'
  },
  {
    id: 'ppf',
    title: 'Public Provident Fund (PPF)',
    description: 'Calculate your tax-free and risk-free earnings',
    Icon: Wallet,
    category: 'Investment',
    path: '/resources/calculators/ppf'
  },
  {
    id: 'rd',
    title: 'RD',
    description: 'Plan your finances wisely with our recurring deposit calculator',
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
    path: '/calculators/sip'
  },
  {
    id: 'sip-delay',
    title: 'SIP Delay Cost',
    description: 'Calculate how much you would potentially lose if you delay your SIP by a few years',
    Icon: Clock,
    category: 'Investment',
    path: '/calculators/sip-delay'
  }
];
