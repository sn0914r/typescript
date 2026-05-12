/**
 * Extending Interfaces
 * - Extending interfaces = inheritance for structure
 * - Allows reusing existing properties
 * - Helps avoid rewriting the same fields
 */

interface User {
  name: string;
  email: string;
}

interface Admin extends User {
  role: string;
}

const user1: User = {
  name: "Sivananda",
  email: "123@gmail.com",
};

const admin1: Admin = {
  name: "Tigor",
  email: "tigor123@gmail.com",
  role: "admin",
};

// INFO: TypeScript throws an error
// because Admin requires all properties
// from both User and Admin

// const admin2: Admin = {
//   role: "admin",
// };
