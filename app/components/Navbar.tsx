"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

const Navbar = ({ onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    const selectedCategory = e.target.value;
    onCategoryChange(selectedCategory);
  };
  return (
    <div>
      <nav className=" md:flex md:justify-between mx-2 md:mx-4 mt-4">
        <div className="md:flex md:gap-4">
          <div className=" relative border border-red-200 flex  justify-between mb-2  md:block">
            <Image src="/pinkbox.jpg" width={50} height={50} alt="pink-box" />
            <Image
              src="/hamburgermenu.png"
              width={50}
              height={50}
              onClick={() => toggleMenu()}
              alt="bar"
              className="md:hidden "
            />
          </div>

          <div className="bg-black text-white px-2 w-full h-10 md:w-40 md:h-12">
            <label htmlFor="categories">Perfume Categories</label>
            <select name="categories" id="categories" onChange={handleChange}>
              <option value="All">All</option>
              <option value="Women" className="text-black">
                Women
              </option>
              <option value="Men" className="text-black">
                Men
              </option>
              <option value="Unisex" className="text-black">
                Unisex
              </option>
              <option value="Bodyoil" className="text-black">
                Bodyoil
              </option>
              <option value="Candles" className="text-black">
                Scented Oils
              </option>
            </select>
          </div>

          {/* Make this a drop down of available brands */}
        </div>
        <ul className="hidden md:flex md:gap-2 md:mt-0">
          <li>
            <a href="#"> Home</a>
          </li>
          <li>
            <a href=""> New Arrivals</a>
          </li>

          <li>
            <a href="">Brands</a>
          </li>
        </ul>

        <div>
          <input
            type="text"
            placeholder="Search for Items"
            className="border pl-4 rounded-md w-full h-10 mt-2 md:w-40 md:h-12 md:mt-0 "
          />
        </div>
        {/* Nav Display */}

        {isOpen && (
          <div className="absolute top-14 left-45 rounded-2xl bg-pink-300 p-6 w-1/2 mx-auto ">
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="text-white text-2xl">
                ✖
              </button>
            </div>
            <ul className="text-center mt-4 ">
              <li className="pb-4">
                <a href="#"> Home</a>
              </li>
              <li className="pb-4">
                <a href=""> New Arrivals</a>
              </li>

              <li className="pb-4">
                <a href="">Brands</a>
              </li>
            </ul>

            <div className="flex justify-center gap-2 mt-10">
              <Image src="/instagram.svg" width={20} height={20} alt="bar" />
              <Image src="/facebook.svg" width={20} height={20} alt="bar" />
              <Image src="/twitter.svg" width={20} height={20} alt="bar" />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
