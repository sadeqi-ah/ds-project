import React, { createContext, useEffect, useState } from "react";
import { Student } from "../../model/Student";
import { HashTable } from "../../utils/HashTable";
import { Trie } from "../../utils/Trie";

export const HashTableContext = createContext<HashTable<Student>>(
  new HashTable<Student>(997)
);
export const HashTableDispatchContext = createContext<
  React.Dispatch<React.SetStateAction<HashTable<Student>>>
>(() => {});

const HashTableProvider: React.FC = ({ children }) => {
  const [hashTable, sethashTable] = useState<HashTable<Student>>(
    new HashTable<Student>(997)
  );

  return (
    <HashTableDispatchContext.Provider value={sethashTable}>
      <HashTableContext.Provider value={hashTable}>
        {children}
      </HashTableContext.Provider>
    </HashTableDispatchContext.Provider>
  );
};

export default HashTableProvider;
