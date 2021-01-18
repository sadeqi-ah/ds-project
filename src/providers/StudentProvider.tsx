import React, { createContext, useContext, useReducer, useState } from "react";
import { Student } from "../../model/Student";

import { studentReducer, initialState } from "./reducers/StudentReducer";
import { Action } from "./types";

export const StudentsContext = createContext<Student[]>([]);
export const StudentsDispatchContext = createContext<
  React.Dispatch<Action<Student>>
>(() => {});

const StudentProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initialState);
  return (
    <StudentsDispatchContext.Provider value={dispatch}>
      <StudentsContext.Provider value={state}>
        {children}
      </StudentsContext.Provider>
    </StudentsDispatchContext.Provider>
  );
};

export default StudentProvider;
