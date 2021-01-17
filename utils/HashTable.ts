class HashTableEntry<T> {
  public key: number;
  public value: T;
  public next: HashTableEntry<T> | null;

  constructor(key: number, value: T) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

export class HashTable<T> {
  private buckets: (HashTableEntry<T> | null)[];
  private capacity: number;
  private _size: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this._size = 0;
    this.buckets = new Array(this.capacity);
  }

  size(): number {
    return this._size;
  }

  isEmpty(): boolean {
    return this.size() == 0;
  }

  put(key: number, value: T): void {
    // Find head of chain for given key
    const index = this.indexFor(key);
    let entry: HashTableEntry<T> | null = this.buckets[index];

    // check if the key already exists
    while (entry) {
      if (entry.key == key) {
        entry.value = value;
        return;
      }
      entry = entry.next;
    }

    // Insert new HashtableEntry containing the value to chain head
    this._size++;
    entry = this.buckets[index];
    const newEntry = new HashTableEntry<T>(key, value);
    newEntry.next = entry;
    this.buckets[index] = newEntry;
  }

  remove(key: number): T | null {
    // Apply hash function to find index for given key
    const index = this.indexFor(key);

    // Get head of chain
    let entry: HashTableEntry<T> | null = this.buckets[index];

    // Search for key in its chain
    let prev: HashTableEntry<T> | null = null;
    while (entry) {
      if (entry.key == key) break;

      prev = entry;
      entry = entry.next;
    }

    // If key was not there
    if (!entry) return null;

    this._size--;

    if (prev) prev.next = entry.next;
    else this.buckets[index] = entry.next;

    return entry.value;
  }

  get(key: number): T | null {
    // Find head of chain for given key
    const index = this.indexFor(key);
    let entry: HashTableEntry<T> | null = this.buckets[index];

    // Search key in chain
    while (entry) {
      if (entry.key == key) return entry.value;
      entry = entry.next;
    }

    // If key not found
    return null;
  }

  private indexFor(key: number): number {
    return key;
  }
}
