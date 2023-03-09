import * as fsPromises from 'fs/promises';
import { stringHashFromArray } from '../src/utils/HashUtils.js';
import * as ByteBuffer from 'byte';
import * as path from 'path';

export async function getTestElements(): Promise<[string, any][]> {
  const assetDir = path.resolve(__dirname, '../assets');
  const filesPath = await fsPromises.readdir(assetDir);
  const elements: [string, any][] = [];
  for (const filePath of filesPath) {
    elements.push([
      stringHashFromArray(
        'sha256',
        await fsPromises.readFile(path.resolve(assetDir, `${filePath}`)),
        "hex"
      ),
      filePath,
    ]);
  }
  return elements;
}

export function generateTestElements(number: number): [string, any][] {
  return Array.from({ length: number }, (_, i) => {
    const bb = ByteBuffer.allocate(4);
    bb.putInt(i);
    const toHash = new Uint8Array(bb.array());
    const hash = stringHashFromArray('sha256', toHash, "hex");
    return [hash, toHash];
  });
}
