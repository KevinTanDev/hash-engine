import { stringHashFromString } from '../utils/HashUtils.js';

export default class HashEngine {
  public static async execute(
    methodType: string,
    algoType: string,
    encoding: BufferEncoding,
    data: string[],
    shouldHashData = false,
  ): Promise<string> {
    let hashes = [...data];
    if (shouldHashData) {
      hashes = this.hashSources(algoType, encoding, data);
    }
    switch (methodType) {
      case 'merkleTree':
        return Promise.resolve(this.merkleRoot(algoType, encoding, hashes));

      case 'concat':
        return Promise.resolve(this.simpleConcat(algoType, encoding, hashes));

      default:
        return Promise.reject('Selected method type for hashing is not known');
    }
  }

  private static async merkleRoot(
    algoType: string,
    encoding: BufferEncoding,
    data: string[],
  ): Promise<string> {
    let hashesCurrentLevel: string[] = [];
    while (data.length > 1) {
      hashesCurrentLevel = [];
      for (let i = 0; i < data.length; i += 2) {
        let currentHash = data[i]!;
        const isNotLast = i + 1 < data.length;
        if (isNotLast) {
          currentHash += data[i + 1]!;
        }

        /**
         * @TODO Concat with himself
         */
        /*
				else {
					currentHash += currentHash;
				}*/
        currentHash = this.hashContent(algoType, encoding, currentHash!);
        hashesCurrentLevel.push(currentHash);
      }
      data = hashesCurrentLevel;
    }

    if (data.length !== 1)
      return Promise.reject('Hashes must contains only the merkle root');
    return Promise.resolve(data[0]!);
  }

  private static async simpleConcat(
    algoType: string,
    encoding: BufferEncoding,
    data: string[],
  ): Promise<string> {
    const hashes = this.hashSources(algoType, encoding, data);

    let hash_root = '';
    for (let i = 0; i < hashes.length; i++) {
      hash_root = hash_root.concat(hashes[i]!);
    }

    hash_root = this.hashContent(algoType, encoding, hash_root);

    return Promise.resolve(hash_root);
  }

  private static hashSources(
    algoType: string,
    encoding: BufferEncoding,
    datas: string[],
  ): string[] {
    return datas.map((data) => {
      return this.hashContent(algoType, encoding, data!);
    });
  }

  private static hashContent(
    algoType: string,
    encoding: BufferEncoding,
    content: string,
  ): string {

    return stringHashFromString(algoType, content, encoding);
  }
}
