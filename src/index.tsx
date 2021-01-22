import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import HashTableProvider from "./providers/HashTableProvider";
import StudentProvider from "./providers/StudentProvider";
import TrieProvider from "./providers/TrieProvider";

const mainElement = document.createElement("div");
mainElement.setAttribute("id", "root");
document.body.appendChild(mainElement);

const RootComponent = () => {
  return (
    <StudentProvider>
      <HashTableProvider>
        <TrieProvider>
          <App />
        </TrieProvider>
      </HashTableProvider>
    </StudentProvider>
  );
};

render(<RootComponent />, mainElement);
