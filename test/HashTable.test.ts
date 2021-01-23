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

// test("best answer", () => {

//   const rand = (start: number, end: number) => {
//     return Math.floor(Math.random() * end + start);
//   };

//   const strRand = (length: number) => {
//     let result = "";
//     const characters =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     return result;
//   };

//   const generateStudentId = () => {
//     return `98${rand(0, 10000000000)}`;
//   };

//   const hashtable_capacity = 1000;
//   const element_count = 60000;

//   const hashtable = new HashTable<Student>(hashtable_capacity);

//   const array = new Array(hashtable_capacity);
//   array.fill(0);

//   for (let i = 0; i < element_count; i++) {
//     const student = new Student(
//       strRand(rand(5, 10)),
//       generateStudentId(),
//       rand(0, 20),
//       strRand(10)
//     );
//     const index = hashtable.indexFor(student.hashCode());
//     array[index]++;
//   }

//   array.sort();
//   const result = {
//     renge: `(${array[0]},${array[hashtable_capacity - 1]})`,
//     "hashtable size": hashtable_capacity,
//     callision: array.filter((v) => v > 0).length,
//     "count 0": array.filter((v) => v === 0).length,
//     items: element_count,
//   };

//   expect(result).toBeNull();
// });
