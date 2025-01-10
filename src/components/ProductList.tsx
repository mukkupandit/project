import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductList() {
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Featured Product</h2>
      <div className="max-w-sm mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}