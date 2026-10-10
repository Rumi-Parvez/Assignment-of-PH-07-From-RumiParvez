"use client";

import { useState } from "react";

import ProductCard from "@/app/components/ProductCard";
import CategorySort from "@/app/components/Sort";
import { IProductType } from "@/app/types/productstype";

interface CategoryProductsProps {
  allProducts: IProductType[];
}

const CategoryProducts = ({
  allProducts,
}: CategoryProductsProps) => {
  const [sortBy, setSortBy] = useState("default");

  const sortedProducts = [...allProducts];

  if (sortBy === "low-high") {
    sortedProducts.sort((a, b) => a.today - b.today);
  }

  if (sortBy === "high-low") {
    sortedProducts.sort((a, b) => b.today - a.today);
  }

  return (
    <>
      <div className="bg-white w-full min-h-15 mt-4 sm:mt-5 rounded-2xl flex flex-wrap justify-between items-center gap-3 px-3 sm:px-5 lg:px-8 py-3 border border-gray-200">
        <div></div>
        <CategorySort sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      <h1 className="text-sm mt-5 sm:mt-6">
        মোট {allProducts.length}টি পণ্য দেখানো হচ্ছে
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 my-4 mb-20 sm:mb-24 lg:mb-30">
        {sortedProducts.map((products) => (
          <ProductCard key={products.id} products={products} />
        ))}
      </div>
    </>
  );
};

export default CategoryProducts;