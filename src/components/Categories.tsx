import React from 'react';
import cat1 from "../assets/cat1.jpg";
import cat2 from "../assets/cat2.jpeg";
import cat3 from "../assets/cat3.jpeg";
import cat4 from "../assets/cat4.jpeg";
import cat5 from "../assets/cat5.jpeg";
import cat6 from "../assets/cat6.jpeg";

const categories = [
  { id: 1, name: 'Earn Coins', icon: cat1 },
  { id: 2, name: 'LazBeauty', icon: cat2 },
  { id: 3, name: 'Free Prize', icon: cat3 },
  { id: 4, name: 'LazLook', icon: cat4 },
  { id: 5, name: 'LazMall', icon: cat5 },
  { id: 6, name: 'Travel', icon: cat6 },
];

export default function Categories() {
  return (
    <div className="grid grid-cols-3 gap-4 px-4 py-6">
      {categories.map((category) => (
        <button
          key={category.id}
          className="flex flex-col items-center p-3 bg-white rounded-lg shadow-sm"
        >
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
            <img
              src={category.icon}
              alt={category.name}
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
          </div>
          <span className="text-sm font-medium text-gray-700">{category.name}</span>
        </button>
      ))}
    </div>
  );
}
