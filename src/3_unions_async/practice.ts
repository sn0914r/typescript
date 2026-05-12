export {};
// 1. Create primitive union
type UserId = string | number;

// 2. Create union literal type
type PaymentStatus = "PAID" | "PENDING" | "FAILED";

// 3. Create function using union param
function logId(id: string | number): void {
  console.log(id);
}

// 4. Create enum
enum OrderStatus {
  CREATED = "CREATED",
  CONFIRMED = "CONFIRMED",
  CANCELLED = "CANCELLED",
}

// 5. Create async function returning string
async function getMyName(): Promise<string> {
  return "Sivananda";
}

// 6. Create async function returning object
interface Product {
  name: string;
  price: number;
  stock: number;
  isActive: boolean;
  images: string[];
}
async function getProduct(): Promise<Product> {
  const obj = {
    name: "CMF Phone 2",
    price: 18000,
    stock: 12,
    isActive: true,
    images: ["sampleimage.url"],
  };
  return obj;
}

// 7. Create Promise<number> example
function getNumber(): Promise<number> {
  return Promise.resolve(345);
}

// 8. Compare union literals vs enums
// Union literal types exist only during TypeScript checking.
// Enums also exist as JavaScript objects at runtime.