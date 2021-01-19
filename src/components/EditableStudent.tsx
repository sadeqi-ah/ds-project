import React, { useState } from "react";
import Button from "./Button";
import "_/styles/AddStudent.scss";
import { Student } from "../../model/Student";
import { useStudent } from "_/hooks/useStudent";

type InputsType = {
  name: string;
  studentId: string;
  gpa: number;
  field: string;
};

const EditableStudent: React.FC = () => {
  const { addStudent } = useStudent();

  const [state, setstate] = useState<InputsType>({
    name: "",
    studentId: "",
    gpa: 0,
    field: "",
  });

  const nameInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setstate((prev) => {
      return {
        ...prev,
        name: target.value,
      };
    });
  };

  const fieldInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setstate((prev) => {
      return {
        ...prev,
        field: target.value,
      };
    });
  };

  const gpaInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setstate((prev) => {
      return {
        ...prev,
        gpa: parseFloat(target.value),
      };
    });
  };

  const studentIdInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setstate((prev) => {
      return {
        ...prev,
        studentId: target.value,
      };
    });
  };

  const submit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const newStudent = new Student(
      state.name,
      state.studentId,
      state.gpa,
      state.field
    );

    addStudent(newStudent);
  };

  return (
    <div className="add-student-container">
      <div className="photo-sec">
        <Button color="#EF233C">
          <svg
            style={{ width: 12, height: 12 }}
            viewBox="0 0 8 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1.5198 0.18688L1.62666 0.279149L3.99873 2.65193L6.37023 0.281747C6.74234 -0.0903582 7.34564 -0.0903582 7.71775 0.281747C8.05602 0.620024 8.08678 1.14937 7.81 1.52239L7.71775 1.62926L5.34667 3.99987L7.71972 6.37348C8.09179 6.74562 8.09173 7.34892 7.71958 7.72099C7.38127 8.05923 6.85192 8.08993 6.47893 7.81312L6.37207 7.72085L4 5.34655L1.62977 7.71724C1.25766 8.08934 0.65436 8.08934 0.282255 7.71724C-0.0560226 7.37896 -0.0867749 6.84961 0.189997 6.47659L0.282255 6.36973L2.65206 3.9986L0.279009 1.62652C-0.0930574 1.25438 -0.0929951 0.651075 0.279149 0.279009C0.617462 -0.0592334 1.14681 -0.0899309 1.5198 0.18688Z" />
          </svg>
        </Button>
        <div className="photo">
          <img src="./../images/student/1.jpg" />
        </div>
        <Button color="#642CEA">
          <svg
            style={{ width: 12, height: 12 }}
            viewBox="0 0 12 11"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.41194 0C8.00393 0.00412966 8.47031 0.31172 8.74077 0.844449C8.77962 0.92045 8.82586 1.0139 8.88154 1.12873L9.26756 1.94026C9.28874 1.98497 9.33341 2.01327 9.39454 2.01342L9.52142 2.01688C10.9079 2.08934 12 3.23535 12 4.62771V8.18556C12 9.62915 10.8281 10.8 9.3828 10.8H2.6178C1.17197 10.8 0 9.62926 0 8.18556V4.62771C0 3.18359 1.17178 2.01327 2.5891 2.01418L2.634 2.01224C2.6768 2.00674 2.71445 1.97952 2.73286 1.94065L3.02759 1.31862L3.25892 0.845051C3.53072 0.311361 3.99633 0.00412781 4.58806 0H7.41194ZM7.4088 0.89903H4.59434C4.34997 0.900735 4.18485 1.00969 4.06116 1.25257C4.02504 1.32356 3.98083 1.4132 3.92689 1.52469L3.54656 2.32482C3.3965 2.6416 3.09513 2.8595 2.72005 2.90671L2.6178 2.91232C1.6688 2.91232 0.9 3.68016 0.9 4.62771V8.18556C0.9 9.13273 1.66903 9.90095 2.6178 9.90095H9.3828C10.331 9.90095 11.1 9.13266 11.1 8.18556V4.62771C11.1 3.71423 10.3834 2.96221 9.48617 2.91517L9.29177 2.9083C8.93078 2.87634 8.61086 2.65584 8.45386 2.32443L8.03474 1.44506L7.93866 1.25221C7.8156 1.00982 7.65021 0.900736 7.4088 0.89903ZM6.00267 3.8369L6.12383 3.84012C7.36789 3.90485 8.35931 4.93876 8.35717 6.19859C8.35493 7.49454 7.2978 8.55125 6.00122 8.55273C4.70235 8.55347 3.64222 7.49239 3.64298 6.19726C3.63251 4.90652 4.69988 3.83543 6.00267 3.8369ZM6.00165 4.73595L5.906 4.739C5.14677 4.78841 4.5368 5.43127 4.54296 6.19387C4.5425 6.99636 5.19969 7.65414 6.00044 7.65368C6.80048 7.65276 7.45579 6.99772 7.45717 6.19705C7.45854 5.39306 6.80436 4.73687 6.00165 4.73595ZM9.42272 3.76672C9.47203 3.81526 9.51356 3.87383 9.53661 3.92322L9.55026 3.95824C9.5834 4.03269 9.60012 4.11364 9.60012 4.19532C9.60012 4.35219 9.53881 4.49727 9.42501 4.61804C9.32664 4.71696 9.19745 4.77779 9.05964 4.79145L9.00012 4.79439L8.94163 4.79145C8.88365 4.78551 8.8264 4.7704 8.76228 4.74461C8.69094 4.71296 8.62919 4.67269 8.56949 4.6121C8.46223 4.49813 8.40012 4.34908 8.40012 4.19532C8.40012 4.11364 8.41684 4.03269 8.44948 3.95936C8.48219 3.88507 8.52096 3.82239 8.59103 3.75422C8.64432 3.70785 8.69893 3.67054 8.77356 3.63769C8.9949 3.55008 9.25818 3.60243 9.42272 3.76672Z" />
          </svg>
        </Button>
      </div>
      <div className="inputs">
        <div className="lables">
          <span>name : </span>
          <span>Student Id : </span>
          <span>gpa : </span>
          <span>field :</span>
        </div>
        <div className="input-s">
          <input type="text" onChange={nameInputHandler} />
          <input type="number" onChange={studentIdInputHandler} />
          <input type="number" onChange={gpaInputHandler} />
          <input type="text" onChange={fieldInputHandler} />
        </div>
      </div>
      <Button title="submit" color="#2EC4B6" onClick={submit}>
        <svg
          width="18"
          height="13"
          viewBox="0 0 18 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.8007 0.43934C17.3332 0.971873 17.3816 1.8052 16.9459 2.39242L16.8007 2.56066L7.30866 12.0527C6.77621 12.5851 5.94303 12.6336 5.35581 12.1981L5.18756 12.0529L0.439563 7.30688C-0.146346 6.72122 -0.146547 5.77147 0.439116 5.18556C0.971537 4.65292 1.80485 4.60433 2.39217 5.03991L2.56044 5.18511L6.2462 8.8696L14.6793 0.43934C15.2651 -0.146447 16.2149 -0.146447 16.8007 0.43934Z"
            fill="#2EC4B6"
          />
        </svg>
      </Button>
    </div>
  );
};

export default EditableStudent;
