import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <section>
        <div className="mb-10 mt-10">
          <div>
            <p className="text-4xl text-center leading-13 mt-4">
              Wear and Evoke Emotions with Lushious Scents
            </p>
          </div>
          <Image
            src="/pef2.jpg"
            width={350}
            height={300}
            alt="bar"
            className="justify-self-center mt-4"
          />

          <div className="mt-4">
            <hr className="w-2/6" />{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
