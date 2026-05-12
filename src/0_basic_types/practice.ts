/**
 * 1. create variables using:
 *  - string
 *  - number
 *  - boolean
 */
let studentName: string = "sivananda";
let totalMarks: number = 87;
let isFailed: boolean = false;

// 2. create a login function
function hello(username: string): void {
  console.log(`Hello, ${username}`);
}

// 3. create two unsafe any examples
function logAge(age: unknown): void {
  // console.log(`age is ${age.toUpperCase()}`);
}
function upperCase(arg: any): void {
  console.log(arg.toUpperCase());
}

/**
 * 4. Create one unknown example:
 *  - perform proper type checking
 *  - then safely use the value
 */
function greetUser(name: unknown): void {
  if (typeof name === "string") {
    console.log(`Hello, ${name.toUpperCase()}`);
  }
}
