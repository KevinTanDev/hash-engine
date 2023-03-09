import TreeBuilder from '../../src/builder/TreeBuilder.js';
import HashEngine from '../../src/hashEngine/HashEngine.js';
import TreeElement from '../../src/model/TreeElement.js';
import { SimpleAlgorithmTreeBrowser } from "../../src/visitor/SimpleAlgorithmTreeBrowser.js";
import { generateTestElements } from '../../utils/utils.js';

const SHA256TreeVisitor = new SimpleAlgorithmTreeBrowser('sha256');

describe('HashEngineTest', () => {
  // Assert if setTimeout was called properly

  it('HashEngineTest with 100 test elements', async () => {
    const expected =
      'd306b461a6899c9d55ba4883159a3dde064646eaca5b7a3b6c488788bf00a4eb';
    const elements = generateTestElements(100);
    const stringElements = elements.map((element) => element[0]);
    const hash = await HashEngine.execute(
      'merkleTree',
      'sha256',
      'hex',
      stringElements,
    );
    expect(hash).toBe(expected);
  });

  it('HashEngineTest with 1_000 test elements', async () => {
    const expected =
      '60c1a80fa56be9fa87c8143df0c45761b2c60d642366e216c1e73e9c43b83c4d';
    const elements = generateTestElements(1_000);
    const stringElements = elements.map((element) => element[0]);
    const hash = await HashEngine.execute(
      'merkleTree',
      'sha256',
      'hex',
      stringElements,
    );
    expect(hash).toBe(expected);
  });

  it('HashEngineTest with 10_000 test elements', async () => {
    const expected =
      '6e962a8705e257101ef6b8e13a02a53576f0fdde1034e008a60ed6f3e6fcce6d';
    const elements = generateTestElements(10_000);
    const stringElements = elements.map((element) => element[0]);
    const hash = await HashEngine.execute(
      'merkleTree',
      'sha256',
      'hex',
      stringElements,
    );
    expect(hash).toBe(expected);
  });

  it('HashEngineTest with 50_000 test elements', async () => {
    const expected =
      '603db5d6efc1e658735e2aa853702ddb15053bf50b794c5c3d87a63d889bc4c0';
    const elements = generateTestElements(50_000);
    const stringElements = elements.map((element) => element[0]);
    const hash = await HashEngine.execute(
      'merkleTree',
      'sha256',
      'hex',
      stringElements,
    );
    expect(hash).toBe(expected);
  });

  it('HashEngineTest with 100_000 test elements', async () => {
    const expected =
      '60902d239f3e2b2bf9933f91a864de844d47602483eae0e86f14ab52e83d768a';
    const elements = generateTestElements(100_000);
    const stringElements = elements.map((element) => element[0]);
    const hash = await HashEngine.execute(
      'merkleTree',
      'sha256',
      'hex',
      stringElements,
    );
    expect(hash).toBe(expected);
  });

  it('test if hashEngine equals to TreeBuilder', async () => {
    const elements = generateTestElements(3);
    const stringElements = elements.map((element) => element[0]);
    const hashRoot = await HashEngine.execute(
      'merkleTree',
      'sha256',
      'hex',
      stringElements,
    );

    const merkleTree: TreeElement<string> | null = new TreeBuilder<string>(
      'sha256',
    )
      .setElements(elements)
      .build();
    SHA256TreeVisitor.visitTree(merkleTree);
    expect(merkleTree.value).toBe(hashRoot);
  });
});
