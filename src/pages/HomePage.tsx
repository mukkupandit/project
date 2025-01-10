import React from 'react';
import HeroCarousel from '../components/HeroCarousel';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';

export default function HomePage() {
  return (
    <main className="pt-14">
      <HeroCarousel />
      {/* <Categories /> */}
      <ProductList />
    </main>
  );
}