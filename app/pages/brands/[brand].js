// pages/brands/[brand].js
import { useRouter } from "next/router";
import Image from "next/image"; // ✅ Import next/image

const allPerfumes = [
  {
    name: "Dior Sauvage",
    brand: "dior",
    description: "Bold and fresh with bergamot and amberwood.",
    image: "/pef2.jpg",
  },
  {
    name: "Chanel Bleu",
    brand: "chanel",
    description: "Citrus and woody notes.",
    image: "/pef3.jpg",
  },
  {
    name: "Creed Aventus",
    brand: "creed",
    description: "Pineapple, birch, and musk.",
    image: "/pef4.jpg",
  },
  {
    name: "YSL La Nuit",
    brand: "ysl",
    description: "Cardamom and cedarwood.",
    image: "/pef5.jpg",
  },
  {
    name: "Tom Ford Noir",
    brand: "tom ford",
    description: "Saffron, vanilla, and amber.",
    image: "/pef6.jpg",
  },
];

const BrandPage = () => {
  const router = useRouter();
  const { brand } = router.query;

  if (!brand) return <p className="p-6">Loading...</p>;

  const filtered = allPerfumes.filter(
    (perfume) => perfume.brand.toLowerCase() === brand.toLowerCase()
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 capitalize">{brand} Perfumes</h1>
      {filtered.length === 0 ? (
        <p>No perfumes found for this brand.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-4">
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="mt-3 font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandPage;
