import React from 'react';
import Header from '../../../Header';
import Footer from '../../../Footer';
import PostRetirementHero from './PostRetirementHero';
import WhyChoosePostRetirementSection from './WhyChoosePostRetirementSection';
import PostRetirementServices from './PostRetirementServices';
import MainContent from './MainContent';
import FAQ from './FAQ';





const PostRetirement = () => {
    return (
      <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">
            <PostRetirementHero/>
            <WhyChoosePostRetirementSection/>
            <PostRetirementServices/>
            <MainContent/>
            <FAQ/>
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default PostRetirement;