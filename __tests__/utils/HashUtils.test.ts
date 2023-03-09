import * as fsPromises from 'fs/promises';
import * as path from 'path';
import {
  byteArrayHashFromArray,
  byteArrayHashFromString,
  byteArrayToEncodeString,
  stringHashFromArray,
  stringHashFromString,
  encodeStringToByteArray,
} from '../../src/utils/HashUtils.js';

const assetDir = path.resolve(__dirname, '../../assets');

describe('HashUtilsTest', () => {
  // Assert if setTimeout was called properly
  it('byteArrayToHexStringTest', async () => {
    const expected = '2c1d36914b01370735e977';
    const byteArray = Uint8Array.from([
      0x2c, 0x1d, 0x36, 0x91, 0x4b, 0x01, 0x37, 0x07, 0x35, 0xe9, 0x77,
    ]);
    const actual = byteArrayToEncodeString(byteArray, 'hex');
    expect(actual).toBe(expected);
  });

  it('stringToByteArrayTest', async () => {
    const expected = Uint8Array.from([0x2c, 0x56, 0x1f, 0x1d, 0x57]);
    const string = '2c561f1d57';
    const actual = encodeStringToByteArray(string, 'hex');
    for (let i = 0; i < expected.length; i++) {
      expect(actual[i]).toBe(expected[i]);
    }
  });

  it('stringHashFromByteArrayTest', async () => {
    const file = await fsPromises.readFile(
      path.resolve(assetDir, 'PDF_01.pdf'),
    );

    const hash = stringHashFromArray('sha256', file, 'hex');
    expect(hash).toBe(
      '2c1d36914b01370735e97743e2917a961aa6c90ced094f274394a8fc30c6ecd1',
    );
  });

  it('stringHashFromHexStringTest', async () => {
    const file = await fsPromises.readFile(
      path.resolve(assetDir, 'PDF_01.pdf'),
    );
    const string = byteArrayToEncodeString(file, 'hex');
    const hash = stringHashFromString('sha256', string, 'hex');
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
    const expected = encodeStringToByteArray(
      '2c1d36914b01370735e97743e2917a961aa6c90ced094f274394a8fc30c6ecd1',
      'hex',
    );
    for (let i = 0; i < expected.length; i++) {
      expect(hash[i]).toBe(expected[i]);
    }
  });

  it('byteArrayHashFromHexStringTest', async () => {
    const file = await fsPromises.readFile(
      path.resolve(assetDir, 'PDF_01.pdf'),
    );
    const string = byteArrayToEncodeString(file, 'hex');
    const hash = byteArrayHashFromString('sha256', string, 'hex');
    const expected = encodeStringToByteArray(
      '2c1d36914b01370735e97743e2917a961aa6c90ced094f274394a8fc30c6ecd1',
      'hex',
    );
    for (let i = 0; i < expected.length; i++) {
      expect(hash[i]).toBe(expected[i]);
    }
  });
});
