import { Student } from "./../model/Student";
import { HashTable } from "../utils/HashTable";

test("get()", () => {
  const ht = new HashTable(3);
  const s1: Student = new Student("amir", "980122681003", 19, "ce");
  const s2 = new Student("hossein", "980122681002", 20, "ce");
  const s3 = new Student("matin", "980122680001", 16, "ce");
  ht.put(s1.hashCode(), s1);
  ht.put(s2.hashCode(), s2);
  ht.put(s3.hashCode(), s3);
  expect(ht.get(s1.hashCode())).toEqual(s1);
});

test("remove()", () => {
  const ht = new HashTable(3);
  const s1: Student = new Student("amir", "980122681003", 19, "ce");
  const s2 = new Student("hossein", "980122681002", 20, "ce");
  const s3 = new Student("matin", "980122680001", 16, "ce");
  ht.put(s1.hashCode(), s1);
  ht.put(s2.hashCode(), s2);
  ht.put(s3.hashCode(), s3);
  ht.remove(s1.hashCode());
  expect(ht.get(s1.hashCode())).toBeNull();
});
