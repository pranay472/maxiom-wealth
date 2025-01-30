import React from 'react';
import { ScrollText, Users, ArrowRight, ShieldCheck, Calculator, Heart, Landmark, ClipboardCheck, BarChart3, CheckCircle } from 'lucide-react';

const SectionTitle = ({ subtitle, title, align = 'left' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
    <div className={`flex items-center gap-2 mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
      <div className="w-12 h-0.5 bg-[#F49611]"></div>
      <span className="text-[#F49611] font-medium uppercase tracking-wider text-sm">{subtitle}</span>
    </div>
    <h2 className="text-4xl font-bold text-[#113262]">{title}</h2>
  </div>
);

const ServiceCard = ({ Icon, title, description, index }) => (
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

const TimelineStep = ({ number, title, description }) => (
  <div className="relative w-full max-w-3xl">
    <div className="flex items-start gap-8">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-[#113262] text-white flex items-center justify-center text-2xl font-bold">
          {number}
        </div>
        {number !== '4' && (
          <div className="absolute top-16 left-1/2 w-0.5 h-24 bg-gradient-to-b from-[#113262] to-transparent -translate-x-1/2"></div>
        )}
      </div>
      <div className="pt-3 flex-1">
        <h3 className="text-2xl font-bold text-[#113262] mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const MainContent = () => {
  return (
    <div className="py-24 space-y-32">
      {/* Intro Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle 
              subtitle="Who We Are"
              title="Your Trusted Partner in Estate Planning"
            />
            <p className="text-lg text-gray-600 mb-8">
              With decades of experience in wealth management, we provide sophisticated estate planning solutions 
              tailored to preserve and protect your legacy. Our expert team combines deep legal knowledge with 
              strategic financial planning to create comprehensive solutions for high-net-worth individuals and families.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-[#113262] mb-2">1000+</div>
                <div className="text-gray-600">Families Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#113262] mb-2">₹450Cr+</div>
                <div className="text-gray-600">Assets Advised</div>
              </div>
            </div>
          </div>
          <div className="bg-[#E8EEF6] rounded-2xl p-8 md:p-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#113262] mb-6">Why Choose Us</h3>
              {[
                "Personalized strategies for complex wealth structures",
                "Deep expertise in tax-efficient wealth transfer",
                "Comprehensive family office services",
                "Regular portfolio review and rebalancing"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#F49611] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          subtitle="Our Services"
          title="Comprehensive Estate Planning Solutions"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: ScrollText,
              title: "Will Creation & Management",
              description: "Expert guidance in creating and maintaining legally robust wills that ensure your wishes are honored"
            },
            {
              icon: Users,
              title: "Private Family Trust Formation",
              description: "Sophisticated trust structures designed to protect and transfer wealth efficiently across generations"
            },
            {
              icon: BarChart3,
              title: "Succession Planning",
              description: "Strategic frameworks for seamless transition of business interests and family wealth"
            },
            {
              icon: ClipboardCheck,
              title: "Legal Documentation",
              description: "Comprehensive legal support ensuring all documentation meets the highest standards of compliance"
            }
          ].map((service, index) => (
            <ServiceCard 
              key={index}
              Icon={service.icon}
              title={service.title}
              description={service.description}
              index={index + 1}
            />
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[#113262]/5 skew-y-3"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <SectionTitle 
            subtitle="Key Benefits"
            title="Advantages of Strategic Estate Planning"
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: "Asset Protection",
                description: "Advanced strategies to safeguard your wealth from potential risks and claims"
              },
              {
                icon: Calculator,
                title: "Tax Efficiency",
                description: "Optimized structures to minimize tax implications during wealth transfer"
              },
              {
                icon: Heart,
                title: "Family Harmony",
                description: "Clear succession frameworks that prevent potential disputes and maintain family unity"
              },
              {
                icon: Landmark,
                title: "Wealth Preservation",
                description: "Long-term strategies ensuring sustainable growth and preservation of family wealth"
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

      {/* Approach Timeline Section */}
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle 
          subtitle="Our Process"
          title="A Systematic Approach to Estate Planning"
          align="center"
        />
        <div className="flex flex-col items-center space-y-16">
          {[
            {
              number: "1",
              title: "Comprehensive Assessment",
              description: "In-depth evaluation of your assets, family dynamics, and long-term objectives to create a foundational understanding of your needs"
            },
            {
              number: "2",
              title: "Strategy Development",
              description: "Creation of tailored solutions that align with your goals, incorporating tax efficiency, asset protection, and succession planning"
            },
            {
              number: "3",
              title: "Implementation",
              description: "Meticulous execution of your estate plan, ensuring all legal structures and documentation meet the highest standards"
            },
            {
              number: "4",
              title: "Ongoing Review",
              description: "Regular assessment and updates to your plan, ensuring it remains optimized for changing circumstances and regulations"
            }
          ].map((step, index) => (
            <TimelineStep 
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;