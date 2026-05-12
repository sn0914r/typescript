/**
 * 1. Create a product object
 *  - name
 *  - price
 *  - inStock
 */

const product: {
  name: string;
  price: number;
  inStock: boolean;
} = {
  name: "Macbook M2",
  price: 63000,
  inStock: true,
};

// 2. Create an array of products
const products: {
  name: string;
  price: number;
  inStock: boolean;
}[] = [
  {
    name: "CMF Phone 2 Pro",
    price: 18000,
    inStock: true,
  },
  {
    name: "Amkette Wireless Keyboard",
    price: 1200,
    inStock: true,
  },
];

/**
 * 3. Create a function:
 *  - accepts two numbers
 *  - returns their average
 */
function getAverage(a: number, b: number): number {
  return (a + b) / 2;
}

/**
 * 4. Create a function:
 *   - accepts a student object
 *   - prints student details
 */

function printStudentDetails(student: {
  name: string;
  marks: number[];
  isFailed: boolean;
}): void {
  console.log(student);
}

/**
 * 5. Create a function:
 *  - returns an object
 */
function getStudentDetails(
  name: string,
  marks: number,
): {
  name: string;
  isPassed: boolean;
} {
  const isPassed = marks > 36;
  return { name, isPassed };
}

/**
 * 6. Create a function:
 *  - accepts array of numbers
 *  - prints total sum
 */
function printTotal(nums: number[]): void {
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);
}

/**
 * 7. Create a function:
 *  - accepts array of student objects
 *  - prints all student names
 */
function printStudentNames(students: { name: string; marks: number }[]): void {
  for (let student of students) {
    console.log(student.name);
  }
}

/**
 * 8. Create nested object:
 *  - user
 *  - address
 *  - city
 *  - pincode
 */
const personDetails: {
  user: string;
  address: {
    city: string;
    pincode: number;
  };
} = {
  user: "sivananda",
  address: {
    city: "mpl",
    pincode: 517325,
  },
};

// 9. Create optional properties example
const studentInfo: {
  name: string;
  marks?: number;
} = {
  name: "Sivananda",
};

/**
 * 10. Create invalid examples intentionally
 *  - wrong object type
 *  - wrong array type
 *  - wrong function arguments
 */

// INFO: wrong object type
// const userInfo: {
//   name: string;
//   age: number;
// } = {
//   name: "gopal",
//   age: "10",
// };


// INFO: wrong array type
// const nums: number[] = [10, 20, "30", true]

// INFO: wrong function arguments
function getTotal(a: number, b: number): number {
    return a + b
}
// console.log(getTotal(10, "20"))