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
    id:'aging-parents',
    title:'Aging Parents',
    description:'Calculate how much you need to secure for your aging parents',
    Icon: Users,
    category:'Goals',
    path:'/resources/calculators/aging-parents'
  },
  {
    id:'child-education',
    title:'Child Education',
    description:'Calculate how much you need to secure for your child\'s education',
    Icon: Book,
    category:'Goals',
    path:'/resources/calculators/child-education'
  },
  {
    id:'child-marriage',
    title:'Child Marriage',
    description:'Calculate how much you need to secure for your child\'s marriage',
    Icon: Heart,
    category:'Goals',
    path:'/resources/calculators/child-marriage'
  },
  {
    id:'custom-goal',
    title:'Custom Goal',
    description:'Calculate how much you need to secure for your custom goal',
    Icon: Target,
    category:'Goals',
    path:'/resources/calculators/custom-goals'
  },
  {
    id:'dream-wedding',
    title:'Dream Wedding',
    description:'Calculate how much you need to secure for your dream wedding',
    Icon: Heart,
    category:'Goals',
    path:'/resources/calculators/dream-wedding' 
  },
  {id:'first-car',
    title:'First Car',
    description:'Calculate how much you need to secure for your first car',
    Icon: Car,
    category:'Goals',
    path:'/resources/calculators/first-car'
  },
  {
    id:'first-crore-goal',
    title:'First Crore Goal',
    description:'Calculate how much you need to secure for your first crore goal',  
    Icon: Target,
    category:'Goals',
    path:'/resources/calculators/first-crore'
  },
  {
    id:'home-goal',
    title:'Home Goal',
    description:'Calculate how much you need to secure for your home goal',
    Icon: Home,
    category:'Goals',
    path:'/resources/calculators/home-goal'
  },
  {
    id:'overseas-vacation',
    title:'Overseas Vacation Goal',
    description:'Calculate how much you need to secure for your overseas vacation',
    Icon: Globe,
    category:'Goals',
    path:'/resources/calculators/overseas-vacation'
  },
  {
    id:'recurring-world-tour',
    title:'Recurring World Tour',
    description:'Calculate how much you need to secure for your recurring world tour',
    Icon: Target,
    category:'Goals',
    path:'/resources/calculators/recurring-world-tour'
  }
];
