import * as crypto from 'crypto';

/**
 * Convert a ByteArray to a hexString.
 * @param byteArray ByteArray to convert.
 * @return The HexString representation of the ByteArray.
 */
export function byteArrayToHexString(byteArray: Uint8Array): string {
  return Buffer.from(byteArray).toString('hex');
}

/**
 * Convert a HexString to a ByteArray.
 * @param hexString HexString to convert.
 * @return The ByteArray representation of the HexString.
 */
export function hexStringToByteArray(hexString: string): Uint8Array {
  return new Uint8Array(Buffer.from(hexString, 'hex'));
}

/**
 * Compute the ByteArray representation of the hash of the ByteArray input.
 * @param algorithm Hash algorithm.
 * @param byteArray ByteArray to hash.
 * @return ByteArray representation of hash.
 */
export function byteArrayHashFromArray(
  algorithm: string,
  byteArray: Uint8Array | Uint16Array | Uint32Array,
): Uint8Array {
  const hash = crypto.createHash(algorithm);
  hash.update(Buffer.from(byteArray));
  return new Uint8Array(hash.digest());
}

/**
 * Compute the ByteArray representation of the hash of the HexString input.
 * @param algorithm Hash algorithm.
 * @param hexString HexString to hash.
 * @return ByteArray representation of hash.
 */
export function byteArrayHashFromString(
  algorithm: string,
  hexString: string,
): Uint8Array {
  return byteArrayHashFromArray(algorithm, hexStringToByteArray(hexString));
}

/**
 * Compute the HexString representation of the hash of the ByteArray input.
 * @param algorithm Hash algorithm.
 * @param byteArray ByteArray to hash.
 * @return HexString representation of hash.
 */
export function hexStringHashFromArray(
  algorithm: string,
  byteArray: Uint8Array | Uint16Array | Uint32Array,
): string {
  return byteArrayToHexString(byteArrayHashFromArray(algorithm, byteArray));
}

/**
 * Compute the HexString representation of the hash of the HexString input.
 * @param algorithm Hash algorithm.
 * @param hexString HexString to hash.
 * @return HexString representation of hash.
 */
export function hexStringHashFromString(
  algorithm: string,
  hexString: string,
): string {
  return byteArrayToHexString(byteArrayHashFromString(algorithm, hexString));
}

