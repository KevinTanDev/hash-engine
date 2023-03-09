import * as crypto from 'crypto';


/**
 * Convert a ByteArray to a string.
 * @param byteArray ByteArray to convert.
 * @return The String representation of the ByteArray.
 */
export function byteArrayToEncodeString(byteArray: Uint8Array, encoding: BufferEncoding): string {
  return Buffer.from(byteArray).toString(encoding);
}

/**
 * Convert a String to a ByteArray.
 * @param string String to convert.
 * @return The ByteArray representation of the String.
 */
export function encodeStringToByteArray(string: string, encoding: BufferEncoding): Uint8Array {
  return new Uint8Array(Buffer.from(string, encoding));
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
 * Compute the ByteArray representation of the hash of the String input.
 * @param algorithm Hash algorithm.
 * @param string String to hash.
 * @return ByteArray representation of hash.
 */
export function byteArrayHashFromString(
  algorithm: string,
  string: string,
  encoding: BufferEncoding
): Uint8Array {
  return byteArrayHashFromArray(algorithm, encodeStringToByteArray(string, encoding));
}

/**
 * Compute the String representation of the hash of the ByteArray input.
 * @param algorithm Hash algorithm.
 * @param byteArray ByteArray to hash.
 * @return String representation of hash.
 */
export function stringHashFromArray(
  algorithm: string,
  byteArray: Uint8Array | Uint16Array | Uint32Array,
  encoding: BufferEncoding
): string {
  return byteArrayToEncodeString(byteArrayHashFromArray(algorithm, byteArray), encoding);
}

/**
 * Compute the String representation of the hash of the String input.
 * @param algorithm Hash algorithm.
 * @param string String to hash.
 * @return String representation of hash.
 */
export function stringHashFromString(
  algorithm: string,
  string: string,
  encoding: BufferEncoding
): string {
  return byteArrayToEncodeString(byteArrayHashFromString(algorithm, string, encoding), encoding);
}


