import { LinkedList } from "../utils/LinkedList";

test("isEmpty()", () => {
  const linkedList = new LinkedList<number>();

  expect(linkedList.isEmpty()).toBe(true);
});

test("isEmpty() after insert one node", () => {
  const linkedList = new LinkedList<number>();
  linkedList.add(2);
  expect(linkedList.isEmpty()).toBe(false);
});

test("size() after insert two node", () => {
  const linkedList = new LinkedList<number>();
  linkedList.add(2);
  linkedList.add(5);
  expect(linkedList.size()).toBe(2);
});

test("remove()", () => {
  const linkedList = new LinkedList<number>();
  linkedList.add(2);
  linkedList.add(5);
  linkedList.remove(5);
  expect(linkedList.size()).toBe(1);
});
