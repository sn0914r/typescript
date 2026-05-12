/**
 * Interface
 * - Interface = reusable object structure
 * - Helps reduce repeated object typing
 * - TypeScript validates objects using the interface shape
 */

interface Product {
  name: string;
  price: number;
  inStock?: boolean; // Optional property
}

const product1: Product = {
  name: "Lenovo Ideapad 3",
  price: 49000,
};

const product2: Product = {
  name: "Macbook M2",
  price: 63000,
  inStock: true,
};