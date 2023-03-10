import * as crypto from 'crypto';
export default class HashEngineV1 {
  public static async execute(
    algoType: string,
    encoding: BufferEncoding,
    data: string[],
  ): Promise<string> {
    const hashes = this.hashSources(algoType, encoding, data);
    return Promise.resolve(this.merkleRoot(algoType, encoding, hashes));
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
        let currentHash = data[i];
        const isNotLast = i + 1 < data.length;
        if (isNotLast) {
          currentHash += data[i + 1];
        }

        currentHash = this.hashContent(algoType, encoding, currentHash);
        hashesCurrentLevel.push(currentHash);
      }
      data = hashesCurrentLevel;
    }

    if (data.length !== 1)
      return Promise.reject('Hashes must contains only the merkle root');
    return Promise.resolve(data[0]);
  }

  private static hashSources(
    algoType: string,
    encoding: BufferEncoding,
    datas: string[],
  ): string[] {
    return datas.map((data) => {
      return this.hashContent(algoType, encoding, data);
    });
  }

  private static hashContent(
    algoType: string,
    encoding: BufferEncoding,
    content: string,
  ): string {
    const hash = crypto.createHash(algoType);
    hash.update(content, encoding);
    return hash.digest().toString(encoding);
  }
}
