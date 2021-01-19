import { LinkedList } from "../utils/LinkedList";
import { Trie } from "../utils/Trie";

test("null trie", () => {
  const trie = new Trie();
  expect(trie.search("274632")).toBe(null);
});

test("search() - 1", () => {
  const trie = new Trie();
  trie.insert("980122681003", 19);
  trie.insert("980122681004", 19);
  trie.insert("980122681002", 19);
  trie.insert("980122680001", 19);
  trie.insert("980122680003", 19);
  expect(trie.search("980122681003")).toBeDefined();
});

test("search() - 2", () => {
  const trie = new Trie();
  trie.insert("980122681003", 19);
  trie.insert("980122681004", 19);
  trie.insert("980122681002", 19);
  trie.insert("980122680001", 19);
  trie.insert("980122680003", 19);
  expect(trie.search("980122680005")).toBeNull();
});

test("autoComplete() - 1", () => {
  const trie = new Trie();
  trie.insert("980122681003", 19);
  trie.insert("980122681004", 19);
  trie.insert("980122681002", 19);
  trie.insert("980122680001", 19);
  trie.insert("980122680003", 19);
  expect(trie.autoComplete("980122681003")).toBe("980122681003");
});

test("autoComplete() - 2", () => {
  const trie = new Trie();
  trie.insert("980122681003", 19);
  trie.insert("980122681004", 19);
  trie.insert("980122681002", 19);
  trie.insert("980122680001", 19);
  trie.insert("980122680003", 19);

  const ll = new LinkedList<string>();
  ll.add("980122681002");
  ll.add("980122681003");
  ll.add("980122681004");
  expect(trie.autoComplete("980122681")).toEqual(ll);
});

test("autoComplete() after delete", () => {
  const trie = new Trie();
  trie.insert("980122681003", 19);
  trie.insert("980122681004", 19);
  trie.insert("980122681002", 19);
  trie.insert("980122680001", 19);
  trie.insert("980122680003", 19);

  trie.remove("980122681003");

  const ll = new LinkedList<string>();
  ll.add("980122681002");
  ll.add("980122681004");
  expect(trie.autoComplete("980122681")).toEqual(ll);
});

test("autoComplete() with null prefix", () => {
  const trie = new Trie();
  trie.insert("980122681003", 19);
  trie.insert("980122681004", 19);
  trie.insert("980122681002", 19);
  trie.insert("980122680001", 19);
  trie.insert("980122680003", 19);

  const ll = new LinkedList<string>();
  ll.add("980122680001");
  ll.add("980122680003");
  ll.add("980122681002");
  ll.add("980122681003");
  ll.add("980122681004");

  expect(trie.autoComplete("")).toEqual(ll);
});

test("autoComplete() with max param 1", () => {
  const trie = new Trie();
  trie.insert("980122681003", 19);
  trie.insert("980122681004", 19);
  trie.insert("980122681002", 19);
  trie.insert("980122680001", 19);
  trie.insert("980122680003", 19);

  const ll = new LinkedList<string>();
  ll.add("980122681002");
  ll.add("980122681003");
  ll.add("980122681004");

  expect(trie.autoComplete("980122681", 3)).toEqual(ll);
});

test("autoComplete() with max param 2", () => {
  const trie = new Trie();
  trie.insert("980122681003", 19);
  trie.insert("980122681004", 19);
  trie.insert("980122681002", 19);
  trie.insert("980122680001", 19);
  trie.insert("980122680003", 19);

  const ll = new LinkedList<string>();
  ll.add("980122680001");
  ll.add("980122680003");

  expect(trie.autoComplete("", 2)).toEqual(ll);
});
