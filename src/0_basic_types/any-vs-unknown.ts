// any vs unknown

/**
 * any
 * - disables TypeScript safety
 * - allows any kind of operations
 * - we lose type protection
 * - may lead to runtime crashes
 */

let personName: any = "sivananda";

// INFO: TypeScript allows all operations
personName.toUpperCase();
personName();
personName.xyz;

/**
 * unknown
 * - safer than any
 * - TypeScript expects manual type checking
 * - TypeScript throws errors if we perform operations
 *   without checking the type first
 */

let course: unknown = "B.Tech";

// INFO: Without type checking,
// TypeScript won't allow operations on "course"
if (typeof course === "string") {
  console.log(course.toUpperCase());
}