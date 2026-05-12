/**
 * Object Typing
 * - TypeScript validates the object structure
 * - TypeScript throws errors when:
 *   - wrong types are given
 *   - properties are missing
 *   - extra properties are added
 */
const student1: {
  name: string;
  marks: number;
} = {
  name: "sivananda",
  marks: 80
};

/**
 * Optional Properties
 * - Use ? to make properties optional
 */
const student2: {
  name: string;
  marks?: number;
} = {
  name: "sivananda"
};

/**
 * Nested Objects
 * - TypeScript validates nested structures too
 */
const user: {
  name: string;
  address: {
    city: string;
    pincode: number;
  };
} = {
  name: "Sivananda",
  address: {
    city: "mpl",
    pincode: 517325
  }
};

/**
 * Object typing = defining data shape
 */