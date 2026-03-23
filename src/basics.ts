// ==== basic types ====
let age: number = 25;
let username: string = "tiGor";
let isActive: boolean = true;
let userId: any = "123"; // any type

// ==== array types ===
let marks: number[] = [20, 40, 50];
let usernames: string[] = ["sivananda", "tigor", "ramesh", "gopal"];

// ==== interfaces ====
interface User {
  id: number;
  name: string;
}

const user1: User = {
  id: 101,
  name: "sivananda",
};

// ==== union types (a variable can hold multiple types) ====
let value: string | number;
value = "siva";
value = 5;

// ==== function types ====
function greet(name: string): string {
  return `Hello ${name}`
}

console.log(greet("sivananda"));
