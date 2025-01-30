import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Mail, Phone, Calendar } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold text-[#113262] pr-8">{question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-[#F49611] transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is the importance of estate planning?",
      answer: "Estate planning is crucial for protecting your assets and ensuring they're distributed according to your wishes. It helps minimize taxes, avoid probate complications, and provides clarity for your family during difficult times. A well-structured estate plan can also help protect your beneficiaries and maintain family harmony."
    },
    {
      question: "When should I start estate planning?",
      answer: "The best time to start estate planning is now, regardless of your age or wealth level. However, it becomes particularly important when you acquire significant assets, get married, have children, or start a business. Early planning allows for more strategic decisions and better tax optimization."
    },
    {
      question: "What documents are essential for estate planning?",
      answer: "Essential estate planning documents include a Will, Power of Attorney, Trust deeds (if applicable), Living Will or Advanced Healthcare Directive, and insurance policies. The specific documents needed may vary based on your unique situation and objectives."
    },
    {
      question: "How often should I review my estate plan?",
      answer: "We recommend reviewing your estate plan every 3-5 years or whenever significant life changes occur, such as marriage, divorce, birth of children, acquisition of major assets, or changes in tax laws. Regular reviews ensure your plan remains aligned with your current wishes and circumstances."
    },
    {
      question: "What are the benefits of creating a private family trust?",
      answer: "Private family trusts offer numerous benefits including asset protection, tax efficiency, smooth succession planning, and avoiding probate. They also provide flexibility in wealth distribution and can help maintain family wealth across generations while ensuring privacy."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <div className="sticky top-8">
            <div className="w-12 h-0.5 bg-[#F49611] mb-3"></div>
            <h2 className="text-4xl font-bold text-[#113262] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 mb-8">
              Find answers to common questions about estate planning and our services. 
              If you need more information, our experts are here to help.
            </p>
            <button className="flex items-center text-[#F49611] font-semibold hover:gap-2 transition-all">
              <span>Contact Our Experts</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
        <div className="md:w-2/3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CTA = () => {
  return (
    <div className="bg-[#113262] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24 relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Start Planning Your Legacy Today
            </h2>
            <p className="text-white/80 text-lg mb-12">
              Take the first step towards securing your family's future. Our expert team 
              is ready to help you create a comprehensive estate plan tailored to your needs.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  text: "Schedule a Call",
                  subtext: "+91 9550290118"
                },
                {
                  icon: Mail,
                  text: "Email Us",
                  subtext: "info@maxiomwealth.com"
                },
                {
                  icon: Calendar,
                  text: "Book a Meeting",
                  subtext: "Choose a convenient time"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">{item.text}</div>
                    <div className="text-white/70 text-sm">{item.subtext}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-bold text-[#113262] mb-6">Get Started</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1C52A0] focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1C52A0] focus:border-transparent transition-all"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1C52A0] focus:border-transparent transition-all"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#1C52A0] focus:border-transparent transition-all"
                  rows="4"
                  placeholder="Tell us about your requirements"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#F49611] hover:bg-[#F6A839] text-white font-semibold py-4 rounded-lg transition-colors"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQAndCTA = () => {
  return (
    <>
      <FAQ />
      <CTA />
    </>
  );
};

export default FAQAndCTA;