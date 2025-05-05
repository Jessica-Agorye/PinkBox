import React from "react";
import Image from "next/image";

const perfumes = [
  {
    name: "Dior Sauvage",
    description:
      "A bold and fresh fragrance with notes of bergamot, pepper, and amberwood.",
    image: "/pef1.jpg",
  },
  {
    name: "Chanel Bleu de Chanel",
    description:
      "A sophisticated scent with citrus, woody, and aromatic notes, perfect for any occasion.",
    image: "/pef1.jpg",
  },
  {
    name: "Creed Aventus",
    description:
      "A luxurious fragrance with a blend of pineapple, blackcurrant, birch, and musk.",
    image: "/pef1.jpg",
  },
  {
    name: "YSL La Nuit de L'Homme",
    description:
      "A seductive and warm scent featuring cardamom, cedarwood, and lavender.",
    image: "/pef1.jpg",
  },
  {
    name: "Tom Ford Noir Extreme",
    description:
      "An intense, spicy, and oriental fragrance with hints of saffron, vanilla, and amber.",
    image: "/pef1.jpg",
  },
  {
    name: "Acqua di Giò Profumo",
    description:
      "A marine-inspired scent with notes of bergamot, sea incense, and patchouli.",
    image: "/pef1.jpg",
  },
  {
    name: "Armani Code",
    description:
      "A charismatic fragrance with tonka bean, leather, and citrus accords.",
    image: "/pef1.jpg",
  },
  {
    name: "Paco Rabanne 1 Million",
    description:
      "A warm and spicy scent with a blend of cinnamon, leather, and amber.",
    image: "/pef1.jpg",
  },
  {
    name: "Versace Eros",
    description:
      "A powerful and fresh scent with mint, green apple, and vanilla notes.",
    image: "/pef1.jpg",
  },
  {
    name: "Jean Paul Gaultier Le Male",
    description:
      "An iconic fragrance with notes of lavender, vanilla, and mint.",
    image: "/pef1.jpg",
  },
];

console.log(perfumes);

const PopularProducts = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-1 mb-4">
        {perfumes.map((perfume, index) => (
          <div key={index} className="pb-4">
            <Image src={perfume.image} width={350} height={300} alt="bar" />
            <p>{perfume.name}</p>
            <p>{perfume.description}</p>
            <button>Select</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
