// INFO: Array where every item must be string
const subjects: string[] = ["Math", "Physics"];

const studentMarks: number[] = [90, 50, 46];

// INFO: Throws error due to wrong type
// const invalidMarks: number[] = [90, "80"];

const results: boolean[] = [true, false, true];

/**
 * Array of Objects
 */
const students: {
  name: string;
  marks: number;
}[] = [
  {
    name: "Siva",
    marks: 90,
  },
  {
    name: "Gopal",
    marks: 78,
  },
];

/**
 * Functions with Arrays
 */

// INFO: Accepting an array
function printMarks(marks: number[]): void {
  console.log(marks);
}

// INFO: Returning an array
function getNames(): string[] {
  return ["Siva", "Gopal"];
}

/**
 * Array typing = defining the type of every element
 */