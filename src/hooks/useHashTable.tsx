import React, { useContext, useEffect } from "react";
import {
  HashTableContext,
  HashTableDispatchContext,
} from "_/providers/HashTableProvider";
import { Student } from "../../model/Student";

const useHashTable = () => {
  const hashtable = useContext(HashTableContext);
  const dispatch = useContext(HashTableDispatchContext);

  const addStudentToHashTable = (student: Student) => {
    const cloneHashtable = hashtable;
    cloneHashtable.put(student.hashCode(), student);
    dispatch(cloneHashtable);
  };

  return { hashtable, addStudentToHashTable };
};

export default useHashTable;
