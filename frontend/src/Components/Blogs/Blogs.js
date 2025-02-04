import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import BlogCategorySection from './BlogCategorySection';



const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <BlogCategorySection/>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;