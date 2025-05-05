import { products } from "../data/ProductData";

export function filterProducts(category: string) {
  return products.filter((product) => product.category === category);
}
