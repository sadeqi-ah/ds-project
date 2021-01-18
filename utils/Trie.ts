import { LinkedList } from "./LinkedList";

class TrieNode {
  public children: TrieNode[];
  public isLeaf: boolean;
  public hash: number;

  constructor() {
    this.children = new Array(10);
    this.isLeaf = false;
    this.hash = -1;
  }
}

export class Trie {
  // static UNIT_NUMBER_COUNT: number = 10;
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(key: string, hash: number) {
    let nc = this.root;
    Array.from(key).forEach((index) => {
      if (!nc.children[parseInt(index)]) {
        nc.children[parseInt(index)] = new TrieNode();
      }
      nc = nc.children[parseInt(index)];
    });
    nc.isLeaf = true;
    nc.hash = hash;
  }

  remove(key: string) {
    this._remove(this.root, key, 0);
  }

  private _remove(currentRoot: TrieNode, key: string, index: number): boolean {
    if (index == key.length) {
      if (currentRoot.hash == -1) {
        return false;
      }
      currentRoot.hash = -1;
      return currentRoot.children.length > 0;
    }

    const node = currentRoot.children[parseInt(key.charAt(index))];
    if (node == null) {
      return false;
    }

    const result = this._remove(node, key, index + 1) && node.hash != -1;
    if (result) {
      delete currentRoot.children[parseInt(key.charAt(index))];
      return currentRoot.children.length > 0;
    }

    return false;
  }

  search(key: string): TrieNode | null {
    let nc = this.root;

    for (let i = 0; i < key.length; i++) {
      const index = key.charAt(i);
      if (!nc.children[parseInt(index)]) {
        return null;
      }
      nc = nc.children[parseInt(index)];
    }
    return nc;
  }

  autoComplete(key: string): LinkedList<string> | string {
    let node = this.search(key);

    if (node && !node.isLeaf) {
      return this._autoComplete(node as TrieNode, key, null);
    }

    return key;
  }

  private _autoComplete(
    node: TrieNode,
    currentStr: string,
    result: LinkedList<string> | null
  ): LinkedList<string> {
    if (result == null) result = new LinkedList<string>();

    if (node.hash != -1) result.add(currentStr);

    if (node.isLeaf) return result;

    for (let i = 0; i < 10; i++) {
      if (node.children[i] != null) {
        // append current number to currentStr string
        const temp = `${currentStr}${i}`;
        result = this._autoComplete(node.children[i], temp, result);
      }
    }

    return result;
  }
}
