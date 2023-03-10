import * as ByteBuffer from 'byte';
import * as fsPromises from 'fs/promises';
import * as path from 'path';

export async function getTestElements(): Promise<[string, any][]> {
  const assetDir = path.resolve(__dirname, '../assets');
  const filesPath = await fsPromises.readdir(assetDir);
  const elements: [string, any][] = [];
  for (const filePath of filesPath) {
    const encoding = 'hex';;
    const content = Buffer.from(
      await fsPromises.readFile(path.resolve(assetDir, `${filePath}`)),
    ).toString(encoding);

    elements.push([content, filePath]);
  }
  return elements;
}

export function generateTestElements(number: number): [string, any][] {
  return Array.from({ length: number }, (_, i) => {
    const bb = ByteBuffer.allocate(4);
    bb.putInt(i);
    const toHash = new Uint8Array(bb.array());
    const encoding = 'hex';
    const content = Buffer.from(new Uint8Array(bb.array())).toString(encoding);
    return [content, toHash];
  });
}
