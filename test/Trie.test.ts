import { LinkedList } from "../utils/LinkedList";
import { Trie } from "../utils/Trie";

test("null trie", () => {
  const trie = new Trie();
  expect(trie.search("274632")).toBe(null);
});

test("search() - 1", () => {
  const trie = new Trie();
  trie.insert("980122681003", 1);
  trie.insert("980122681004", 2);
  trie.insert("980122681002", 3);
  trie.insert("980122680001", 4);
  trie.insert("980122680003", 5);
  expect(trie.search("980122681003")).toBeDefined();
});

test("search() - 2", () => {
  const trie = new Trie();
  trie.insert("980122681003", 1);
  trie.insert("980122681004", 2);
  trie.insert("980122681002", 3);
  trie.insert("980122680001", 4);
  trie.insert("980122680003", 5);
  expect(trie.search("980122680005")).toBeNull();
});

test("autoComplete() - 1", () => {
  const trie = new Trie();
  trie.insert("980122681003", 1);
  trie.insert("980122681004", 2);
  trie.insert("980122681002", 3);
  trie.insert("980122680001", 4);
  trie.insert("980122680003", 5);
  expect(trie.autoComplete("980122681003")).toBe("980122681003");
});

test("autoComplete() - 2", () => {
  const trie = new Trie();
  trie.insert("980122681003", 1);
  trie.insert("980122681004", 2);
  trie.insert("980122681002", 3);
  trie.insert("980122680001", 4);
  trie.insert("980122680003", 5);

  const ll = new LinkedList<number>();
  ll.add(3);
  ll.add(1);
  ll.add(2);
  expect(trie.autoComplete("980122681")).toEqual(ll);
});

test("autoComplete() after delete", () => {
  const trie = new Trie();
  trie.insert("980122681003", 1);
  trie.insert("980122681004", 2);
  trie.insert("980122681002", 3);
  trie.insert("980122680001", 4);
  trie.insert("980122680003", 5);

  trie.remove("980122681003");

  const ll = new LinkedList<number>();
  ll.add(3);
  ll.add(2);
  expect(trie.autoComplete("980122681")).toEqual(ll);
});

test("autoComplete() with null prefix", () => {
  const trie = new Trie();
  trie.insert("980122681003", 1);
  trie.insert("980122681004", 2);
  trie.insert("980122681002", 3);
  trie.insert("980122680001", 4);
  trie.insert("980122680003", 5);

  const ll = new LinkedList<number>();
  ll.add(4);
  ll.add(5);
  ll.add(3);
  ll.add(1);
  ll.add(2);

  expect(trie.autoComplete("")).toEqual(ll);
});

test("autoComplete() with max param 1", () => {
  const trie = new Trie();
  trie.insert("980122681003", 1);
  trie.insert("980122681004", 2);
  trie.insert("980122681002", 3);
  trie.insert("980122680001", 4);
  trie.insert("980122680003", 5);

  const ll = new LinkedList<number>();
  ll.add(3);
  ll.add(1);
  ll.add(2);

  expect(trie.autoComplete("980122681", 3)).toEqual(ll);
});

test("autoComplete() with max param 2", () => {
  const trie = new Trie();
  trie.insert("980122681003", 1);
  trie.insert("980122681004", 2);
  trie.insert("980122681002", 3);
  trie.insert("980122680001", 4);
  trie.insert("980122680003", 5);

  const ll = new LinkedList<number>();
  ll.add(4);
  ll.add(5);

  expect(trie.autoComplete("", 2)).toEqual(ll);
});

test("autoComplete() - 3", () => {
  const trie = new Trie();
  trie.insert("980122681003", 1003);
  trie.insert("980122681004", 1004);
  trie.insert("980122681002", 1002);
  trie.insert("980122680001", 1);
  trie.insert("980122680003", 3);

  const ll = new LinkedList<number>();
  ll.add(1003);

  expect(trie.autoComplete("980122681003")).toEqual(ll);
});

test("autoComplete() - 4", () => {
  const trie = new Trie();
  trie.insert("980122681003", 1003);
  trie.insert("980122681004", 1004);
  trie.insert("980122681002", 1002);
  trie.insert("980122680001", 1);
  trie.insert("980122680003", 3);
  trie.insert("98012268", 68);

  const ll = new LinkedList<number>();
  ll.add(68);
  ll.add(1);
  ll.add(3);
  ll.add(1002);
  ll.add(1003);
  ll.add(1004);

  expect(trie.autoComplete("98012268")).toEqual(ll);
});
