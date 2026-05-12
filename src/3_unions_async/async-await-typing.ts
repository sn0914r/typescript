/**
 * Async/Await Typing
 *
 * - Async functions ALWAYS return a Promise
 * - Even if we return a normal value,
 *   TypeScript wraps it inside a Promise
 *
 * Example:
 * string -> Promise<string>
 */

async function getName(): Promise<string> {
  return "Siva";
}

/**
 * NOTE: 
 * async changes the return type automatically,
 * so async Fns MUST return Promise types
 */