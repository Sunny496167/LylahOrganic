import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import BrandHighlights from '../components/home/BrandHighlights';
import PremiumOffers from '../components/home/PremiumOffers';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProducts />
      <PremiumOffers />
      <BrandHighlights />
    </div>
  );
};

export default Home;
