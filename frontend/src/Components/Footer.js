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
        <FAQ/>
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
          {/* Financial Planning */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Financial Planning Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Retirement Planning</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Tax Planning</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Estate Planning</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Portfolio Management</a></li>
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

          {/* Direct Stocks */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Direct Stocks</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Technology Sector</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Banking & Finance</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Healthcare</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Consumer Goods</a></li>
              <li><a href="#" className="text-neutral-100 hover:text-[#F49611] transition-colors">Trending Stocks</a></li>
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






// import React, { useState, useRef, useEffect } from 'react';
// import { 
//   Facebook, 
//   Twitter, 
//   Linkedin, 
//   Instagram,
//   Apple,
//   PlaySquare,
//   ArrowRight,
//   ChevronDown,
//   HelpCircle
// } from 'lucide-react';
// import '../Styles/Footer.css';
// import FAQ from './FAQ';

// const Footer = () => {
//   const [isFaqOpen, setIsFaqOpen] = useState(false);
//   const faqRef = useRef(null);


//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (faqRef.current && !faqRef.current.contains(event.target)) {
//         setIsFaqOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* FAQ Dropdown */}
//         <FAQ/>

//         <div className="footer-grid">
//           {/* Column 1: Company Info & App Downloads */}
//           <div className="footer-column">
//             <div>
//               <h3 className="column-title">Download Our App</h3>
//               <div className="app-buttons">
//                 <button className="app-button">
//                   <Apple size={24} />
//                   <span>App Store</span>
//                 </button>
//                 <button className="app-button">
//                   <PlaySquare size={24} />
//                   <span>Play Store</span>
//                 </button>
//               </div>
//             </div>
            
//             <div>
//               <h3 className="column-title">Stay Updated</h3>
//               <form className="newsletter-form">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="newsletter-input"
//                 />
//                 <button type="submit" className="newsletter-button">
//                   <ArrowRight size={20} />
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Column 2: Financial Planning Services */}
//           <div className="footer-column">
//             <h3 className="column-title">Financial Planning</h3>
//             <ul className="links-list">
//               <li><a href="#">Retirement Planning</a></li>
//               <li><a href="#">Tax Planning</a></li>
//               <li><a href="#">Estate Planning</a></li>
//               <li><a href="#">Investment Advisory</a></li>
//               <li><a href="#">Portfolio Management</a></li>
//               <li><a href="#">Goal-Based Planning</a></li>
//             </ul>
//           </div>

//           {/* Column 3: Mutual Funds */}
//           <div className="footer-column">
//             <h3 className="column-title">Mutual Funds</h3>
//             <ul className="links-list">
//               <li><a href="#">Equity Funds</a></li>
//               <li><a href="#">Debt Funds</a></li>
//               <li><a href="#">Hybrid Funds</a></li>
//               <li><a href="#">Index Funds</a></li>
//               <li><a href="#">Most Purchased Funds</a></li>
//               <li><a href="#">View All Categories</a></li>
//             </ul>
//           </div>

//           {/* Column 4: Direct Stocks */}
//           <div className="footer-column">
//             <h3 className="column-title">Direct Stocks</h3>
//             <ul className="links-list">
//               <li><a href="#">Technology Sector</a></li>
//               <li><a href="#">Banking & Finance</a></li>
//               <li><a href="#">Healthcare</a></li>
//               <li><a href="#">Consumer Goods</a></li>
//               <li><a href="#">Trending Stocks</a></li>
//               <li><a href="#">View All Sectors</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Standard Footer */}
//         <div className="standard-footer">
//           <div className="footer-links">
//             <a href="#">Contact</a>
//             <a href="#">Careers</a>
//           </div>
//           <div className="social-links">
//             <a href="#" className="social-link"><Facebook size={20} /></a>
//             <a href="#" className="social-link"><Twitter size={20} /></a>
//             <a href="#" className="social-link"><Linkedin size={20} /></a>
//             <a href="#" className="social-link"><Instagram size={20} /></a>
//           </div>
//         </div>

//         {/* Compliance Section */}
//         <div className="compliance">
//           <p className="compliance-text">
//             MaxiomWealth is a SEBI registered Investment Advisor (Registration No. INA000000000).
//             All investments are subject to market risks. Please read all scheme related documents carefully.
//           </p>
//           <div className="compliance-footer">
//             <p>&copy; 2025 MaxiomWealth. All rights reserved.</p>
//             <div className="legal-links">
//               <a href="#">Privacy Policy</a>
//               <a href="#">Terms of Service</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;