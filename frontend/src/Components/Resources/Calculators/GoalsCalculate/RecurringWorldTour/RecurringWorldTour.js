import React from 'react';
import Header from '../../../../Header';
import Footer from '../../../../Footer';
import WorldTourCalculator from './WorldTourCalculator';

export const RecurringWorldTourInfo = {
  title: "Plan Your Multi-Destination World Tour",
  description: "Calculate and plan the financial aspects of your dream world tour with our comprehensive calculator",
  sections: [
    {
      title: "Understanding Your World Tour Budget",
      content: `Our World Tour Calculator helps you plan your multi-destination adventure by considering five key expense categories:

• Flight Costs: Choose between Economy, Business, or First Class travel
• Accommodation: Set your daily accommodation budget based on your comfort preferences
• Food & Dining: Automatically calculated as 40% of your accommodation budget
• Local Transport: Includes taxis, public transport, and local travel arrangements
• Optional Activities: Add a daily budget for tours, attractions, and entertainment

The calculator helps you understand both the total trip cost and the monthly savings required to achieve your travel goal.`
    },
    {
      title: "Customizing Your Travel Experience",
      content: `Tailor your world tour experience by adjusting these key parameters:

• Number of Destinations: Plan visits to 2-15 different locations
• Duration per Destination: Allocate 2-10 days for each location
• Travel Class: Choose from Economy (budget-friendly), Business (enhanced comfort), or First Class (luxury experience)
• Accommodation Level: Select daily budgets from $50-$500 to match your preferred comfort level
• Activity Inclusion: Optionally add daily budgets for tours and activities
• Tour Frequency: Plan for 1-4 tours per year

Each choice significantly impacts your total budget and required savings, allowing you to find the perfect balance between comfort and cost.`
    },
    {
      title: "Smart Financial Planning",
      content: `Make your world tour dreams achievable through strategic financial planning:

• Start Early: Begin saving well in advance to spread the cost over time
• Monthly Savings: Use our calculator's suggested monthly savings target
• Regular Reviews: Adjust your savings plan as travel costs and preferences change
• Flexible Planning: Consider different combinations of destinations and durations
• Cost Management: Balance luxury elements with budget-friendly choices
• Annual Planning: Schedule multiple tours per year based on your financial capacity

Remember that travel costs can vary significantly based on seasons, destinations, and booking timing. It's recommended to add a 10-15% buffer to your calculated budget for unexpected expenses.`
    },
    {
      title: "Travel Class Considerations",
      content: `Understanding the benefits of different travel classes helps make informed decisions:

Economy Class:
• Most cost-effective option for longer trips
• More budget available for activities and accommodations
• Ideal for maximizing the number of destinations

Business Class:
• Enhanced comfort for long-haul flights
• Priority check-in and baggage handling
• Access to airport lounges
• More spacious seating and better meals

First Class:
• Ultimate comfort and luxury experience
• Maximum flexibility with bookings
• Exclusive airport services
• Perfect for special occasions or luxury tours

Choose your travel class based on flight duration, route importance, and overall budget allocation.`
    },
    {
      title: "Accommodation and Activities",
      content: `Your daily accommodation budget influences both comfort level and available amenities:

$50-100/night:
• Budget hotels and hostels
• Basic amenities
• Shared facilities in some cases

$100-250/night:
• Mid-range hotels
• Standard amenities
• Central locations
• Private facilities

$250-500/night:
• Luxury hotels and resorts
• Premium locations
• Full service amenities
• Concierge services

Activities and entertainment budgets can enhance your travel experience through:
• Guided tours and excursions
• Cultural experiences
• Adventure activities
• Local entertainment
• Museum and attraction entries`
    },
    {
      title: "Practical Planning Tips",
      content: `Maximize your world tour experience with these practical considerations:

• Optimal Duration: 3-5 days per destination typically allows for key experiences
• Destination Grouping: Plan routes that minimize long-haul flights
• Seasonal Timing: Research weather patterns and peak seasons
• Visa Requirements: Factor in visa costs and processing time
• Health Preparations: Include travel insurance and vaccination costs
• Local Transport: Research public transport options vs private transfers
• Currency Exchange: Consider exchange rates in your budget planning

Use the calculator's breakdown feature to understand how each component contributes to your total budget, helping you make informed decisions about where to splurge or save.`
    }
  ]
};

const RecurringWorldTour = () => {
  return (
    <>
      <Header />
      <main className="bg-[#F5F5F5] relative">
        <div className="container mx-auto">
          <div className="relative z-20">
            <WorldTourCalculator />
            <div className="px-4 py-12">
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{RecurringWorldTourInfo.title}</h2>
                  <p className="text-gray-600 mb-4">{RecurringWorldTourInfo.description}</p>
                </section>
                {RecurringWorldTourInfo.sections.map((section, index) => (
                  <section key={index}>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{section.title}</h3>
                    <p className="text-gray-600 mb-3">{section.content}</p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RecurringWorldTour;