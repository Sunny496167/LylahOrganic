// src/components/products/ProductFilters.jsx
import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';

const ProductFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: [],
    price: [],
    scent: []
  });

  const handleFilterChange = (type, value) => {
    const newFilters = {
      ...filters,
      [type]: filters[type].includes(value)
        ? filters[type].filter(item => item !== value)
        : [...filters[type], value]
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="space-y-4">
      <Disclosure as="div" className="border-b border-gray-200 py-6">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between items-center text-gray-900">
              <span className="text-lg font-medium">Category</span>
              <ChevronDownIcon
                className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="pt-6">
              {/* Add category checkboxes */}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* Add more filter sections */}
    </div>
  );
};

export default ProductFilters;