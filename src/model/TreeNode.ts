import TreeElement from './TreeElement.js';

/**
 * Node of a merkle tree.
 * @template T Type of the value stored in the node.
 */
class TreeNode<T> extends TreeElement<T> {
  /**
   * Height of the node.
   * 0 being the height of a leaf.
   */
  height: number;

  /**
   * Left child of the node.
   * Always defined.
   */
  left: TreeElement<T>;

  /**
   * Right child of the node.
   * Can be undefined.
   */
  right?: TreeElement<T>;

  constructor(
    /**
     * Value stored in the node.
     */
    public value: T | null,
    /**
     * State of root.
     */
    public isRoot: boolean,
    height: number,
    left: TreeElement<T>,
    right?: TreeElement<T>,
  ) {
    super();
    this.height = height;
    this.left = left;
    this.right = right;
  }
}

export default TreeNode;
