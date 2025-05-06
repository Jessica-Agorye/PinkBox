"use client";

import React, { useState } from "react";
import Image from "next/image";

const perfumes = [
  {
    name: "Dior Sauvage",
    description: "A bold and fresh fragrance...",
    image: "/pef1.jpg",
  },
  {
    name: "Acqua di Giò Profumo",
    description: "A marine-inspired scent...",
    image: "/pef1.jpg",
  },
  {
    name: "Armani Code",
    description: "A charismatic fragrance...",
    image: "/pef1.jpg",
  },
  {
    name: "Paco Rabanne 1 Million",
    description: "A warm and spicy scent...",
    image: "/pef1.jpg",
  },
  {
    name: "Versace Eros",
    description: "A powerful and fresh scent...",
    image: "/pef1.jpg",
  },
  {
    name: "Jean Paul Gaultier Le Male",
    description: "An iconic fragrance...",
    image: "/pef1.jpg",
  },
  // Add more perfumes as needed
];

const ITEMS_PER_PAGE = 4;

const PopularProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter perfumes by name
  const filteredPerfumes = perfumes.filter((perfume) =>
    perfume.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPerfumes.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredPerfumes.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Pick a Scent</h2>

      {/* Filter Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search perfumes..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page on new search
          }}
          className="w-full md:w-1/2 p-2 border rounded-md shadow-sm"
        />
      </div>

      {/* Perfume Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentItems.map((perfume, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={perfume.image}
              width={400}
              height={300}
              alt={perfume.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{perfume.name}</h3>
              <p className="text-gray-600 text-sm mb-4">
                {perfume.description}
              </p>
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                Select
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-black text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PopularProducts;
