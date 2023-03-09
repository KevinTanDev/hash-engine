import TreeElement from '../model/TreeElement.js';
import TreeLeaf from '../model/TreeLeaf.js';
import TreeNode from '../model/TreeNode.js';
import { stringHashFromString } from '../utils/HashUtils.js';
import TreeVisitor from './TreeVisitor.js';

/**
 * Abstract visitor of a merkle tree.
 * It computes the hash of a node by hashing the concatenation of the children values recursively along the tree.
 * The hash function must be set in the implementation.
 */
export class SimpleAlgorithmTreeBrowser implements TreeVisitor<string, void> {
  constructor(private algorithm: string) {}

  public visitTree(rootTreeElement: TreeElement<string> | null): string | null {
    if (!rootTreeElement) {
      return null;
    }
    return this.visitTreeElement(rootTreeElement);
  }

  private visitTreeElement(treeElement: TreeElement<string>): string {
    if (treeElement instanceof TreeNode) {
      return this.visitTreeNode(treeElement);
    } else {
      return this.visitTreeLeaf(treeElement as TreeLeaf<string>);
    }
  }

  /**
   * Visit a TreeNode, compute, and set its value.
   * The value is the hash of the concatenation of the children values.
   * @param treeNode TreeNode to visit.
   */
  private visitTreeNode(treeNode: TreeNode<string>): string {
    // Retrieve the left child value.
    let sum: string = this.visitTreeElement(treeNode.left);
    // Check if there is a right child.
    if (treeNode.right != null) {
      sum += this.visitTreeElement(treeNode.right);
    }
    // Compute the hash of the concatenation.
    const hash = stringHashFromString(this.algorithm, sum, 'hex');
    treeNode.value = hash;
    return hash;
  }

  /**
   * Visit a TreeLeaf.
   * @param treeLeaf TreeLeaf to visit.
   */
  private visitTreeLeaf(treeLeaf: TreeLeaf<string>): string {
    return treeLeaf.value;
  }
}
