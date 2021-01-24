import { LinkedList } from "./LinkedList";

class TrieNode {
  public children: TrieNode[];
  public hash: number;

  constructor() {
    this.children = new Array(10);
    this.hash = -1;
  }
}

export class Trie {
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

  autoComplete(key: string, max: number = 50): LinkedList<number> | null {
    if (key == "") return this._autoComplete(this.root, key, max);

    let node = this.search(key);
    if (node) {
      return this._autoComplete(node as TrieNode, key, max);
    }

    return null;
  }

  private _autoComplete(
    node: TrieNode,
    currentStr: string,
    max: number,
    result: LinkedList<number> = new LinkedList<number>()
  ): LinkedList<number> {
    if (node.hash != -1 && result.size() < max) {
      result.add(node.hash);
    }
    if (result.size() === max) return result;

    for (let i = 0; i < 10; i++) {
      if (node.children[i]) {
        // append current number to currentStr string
        const temp = `${currentStr}${i}`;
        result = this._autoComplete(node.children[i], temp, max, result);
      }
    }

    return result;
  }
}
