export {};
/**
 * Union Types
 * - Union means a value can be one of multiple types/values
 */

/**
 * Primitive Unions
 */
let id: string | number;

// INFO: Both are allowed
id = "abc123";
id = 101;

/**
 * Function Parameters with Union Types
 */
function printId(id: string | number): void {
  console.log(id);
}

/**
 * Type Narrowing
 * - We must check the type before performing
 *   type-specific operations
 */
function printId_(id: string | number): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
    return;
  }

  console.log(id);
}

/**
 * Literal Unions
 * - Restricts values to specific allowed options
 */
type PaymentStatus = "PENDING" | "PAID" | "FAILED";
