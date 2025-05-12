import React, { useState } from 'react';
import { categories, genderOptions, products } from '../utils/products';
import ProductsGrid from '../components/products/ProductGrid';
import FiltersSidebar from '../components/products/FiltersSidebar';
import Hero from '../components/common/Hero';

const ProductsPage = () => {
  const [filters, setFilters] = useState({ categories: [], gender: null, price: 200 });
  const filteredProducts = products.filter(product => {
    if (product.price > filters.price) return false;
    if (filters.categories.length > 0 && !filters.categories.some(cat => product.categories?.includes(cat))) {
      return false;
    }
    if (filters.gender && product.gender && product.gender !== filters.gender) {
      return false;
    }
    
    return true;
  });
  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <>
      <Hero 
        title="Discover Your Signature Scent" 
        subtitle="Explore our exclusive collection of perfumes and fragrances." 
        image="https://img.freepik.com/premium-photo/stylish-bottle-with-perfume-against-corral-background-soft-emerald-color_937888-3637.jpg?uid=R193627658&ga=GA1.1.91846166.1742625654&semt=ais_hybrid&w=740" // Use a relative path to your image in public folder
        buttonText="Shop Now"
        buttonLink="#products-section"
      />
      <div id="products-section" className="md:px-24 flex bg-gray-900 min-h-screen text-gray-100">
        <FiltersSidebar 
          filters={filters} 
          updateFilters={updateFilters} 
          categories={categories}
          genderOptions={genderOptions}
        />
        
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold mb-6">All Products</h1>
          <p className="mb-4 text-gray-400">Showing {filteredProducts.length} products</p>
          <ProductsGrid products={filteredProducts} />
        </main>
      </div>
    </>
  );
};

export default ProductsPage;