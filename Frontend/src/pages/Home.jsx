import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import BrandHighlights from '../components/home/BrandHighlights';
import WaveFooter from '../components/common/WaveFooter';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <BrandHighlights />
    </div>
  );
};

export default Home;
