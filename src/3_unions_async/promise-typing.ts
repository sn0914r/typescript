/**
 * Promise Typing
 * - Promise typing defines what value
 *   the Promise resolves to in the future
 */

// INFO: Promise will resolve to a string
function fetchUser(): Promise<string> {
  return Promise.resolve("Siva");
}