class LinkedListNode<E> {
  public data: E;
  public next: LinkedListNode<E> | null;

  constructor(data: E) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList<E> {
  private head: LinkedListNode<E> | null;
  private _size: number;

  constructor() {
    this.head = null;
    this._size = 0;
  }

  /**
   * return size of linked list
   */
  size(): number {
    return this._size;
  }

  /**
   * if linked list is empty , return true , else return false
   */
  isEmpty(): boolean {
    return this.size() == 0;
  }

  /**
   * Method to insert a new node
   * @param data is the value that is added to the linkedlist
   */
  add(data: E): void {
    // Create a new node with given data
    const newNode = new LinkedListNode<E>(data);
    newNode.next = null;

    /**
     * If the Linked List is empty,
     * then make the new node as head
     */
    if (!this.head) {
      this.head = newNode;
      this._size++;
      return;
    }

    /**
     * Else traverse till the last node
     * and insert the new_node there
     */
    const last = this.last();

    //Insert the new_node at last node
    if (last) {
      last.next = newNode;
      this._size++;
    }
  }

  /**
   * return the last node of linkedlist
   */
  last(): LinkedListNode<E> | null {
    // if head is null, the linkedlist is empty
    if (!this.head) return null;

    /**
     * Otherwise it continues until
     * it reaches the node whose next property is empty
     */
    let last = this.head;
    while (last.next) {
      last = last.next;
    }
    return last;
  }

  /**
   * method to removed node from the linkedlist
   * @param data is the value that is removed from the linkedlist
   */
  remove(data: E): void {
    //store head node
    let currentNode = this.head;
    let prev = null;

    /**
     * If head node itself holds the key to be deleted
     */
    if (currentNode && currentNode.data == data) {
      this.head = currentNode.next; // Changed head
      this._size--;
      return;
    }

    /**
     * If the key is somewhere other than at head
     * Search for the key to be deleted,
     * keep track of the previous node
     * as it is needed to change currentNode.next
     */
    while (currentNode && currentNode.data != data) {
      prev = currentNode;
      currentNode = currentNode.next;
    }

    /**
     * If the key was present, it should be at currNode
     * Therefore the currNode shall not be null
     */
    if (currentNode && prev) {
      prev.next = currentNode.next;
      this._size--;
      return;
    }
  }

  getHead() {
    return this.head;
  }
}
