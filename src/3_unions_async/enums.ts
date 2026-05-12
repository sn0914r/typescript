export {};

/**
 * Enums
 * - Enums = named constant collections
 * - Used to group related constant values
 */

enum ShippingStatus {
  PENDING = "PENDING",
  PACKED = "PACKED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

/**
 * Accessing enum values
 */
let status: ShippingStatus = ShippingStatus.PACKED;

/**
 * NOTE:
 * Enums create real JavaScript objects at runtime
 * But union literal types exist only during TypeScript checking.
 */