import * as fsPromises from 'fs/promises';
import * as path from 'path';
import {
    byteArrayHashFromArray,
    byteArrayHashFromString,
    byteArrayToHexString,
    hexStringHashFromArray,
    hexStringHashFromString,
    hexStringToByteArray
} from '../../src/utils/HashUtils.js';

const assetDir = path.resolve(__dirname, '../../assets');

describe('HashUtilsTest', () => {
  // Assert if setTimeout was called properly
  it('byteArrayToHexStringTest', async () => {
    const expected = '2c1d36914b01370735e977';
    const byteArray = Uint8Array.from([
      0x2c, 0x1d, 0x36, 0x91, 0x4b, 0x01, 0x37, 0x07, 0x35, 0xe9, 0x77,
    ]);
    const actual = byteArrayToHexString(byteArray);
    expect(actual).toBe(expected);
  });

  it('hexStringToByteArrayTest', async () => {
    const expected = Uint8Array.from([0x2c, 0x56, 0x1f, 0x1d, 0x57]);
    const hexString = '2c561f1d57';
    const actual = hexStringToByteArray(hexString);
    for (let i = 0; i < expected.length; i++) {
      expect(actual[i]).toBe(expected[i]);
    }
  });

  it('hexStringHashFromByteArrayTest', async () => {
    const file = await fsPromises.readFile(
      path.resolve(assetDir, 'PDF_01.pdf'),
    );

    const hash = hexStringHashFromArray('sha256', file);
    expect(hash).toBe(
      '2c1d36914b01370735e97743e2917a961aa6c90ced094f274394a8fc30c6ecd1',
    );
  });

  it('hexStringHashFromHexStringTest', async () => {
    const file = await fsPromises.readFile(
      path.resolve(assetDir, 'PDF_01.pdf'),
    );
    const hexString = byteArrayToHexString(file);
    const hash = hexStringHashFromString('sha256', hexString);
    expect(hash).toBe(
      '2c1d36914b01370735e97743e2917a961aa6c90ced094f274394a8fc30c6ecd1',
    );
  });

  it('byteArrayHashFromByteArrayTest', async () => {
    const file = await fsPromises.readFile(
      path.resolve(assetDir, 'PDF_01.pdf'),
    );
    const byteArray = file;
    const hash = byteArrayHashFromArray('sha256', byteArray);
    const expected = hexStringToByteArray(
      '2c1d36914b01370735e97743e2917a961aa6c90ced094f274394a8fc30c6ecd1',
    );
    for (let i = 0; i < expected.length; i++) {
      expect(hash[i]).toBe(expected[i]);
    }
  });

  it('byteArrayHashFromHexStringTest', async () => {
    const file = await fsPromises.readFile(
      path.resolve(assetDir, 'PDF_01.pdf'),
    );
    const hexString = byteArrayToHexString(file);
    const hash = byteArrayHashFromString('sha256', hexString);
    const expected = hexStringToByteArray(
      '2c1d36914b01370735e97743e2917a961aa6c90ced094f274394a8fc30c6ecd1',
    );
    for (let i = 0; i < expected.length; i++) {
      expect(hash[i]).toBe(expected[i]);
    }
  });
});
