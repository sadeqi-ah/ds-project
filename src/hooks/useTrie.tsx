import { useContext } from "react";
import { TrieContext, TrieDispatchContext } from "_/providers/TrieProvider";

const useTrie = () => {
  const trie = useContext(TrieContext);
  const dispatch = useContext(TrieDispatchContext);

  const addStudentToTrie = (studentId: string, hash: number) => {
    const cloneTrie = trie;
    cloneTrie.insert(studentId, hash);
    dispatch(cloneTrie);
  };

  return { trie, addStudentToTrie };
};

export default useTrie;
