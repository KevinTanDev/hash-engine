import TreeElement from './TreeElement.js';

/**
 * Leaf of a merkle tree.
 * @template T Type of the value stored in the leaf.
 */
class TreeLeaf<T> extends TreeElement<T> {
  /**
   * Algorithm used to hash the leaf value.
   */
  algorithm: string;

  /**
   * Information relative to the value stored in the leaf.
   */
  metadata: any | null;

  constructor(
    /**
     * Value stored in the leaf.
     */
    public value: T,
    /**
     * State of root.
     */
    public isRoot: boolean,
    algorithm: string,
    metadata: any | null = null,
  ) {
    super();
    this.algorithm = algorithm;
    this.metadata = metadata;
  }
}

export default TreeLeaf;
