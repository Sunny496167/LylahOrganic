import React, { useState } from 'react';
import { ChevronDown, XCircle } from 'lucide-react';

const FiltersSidebar = ({ filters, updateFilters, categories, genderOptions }) => {
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  
  const toggleCategory = (cat) => {
    const newCategories = filters.categories.includes(cat)
      ? filters.categories.filter(c => c !== cat)
      : [...filters.categories, cat];
    
    updateFilters({ ...filters, categories: newCategories });
  };
  
  const setGender = (gender) => {
    updateFilters({ ...filters, gender });
  };
  
  const setPrice = (price) => {
    updateFilters({ ...filters, price });
  };
  
  const clearFilters = () => {
    updateFilters({ categories: [], gender: null, price: 200 });
  };

  return (
    <aside className="w-72 p-6 border-r border-gray-700 hidden lg:block">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="space-y-6">
        {/* Categories */}
        <div>
          <button 
            onClick={() => setCategoriesOpen(!categoriesOpen)} 
            className="flex items-center justify-between w-full"
          >
            <span className="font-medium">Categories</span>
            <ChevronDown size={18} className={categoriesOpen ? 'transform rotate-180' : ''} />
          </button>
          {categoriesOpen && (
            <div className="mt-2 space-y-2">
              {categories.map(cat => (
                <label key={cat} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="accent-yellow-500"
                    checked={filters.categories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          )}
        </div>
        
        {/* Gender */}
        <div>
          <span className="font-medium">Gender</span>
          <div className="mt-2 space-y-1">
            {genderOptions.map(g => (
              <label key={g} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  className="accent-yellow-500"
                  checked={filters.gender === g}
                  onChange={() => setGender(g)}
                />
                <span>{g}</span>
              </label>
            ))}
          </div>
        </div>
        
        {/* Price */}
        <div>
          <span className="font-medium">Price: up to &#8377;{filters.price}</span>
          <input
            type="range"
            min="0"
            max="200"
            value={filters.price}
            onChange={e => setPrice(+e.target.value)}
            className="w-full mt-2 accent-yellow-500"
          />
        </div>
        
        {/* Reset Filters */}
        <button 
          onClick={clearFilters} 
          className="w-full py-2 bg-yellow-500 text-gray-900 rounded-lg flex items-center justify-center space-x-2"
        >
          <XCircle size={16} />
          <span>Reset Filters</span>
        </button>
      </div>
    </aside>
  );
};

export default FiltersSidebar;