import React, { useState } from 'react';
import { ShoppingCart, Menu, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SearchOverlay from './SearchOverlay';
import HamburgerMenu from './HamburgerMenu';

interface NavbarProps {
  onCartClick: () => void;
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const { items } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <>
      <nav className="fixed top-0 w-full bg-white shadow-md z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => setIsMenuOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-purple-600">Lazadaa</h1>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSearchOpen(true)}>
              <Search className="w-6 h-6" />
            </button>
            <button onClick={onCartClick} className="relative">
              <ShoppingCart className="w-6 h-6" />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)} 
      />
      <HamburgerMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}