import React from "react";
import Image from "next/image";

const PopularBrands = () => {
  return (
    <div className="mb-10">
      <p className="text-xl font-bold pl-3">Popular Brands</p>

      <section className="flex justify-center gap-2 mt-4">
        <Image src="/pef2.jpg" width={60} height={50} alt="bar" />
        <Image src="/pef2.jpg" width={60} height={50} alt="bar" />
        <Image src="/pef2.jpg" width={60} height={50} alt="bar" />
        <Image src="/pef2.jpg" width={60} height={50} alt="bar" />
        <Image src="/pef2.jpg" width={60} height={50} alt="bar" />
      </section>
    </div>
  );
};

export default PopularBrands;
