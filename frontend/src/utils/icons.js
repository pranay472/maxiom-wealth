import { 
    Shield, 
    TrendingUp, 
    PieChart, 
    Balance, 
    Award, 
    Compass,
    Target,
    Settings,
    RefreshCw,
    ChevronDown,
    ChevronUp
  } from 'lucide-react';
  
  // Trust Factors Icons
  export const trustFactorsIcons = {
    Shield,
    TrendingUp,
    PieChart,
    Balance,
    Award,
    Compass
  };
  
  // Services Icons
  export const servicesIcons = {
    Target,
    Settings,
    RefreshCw,
    Shield
  };
  
  // FAQ Icons
  export const faqIcons = {
    ChevronDown,
    ChevronUp
  };
  
  export default {
    ...trustFactorsIcons,
    ...servicesIcons,
    ...faqIcons
  };