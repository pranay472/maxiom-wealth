import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PMSOfferings = () => {
  const navigate = useNavigate();

  const offerings = [
    {
      title: "JEWEL",
      subtitle: "Flexi Cap Quality-Growth",
      description: "Balanced investment in large, mid, and a few small-cap companies for long-term growth.",
      link: "/pms/jewel"
    },
    {
      title: "SPARK",
      subtitle: "Emerging Quality-Growth",
      description: "Lesser known small-cap companies with strong fundamentals for long-term growth.",
      link: "/pms/spark"
    },
    {
      title: "GEM",
      subtitle: "Quality-Momentum Strategy",
      description: "Companies with strong price trends and growth momentum across all market caps.",
      link: "/pms/gem"
    },
    {
      title: "EMERALD E",
      subtitle: "Diversified Equity MF",
      description: "Delivers long-term growth via diversified funds across asset classes, ensuring stability and returns.",
      link: "/pms/emerald-equity"
    },
    {
      title: "EMERALD NE",
      subtitle: "Strategic Debt Funds",
      description: "Ensures capital preservation via debt funds, bonds, ETFs, delivering stable returns through 3-Eye Framework.",
      link: "/pms/emerald-non-equity"
    },
    {
      title: "DIAMOND",
      subtitle: "Retirement Planning",
      description: "Provides stable retirement income through diversified debt, equity, and alternative investments for sustainability.",
      link: "/pms/diamond"
    }
  ];

  const handleKnowMore = (link) => {
    navigate(link);
  };

  const KnowMoreButton = ({ link }) => (
    <button 
      onClick={() => handleKnowMore(link)}
      className="relative mt-4 group inline-flex items-center justify-center rounded-full bg-blue-50 px-6 py-3 text-sm font-medium text-blue-900 hover:bg-blue-100 transition-all duration-300"
    >
      Know More
      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  );

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our PMS Offerings</h2>
          <p className="text-xl text-gray-600">
            We adhere to Roots & Wings Investment philosophy in all our offerings.
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.slice(0, 3).map((offering, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden flex flex-col border border-gray-100 cursor-pointer"
                onClick={() => handleKnowMore(offering.link)}
              >
                <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-blue-50 rounded-full opacity-20 transform rotate-45"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 -ml-12 -mb-12 bg-blue-50 rounded-full opacity-20"></div>
                
                <div className="relative flex-grow">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{offering.title}</h3>
                  <p className="text-blue-600 font-medium mb-4 text-lg">{offering.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{offering.description}</p>
                </div>

                <KnowMoreButton link={offering.link} />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.slice(3).map((offering, index) => (
              <div
                key={index + 3}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group overflow-hidden flex flex-col border border-gray-100 cursor-pointer"
                onClick={() => handleKnowMore(offering.link)}
              >
                <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 bg-blue-50 rounded-full opacity-20 transform rotate-45"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 -ml-12 -mb-12 bg-blue-50 rounded-full opacity-20"></div>
                
                <div className="relative flex-grow">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{offering.title}</h3>
                  <p className="text-blue-600 font-medium mb-4 text-lg">{offering.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{offering.description}</p>
                </div>

                <KnowMoreButton link={offering.link} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PMSOfferings;