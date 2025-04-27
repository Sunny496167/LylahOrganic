// src/components/cart/CartItem.jsx
import React from 'react';
import { TrashIcon } from '@heroicons/react/outline';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center py-6 border-b">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="ml-6 flex-1">
        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{item.size}</p>
        <div className="mt-2 flex items-center">
          <select
            value={item.quantity}
            onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
            className="rounded-md border-gray-300 text-sm"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button
            onClick={() => onRemove(item.id)}
            className="ml-4 text-sm text-red-600 hover:text-red-500"
          >
            <TrashIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <p className="text-lg font-medium text-gray-900">${item.price}</p>
    </div>
  );
};

export default CartItem;

