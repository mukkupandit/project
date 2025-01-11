import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img 
      src={product.image} 
      alt={product.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-semibold text-gray-800">{product.name}</h3>
      <p className="text-purple-600 font-bold mt-1">THB 89</p>
      
      <div className="flex flex-col space-y-3">
        <button 
          onClick={() => navigate(`/personal-details`)}
          className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700"
        >
          Buy Now
        </button>
        <button 
          onClick={() => navigate(`/product/${product.id}`)}
          className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  );
}