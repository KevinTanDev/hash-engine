/**
 * Element of a merkle tree.
 * @template T Type of the value stored in each tree element.
 */
abstract class TreeElement<T> {
  /**
   * Value stored in the element.
   */
  abstract value: T | null;
  /**
   * State of root.
   */
  abstract isRoot: boolean;
}

export default TreeElement;
