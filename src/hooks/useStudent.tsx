import { useContext, useEffect, useRef, useState } from "react";
import {
  StudentsContext,
  StudentsDispatchContext,
} from "_/providers/StudentProvider";
import { Student } from "../../model/Student";

import * as types from "./../providers/reducers/types";
import useHashTable from "./useHashTable";
import useTrie from "./useTrie";

export const useStudent = () => {
  const students = useContext(StudentsContext);
  const dispatch = useContext(StudentsDispatchContext);

  const { addStudentToHashTable, hashtable } = useHashTable();
  const { addStudentToTrie, trie } = useTrie();

  useEffect(() => {
    console.log(hashtable.size());
    console.log(trie);
  });

  const addStudent = (student: Student): void => {
    dispatch({ type: types.ADD_STUDENT, payload: student });
    addStudentToHashTable(student);
    addStudentToTrie(student.studentId, student.hashCode());
  };

  const getStudent = (student: string): Student | null => {
    const hash = trie.search(student)?.hash;
    if (hash) {
      return hashtable.get(hash);
    }
    return null;
  };

  const removeStudent = (student: Student): void => {
    dispatch({ type: types.DELETE_STUDENT, payload: student });
    trie.remove(student.studentId);
    hashtable.remove(student.hashCode());
  };

  return { students, addStudent, getStudent, removeStudent };
};
