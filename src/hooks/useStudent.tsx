import { useContext, useEffect, useRef, useState } from "react";
import {
  StudentsContext,
  StudentsDispatchContext,
} from "_/providers/StudentProvider";
import { Student } from "../../model/Student";
import { HashTable } from "../../utils/HashTable";
import { Trie } from "../../utils/Trie";
import * as types from "./../providers/reducers/types";

export const useStudent = () => {
  const students = useContext(StudentsContext);
  const dispatch = useContext(StudentsDispatchContext);

  const trieRef = useRef<Trie>(new Trie());
  const hashtableRef = useRef<HashTable<Student>>(new HashTable<Student>(997));

  useEffect(() => {
    console.log(trieRef.current);
    console.log(hashtableRef.current.size());
  });

  const addStudent = (student: Student): void => {
    dispatch({ type: types.ADD_STUDENT, payload: student });
    hashtableRef.current.put(student.hashCode(), student);
    trieRef.current.insert(student.studentId, student.hashCode());
  };

  return { students, addStudent };
};
