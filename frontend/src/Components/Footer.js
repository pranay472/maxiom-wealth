import React from 'react';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Apple,
  PlayCircle,
  ArrowRight,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import FAQ from './FAQ';

const Footer = () => {
  return (
    <footer className="bg-[#113262] text-neutral-50">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <FAQ />
        {/* Download Section */}
        <div className="mb-12 border-b border-primary-300/20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-4">Download Our Mobile App</h3>
              <p className="text-neutral-100 mb-6">Track your investments, manage goals, and stay updated on the go</p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 px-6 py-3 rounded-lg transition-colors">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <p className="text-xs">Download on the</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </button>
                <button className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 px-6 py-3 rounded-lg transition-colors">
                  <PlayCircle className="w-6 h-6" />
                  <div className="text-left">
                    <p className="text-xs">Get it on</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
              <p className="text-neutral-100 mb-4">Subscribe to our newsletter for market insights and updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-neutral-900 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-300"
                />
                <button className="bg-[#F49611] hover:bg-[#AB690C] px-6 py-3 rounded-r-lg transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Wealth Management */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Wealth Management Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Portfolio Management</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Alternate Investments</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Estate Planning</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Offshore Products</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Private Credit</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Tax Planning</a></li>
            </ul>
          </div>
          {/* Financial Planning */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Financial Advisory Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Financial Planning</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Retirement Planning</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Corporate Financial Wellness</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Goal-Based Planning</a></li>
            </ul>
          </div>

          {/* Mutual Funds */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mutual Fund Products</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Equity Funds</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Debt Funds</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Hybrid Funds</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Index Funds</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Most Purchased Funds</a></li>
            </ul>
          </div>


          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">FAQs</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Careers</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Blog</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Learning Center</a></li>
            </ul>
          </div>
        </div>
        {/* 2nd Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Portfolio Management */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Portfolio Management Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">JEWEL</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">EMERALDE E</a></li>
            </ul>
          </div>
          {/* PMS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">&nbsp;</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">SPARK</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">EMERALD NE</a></li>
            </ul>
          </div>

          {/* PMS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">&nbsp;</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">GEM</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">DIAMOND</a></li>
            </ul>
          </div>
        </div>
        {/* 3rd Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Portfolio Management */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Financial Planning</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">UG Education Abroad</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">UG Education in India</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Masters Education Abroad</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Helping Child Overseas</a></li>
            </ul>
          </div>
          {/* PMS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">&nbsp;</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Sports Persons</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Doctors</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Retired Bank Employees</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Entrepreneurs</a></li>
            </ul>
          </div>

          {/* PMS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">&nbsp;</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Child Birth</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Child Marriage</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Health Emergency</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Single Mothers</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Single Parents</a></li>
            </ul>
          </div>

          {/* PMS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">&nbsp;</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Disability</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Sudden Death of Income Earners</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Divorce</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Migrating from india</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors"></a>Returning to india</li>

            </ul>
          </div>
        </div>

        {/* 4th Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Portfolio Management */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Retirement Planning</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Traditional Retirement Planning</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Post Retirement Solutions</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">FIRE Planning</a></li>
            </ul>
          </div>
          {/* PMS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Goal Based Planning</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Car Purchase</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Home Loan Repayment</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Dream Home Purchase</a></li>
            </ul>
          </div>

          {/* PMS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">&nbsp;</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Starting a business</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Gold Loan Foreclosure</a></li>
            </ul>
          </div>
        </div>

        {/* 5th Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Portfolio Management */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Financial Calculators</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Investment Calculators</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Personal Finance Calculators</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Children & Family Calculators</a></li>
            </ul>
          </div>
          {/* PMS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">&nbsp;</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Retirement Calculators</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Education and Career Calculators</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Lifestyle and Goal Planning Calculators</a></li>
            </ul>
          </div>
          {/* PMS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">&nbsp;</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Tax Calculators</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Income & Cashflow Calculators</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Trading Calculators</a></li>
            </ul>
          </div>

          {/* PMS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">&nbsp;</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Loan Calculators</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Miscellaneous Calculators</a></li>
            </ul>
          </div>
        </div>
        {/* Social Links */}
        <div className="border-t border-primary-300/20 pt-8 mb-8">
          <div className="flex flex-wrap justify-between items-center gap-8">
            <div className="flex gap-6">
              <a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Privacy Policy</a>
              <a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Regulatory Information */}
        <div className="text-sm text-neutral-300 space-y-4">
          <div className="p-4 bg-neutral-900/30 rounded-lg">
            <p className="mb-2 font-semibold">Regulatory Information:</p>
            <p>MaxiomWealth is a SEBI registered Investment Advisor (Registration No. INA000000000). CIN: U000000XX0000XXX000000</p>
          </div>
          <div className="p-4 bg-neutral-900/30 rounded-lg">
            <p className="mb-2 font-semibold">Disclaimer:</p>
            <p>Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing. Past performance is not indicative of future returns.</p>
          </div>
          <p className="text-center pt-4">&copy; {new Date().getFullYear()} MaxiomWealth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
