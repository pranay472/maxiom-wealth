import { Shield, Target, TrendingUp, Award, Users, BarChart2, LineChart } from 'lucide-react';

export const benefitCardData = {
    title: "Tax Optimization",
    description: "Strategic planning to minimize tax liability while ensuring compliance with all regulations.",
    icon: Shield
};

export const expertisePointData = {
    title: "Tax Planning Expertise",
    description: "Years of experience in providing comprehensive tax planning solutions for individuals and businesses.",
    icon: Target,
    stats: [
        { value: "95%", label: "Client Satisfaction" },
        { value: "15+", label: "Years Experience" },
        { value: "500+", label: "Clients Served" }
    ]
};

export const serviceDetailData = {
    title: "Comprehensive Tax Planning",
    description: "End-to-end tax planning solutions tailored to your needs",
    icon: TrendingUp,
    features: [
        { 
            title: "Tax Assessment", 
            description: "Thorough evaluation of your tax situation",
            icon: BarChart2
        },
        { 
            title: "Strategy Development", 
            description: "Custom tax optimization strategies",
            icon: Target
        },
        { 
            title: "Implementation", 
            description: "Execution of tax planning solutions",
            icon: Award
        }
    ],
    benefits: [
        "Optimized tax efficiency",
        "Regulatory compliance",
        "Long-term savings"
    ]
};
