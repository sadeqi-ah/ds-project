import { stringHashCode } from "../utils/helper";

export interface IStudent {
  hashCode(): number;
}

export class Student implements IStudent {
  private _name: string;
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  private _studentId: string;
  get studentId(): string {
    return this._studentId;
  }
  set studentId(value: string) {
    this._studentId = value;
  }

  private _gpa: number;
  get gpa(): number {
    return this._gpa;
  }
  set gpa(value: number) {
    this._gpa = value;
  }

  private _field: string;
  get field(): string {
    return this._field;
  }
  set field(value: string) {
    this._field = value;
  }

  constructor(name: string, studentId: string, gpa: number, field: string) {
    this._name = name;
    this._studentId = studentId;
    this._gpa = gpa;
    this._field = field;
  }

  hashCode(): number {
    let hash = 7;
    hash = 31 * hash + (this._name == null ? 0 : stringHashCode(this._name));
    hash =
      31 * hash +
      (this._studentId == null ? 0 : stringHashCode(this._studentId));
    hash = 31 * hash + (this._field == null ? 0 : stringHashCode(this._field));
    hash = 31 * hash + this._gpa;
    return hash;
  }
}
