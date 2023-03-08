import TreeElement from '../model/TreeElement.js';

interface TreeVisitor<T, V> {
  /**
   * Visit and do some operations on a TreeElement.
   * @param rootTreeElement root TreeElement of the tree to visit.
   * @return Visit result.
   */
  visitTree(rootTreeElement: TreeElement<T> | null): V;
}

export default TreeVisitor;
