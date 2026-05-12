export {};
// 1. Create Product interface
interface Product {
  name: string;
  price: number;
  inStock: boolean;
}

// 2. Create Student interface with optional property
interface Student {
  name: string;
  marks: number;
  isFailed?: boolean;
}

// 3. Create Admin interface extending User
interface User {
  name: string;
  email: string;
}

interface Admin extends User {
  role: string;
}

// 4. Create array using interface
const products: Product[] = [];

// 5. Create function accepting interface
function printProductNames(products: Product[]): void {
  for (let product of products) {
    console.log(product.name);
  }
}

// 6. Create function returning interface
function createProduct(name: string, price: number, inStock: boolean): Product {
  return { name, price, inStock };
}

// 7. Create type alias for object
type UserInfo = {
  name: string;
  address: {
    city: string;
    pincode: number;
  };
};

// 8. Create type alias for union values
type PaymentStatus = "PAID" | "PENDING" | "FAILED";

// 9. Compare interface vs type usage
// interface is limited to object shapes
// type is flexible and supports unions
