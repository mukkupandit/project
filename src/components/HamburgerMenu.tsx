import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  const menuItems = [
    { title: 'Homepage', path: '/' },
    { title: 'Products', path: '/products' },
    { title: 'Contact Us', path: '/' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="bg-white h-full w-64 shadow-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-purple-600">Menu</h2>
          <button onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block py-3 px-4 text-gray-700 hover:bg-purple-50 rounded-lg mb-2"
              onClick={onClose}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}