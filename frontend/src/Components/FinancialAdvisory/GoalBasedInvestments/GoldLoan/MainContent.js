import React from 'react';
import { 
  Brain, 
  Laptop, 
  Award, 
  Scale,
  Shield,
  HeartHandshake,
  Clock,
  PiggyBank,
  Hourglass,
  GraduationCap
} from 'lucide-react';

const SectionTitle = ({ subtitle, title, align = 'left' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
    <div className={`flex items-center gap-2 mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
      <div className="w-12 h-0.5 bg-[#F49611]"></div>
      <span className="text-[#F49611] font-medium uppercase tracking-wider text-sm">{subtitle}</span>
    </div>
    <h2 className="text-4xl font-bold text-[#113262]">{title}</h2>
  </div>
);

const ApproachCard = ({ Icon, title, description, index }) => (
  <div className="group">
    <div className="relative p-8 rounded-xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#E8EEF6] rounded-bl-full -z-10 group-hover:bg-[#F49611] transition-colors duration-300"></div>
      <div className="flex items-start gap-6">
        <div className="relative">
          <div className="w-12 h-12 rounded-xl bg-[#E8EEF6] group-hover:bg-[#F49611] transition-colors duration-300 flex items-center justify-center">
            <Icon className="w-6 h-6 text-[#113262] group-hover:text-white transition-colors duration-300" />
          </div>
          <span className="absolute -bottom-4 -right-4 text-4xl font-bold text-[#E8EEF6] group-hover:text-[#F49611]/10 transition-colors duration-300">
            {String(index).padStart(2, '0')}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#113262] mb-3">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const BenefitCard = ({ Icon, title, description }) => (
  <div className="relative p-8 rounded-xl bg-gradient-to-br from-white to-[#E8EEF6] hover:to-[#F49611]/10 transition-colors duration-300">
    <div className="flex gap-6">
      <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-[#F49611]" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-[#113262] mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const MainContent = () => {
  return (
    <div className="py-24 space-y-32">
      {/* Our Approach Section */}
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          subtitle="Our Approach"
          title="Our Distinct Approach in Gold Loan Foreclosure"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Brain,
              title: "Deep Financial Acumen",
              description: "Leverage our expertise in the nuances of gold loan procedures."
            },
            {
              icon: Laptop,
              title: "Integrated Digital Solutions",
              description: "Utilise our platforms to get real-time updates on the foreclosure process."
            },
            {
              icon: Award,
              title: "Certified Excellence",
              description: "ISO 9001 endorsed methodologies ensuring the best foreclosure experience."
            },
            {
              icon: Scale,
              title: "Unbiased Guidance",
              description: "We prioritise your needs, ensuring transparency without any third-party influences."
            },
            {
              icon: Shield,
              title: "Assured Security",
              description: "Your gold assets are handled with utmost security and respect."
            },
            {
              icon: HeartHandshake,
              title: "End-to-End Assistance",
              description: "From initiation to completion, we are by your side ensuring a smooth transition."
            }
          ].map((approach, index) => (
            <ApproachCard
              key={index}
              Icon={approach.icon}
              title={approach.title}
              description={approach.description}
              index={index + 1}
            />
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          subtitle="Benefits"
          title="Benefits of Expert Gold Loan Foreclosure Guidance"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: Clock,
              title: "Stress-Free Closure",
              description: "Experience a hassle-free and straightforward gold loan foreclosure process."
            },
            {
              icon: PiggyBank,
              title: "Financial Savings",
              description: "Potentially save money by navigating the foreclosure with strategic insights."
            },
            {
              icon: Hourglass,
              title: "Time Efficiency",
              description: "Speed up the foreclosure process with our expert guidance and resources."
            },
            {
              icon: GraduationCap,
              title: "Valuable Education",
              description: "Gain a deeper understanding of the financial landscape surrounding gold loans."
            }
          ].map((benefit, index) => (
            <BenefitCard
              key={index}
              Icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;