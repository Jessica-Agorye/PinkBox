"use client";

import { useState } from "react";
import { products } from "../data/ProductData";
import Navbar from "../components/Navbar";

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleCategoryChange = (category: string) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((p) => p.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <Navbar onCategoryChange={handleCategoryChange} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border rounded p-4 text-center">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
