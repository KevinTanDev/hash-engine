/**
 * Provides a way to easily build merkle tree by passing a list of elements to add.
 * @template T Type of value stored in the tree.
 */

import TreeElement from '../model/TreeElement.js';
import TreeLeaf from '../model/TreeLeaf.js';
import TreeNode from '../model/TreeNode.js';

class TreeBuilder<T> {
  /**
   * Algorithm used to produce leaves values.
   */
  private algorithm: string;

  private elements: Array<[T, any]> | null = null;

  constructor(algorithm: string) {
    this.algorithm = algorithm;
  }

  /**
   * Add the elements map to be used by the builder to build the tree.
   * @param elements Map of elements with an element being :
   * - key: id of the element, used as the value in the leaves;
   * - value: info on the element, stored as metadata in the leaves.
   * @return The TreeBuilder with the elements added.
   */
  public setElements(elements: Array<[T, any]>): TreeBuilder<T> {
    this.elements = elements;
    return this;
  }

  /**
   * Build the tree corresponding to the elements provided.
   * @return The representation of the elements as a TreeElement if the list is not empty.
   * Notice that if there is only one element, a TreeLeaf is returned, else it returns a TreeNode.
   */
  public build(): TreeElement<T> | null {
    if (!this.elements) {
      throw new Error('Cannot build with null elements');
    }

    switch (this.elements.length) {
      case 0:
        return null;
      case 1:
        return new TreeLeaf<T>(
          this.elements[0][0],
          true,
          this.algorithm,
          this.elements[0][1],
        );
      default:
        // eslint-disable-next-line no-case-declarations
        const depth = Math.ceil(Math.log2(this.elements.length));
        return this.createNodes(depth);
    }
  }

  /**
   * Build a TreeNode using the depth.
   * @param depth Depth of the node in the tree (depth of 0 representing a leaf)
   */
  private createNodes(depth: number): TreeNode<T> {
    // Creation of all leaves.
    let intermediary: Array<TreeElement<T>> = this.elements!.map(
      (elem) => new TreeLeaf(elem[0], false, this.algorithm, elem[0]),
    );
    for (let currentDepth = 1; currentDepth <= depth; currentDepth++) {
      // Group all elements bu pairs.
      intermediary = intermediary.reduce<Array<TreeElement<T>>>(
        (acc, curr, index, arr) => {
          if (index % 2 === 0) {
            const left = curr;
            const right = arr[index + 1];
            const node = new TreeNode(
              null,
              currentDepth === depth,
              currentDepth,
              left,
              right,
            );
            acc.push(node);
          }
          return acc;
        },
        [],
      );
    }

    return intermediary[0] as TreeNode<T>;
  }
}

export default TreeBuilder;
