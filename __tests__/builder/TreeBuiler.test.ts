import TreeBuilder from '../../src/builder/TreeBuilder.js';
import TreeElement from '../../src/model/TreeElement.js';
import TreeNode from '../../src/model/TreeNode.js';
import { generateTestElements, getTestElements } from '../../utils/utils.js';

describe('TreeBuilderTest', () => {
  // Assert if setTimeout was called properly
  it('should build the tree', async () => {
    const elements = await getTestElements();
    const merkleTree: TreeElement<string> | null = new TreeBuilder<string>(
      'sha256',
    )
      .setElements(elements)
      .build();
    expect(merkleTree instanceof TreeNode).toBeTruthy();
    expect((merkleTree as TreeNode<string>).height === 4).toBeTruthy();
  });

  it('should build the tree with 100 test elements', async () => {
    const numberOfTestElements = 100;
    const expectedHeight = 7;
    const elements = generateTestElements(numberOfTestElements);
    const merkleTree: TreeElement<string> | null = new TreeBuilder<string>(
      'sha256',
    )
      .setElements(elements)
      .build();
    expect(merkleTree instanceof TreeNode).toBeTruthy();
    expect((merkleTree as TreeNode<string>).height === expectedHeight).toBeTruthy();
  });
  
  it('should build the tree with 1_000 test elements', async () => {
    const numberOfTestElements = 1_000;
    const expectedHeight = 10;
    const elements = generateTestElements(numberOfTestElements);
    const merkleTree: TreeElement<string> | null = new TreeBuilder<string>(
      'sha256',
    )
      .setElements(elements)
      .build();
    expect(merkleTree instanceof TreeNode).toBeTruthy();
    expect((merkleTree as TreeNode<string>).height === expectedHeight).toBeTruthy();
  });

  it('should build the tree with 10_000 test elements', async () => {
    const numberOfTestElements = 10_000;
    const expectedHeight = 14;
    const elements = generateTestElements(numberOfTestElements);
    const merkleTree: TreeElement<string> | null = new TreeBuilder<string>(
      'sha256',
    )
      .setElements(elements)
      .build();
    expect(merkleTree instanceof TreeNode).toBeTruthy();
    expect((merkleTree as TreeNode<string>).height === expectedHeight).toBeTruthy();
  });

  it('should build the tree with 50_000 test elements', async () => {
    const numberOfTestElements = 50_000;
    const expectedHeight = 16;
    const elements = generateTestElements(numberOfTestElements);
    const merkleTree: TreeElement<string> | null = new TreeBuilder<string>(
      'sha256',
    )
      .setElements(elements)
      .build();
    expect(merkleTree instanceof TreeNode).toBeTruthy();
    expect((merkleTree as TreeNode<string>).height === expectedHeight).toBeTruthy();
  });

  it('should build the tree with 100_000 test elements', async () => {
    const numberOfTestElements = 100_000;
    const expectedHeight = 17;
    const elements = generateTestElements(numberOfTestElements);
    const merkleTree: TreeElement<string> | null = new TreeBuilder<string>(
      'sha256',
    )
      .setElements(elements)
      .build();
    expect(merkleTree instanceof TreeNode).toBeTruthy();
    expect((merkleTree as TreeNode<string>).height === expectedHeight).toBeTruthy();
  });

  it('should build the tree with 1_000_000 test elements', async () => {
    const numberOfTestElements = 1_000_000;
    const expectedHeight = 20;
    const elements = generateTestElements(numberOfTestElements);
    const merkleTree: TreeElement<string> | null = new TreeBuilder<string>(
      'sha256',
    )
      .setElements(elements)
      .build();
    expect(merkleTree instanceof TreeNode).toBeTruthy();
    expect((merkleTree as TreeNode<string>).height === expectedHeight).toBeTruthy();
  });

});
