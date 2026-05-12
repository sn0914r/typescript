/**
 * Function Parameter Typing
 * - Define parameter types in the function signature
 * - TypeScript validates the inputs passed to the function
 */
function add(a: number, b: number): number {
  return a + b;
}

// INFO: Both arguments must be numbers
console.log(add(50, 60));

// INFO: TypeScript throws an error
// because "50" is a string
// console.log(add("50", 60));

/**
 * Return Typing
 * - Define what type the function should return
 * - TypeScript validates the returned value
 */
function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(40, 4));

/**
 * void Return Type
 * - Used when a function returns nothing
 */
function printMessage(msg: string): void {
  console.log(msg);
}