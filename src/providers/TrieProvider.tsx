import { plainToClass, plainToClassFromExist } from "class-transformer";
import React, { createContext, useEffect, useState } from "react";
import { Student } from "../../model/Student";
import { Trie } from "../../utils/Trie";

export const TrieContext = createContext<Trie>(new Trie());
export const TrieDispatchContext = createContext<
  React.Dispatch<React.SetStateAction<Trie>>
>(() => {});

const TrieProvider: React.FC = ({ children }) => {
  const [trie, settrie] = useState<Trie>(new Trie());

  return (
    <TrieDispatchContext.Provider value={settrie}>
      <TrieContext.Provider value={trie}>{children}</TrieContext.Provider>
    </TrieDispatchContext.Provider>
  );
};

export default TrieProvider;
