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
    <HashTableProvider>
      <TrieProvider>
        <StudentProvider>
          <App />
        </StudentProvider>
      </TrieProvider>
    </HashTableProvider>
  );
};

render(<RootComponent />, mainElement);
