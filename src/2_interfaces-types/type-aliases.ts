/**
 * Type Aliases
 *
 * Type aliases can store:
 * - objects
 * - unions
 * - primitives
 * - arrays
 * - function types
 */

/**
 * Type Alias with Objects
 */
type Item = {
  name: string;
  price: number;
};

const item1: Item = {
  name: "Keyboard",
  price: 1000,
};

/**
 * Type Alias with Unions
 */
type OrderStatus = "CREATED" | "CONFIRMED" | "CANCELLED";

let order1Status: OrderStatus = "CREATED";

/**
 * Type Alias with Primitives
 */
type Num = number;

let age: Num = 40;

/**
 * Type Alias with Arrays
 */
type NumberArray = number[];

let averageMarks: NumberArray = [23, 56, 32, 55];

/**
 * Type Alias with Function Return Types
 */
function createProduct(name: string, price: number): Item {
  return { name, price };
}

/**
 * Interface vs Type Alias
 *
 * Interfaces:
 * - Mainly used for object shapes
 *
 * Type Aliases:
 * - More flexible
 * - Can store unions, primitives, arrays, and function types
 */

/**
 * Type aliases can create unions
 */
type PaymentStatus = "SUCCESS" | "FAILED";