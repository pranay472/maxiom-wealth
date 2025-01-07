import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Info } from 'lucide-react';

const FAQInformation = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "What is the minimum investment amount?",
      answer: "₹50 lakhs"
    },
    {
      question: "How is credit quality maintained?",
      answer: "Through continuous monitoring of underlying bonds and strict credit rating criteria"
    },
    {
      question: "How do you manage interest rate risk?",
      answer: "Through active duration management and yield curve positioning"
    }
  ];

  const importantNotes = [
    "Returns are subject to interest rate movements",
    "Credit quality is actively monitored",
    "Tax-efficient debt fund selection",
    "Regular portfolio rebalancing based on market conditions"
  ];

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center">
            <HelpCircle className="mr-2 text-blue-600" />
            Key Information
          </h2>
          <p className="text-gray-600">
            Essential details about our investment approach and process
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-12 space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden transition-all duration-200 hover:bg-gray-100"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between"
              >
                <span className="text-gray-800 font-medium">{faq.question}</span>
                <ChevronDown 
                  className={`text-blue-600 transition-transform duration-200 ${
                    openFAQ === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`px-6 transition-all duration-200 ${
                  openFAQ === index ? 'py-4' : 'py-0 h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes Section */}
        <div className="bg-blue-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Info className="text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Important Notes</h3>
          </div>
          <div className="space-y-3">
            {importantNotes.map((note, index) => (
              <div key={index} className="flex items-start">
                <div className="h-2 w-2 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">{note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            For detailed information or specific queries, please contact our investment team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQInformation;
