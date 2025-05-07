import Link from "next/link";
import Image from "next/image";

const BrandList = () => {
  const brands = [
    { name: "Dior", image: "/pef2.jpg" },
    { name: "Chanel", image: "/pef2.jpg" },
    { name: "Creed", image: "/pef2.jpg" },
    { name: "YSL", image: "/pef2.jpg" },
    { name: "Tom Ford", image: "/pef2.jpg" },
  ];

  return (
    <section className="flex justify-center gap-4 mt-4 flex-wrap">
      {brands.map((brand, index) => (
        <Link key={index} href={`/brands/${brand.name.toLowerCase()}`}>
          <div className="cursor-pointer flex flex-col items-center hover:scale-105 transition-transform duration-200">
            <Image src={brand.image} width={60} height={50} alt={brand.name} />
            <p className="text-xs mt-1">{brand.name}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default BrandList;
