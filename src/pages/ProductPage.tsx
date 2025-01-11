import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen p-4 pt-16 flex items-center justify-center">
        <p className="text-gray-500">Product not found</p>
      </div>
    );
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    // Show a success message
    const message = document.createElement('div');
    message.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg';
    message.textContent = 'Added to cart successfully!';
    document.body.appendChild(message);
    
    // Remove the message after 2 seconds
    setTimeout(() => {
      document.body.removeChild(message);
    }, 2000);
  };

  return (
    <div className="min-h-screen p-4 pt-16">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
          <p className="text-purple-600 text-xl font-bold mb-4">THB {product.price}</p>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <button 
              onClick={() => handleQuantityChange(-1)}
              className="p-2 rounded-full bg-purple-100 hover:bg-purple-200"
            >
              <Minus className="w-4 h-4 text-purple-600" />
            </button>
            <span className="w-12 text-center font-medium text-lg">{quantity}</span>
            <button 
              onClick={() => handleQuantityChange(1)}
              className="p-2 rounded-full bg-purple-100 hover:bg-purple-200"
            >
              <Plus className="w-4 h-4 text-purple-600" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}