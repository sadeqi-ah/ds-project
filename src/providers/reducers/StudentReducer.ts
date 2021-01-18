import { Student } from "../../../model/Student";
import { Action } from "../types";
import * as types from "./types";

export const initialState = [];

export function studentReducer(
  state: Student[],
  action: Action<Student>
): Student[] {
  const { type, payload } = action;
  console.log(1);
  switch (type) {
    case types.ADD_STUDENT:
      return [...state, payload];
    case types.CLEAR:
      return initialState;
    default:
      return initialState;
  }
}
