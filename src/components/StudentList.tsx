import React, { useEffect, useState } from "react";
import { useStudent } from "_/hooks/useStudent";
import { Student } from "../../model/Student";
import ScrollLayout from "./ScrollLayout";
import StudentComponent from "./Student";

const StudentList: React.FC = () => {
  const { students } = useStudent();
  const [state, setState] = useState<Student[]>([]);

  useEffect(() => {
    setState(students);
  }, [students]);

  const convertStudentsToNode = () => {
    const studentList = state;
    return studentList.map((student) => (
      <StudentComponent
        key={student.studentId}
        name={student.name}
        studentId={student.studentId}
        photo={"1.jpg"}
      />
    ));
  };

  return (
    <ScrollLayout width={"100%"} height={"calc(100vh - 100px)"}>
      {convertStudentsToNode()}
    </ScrollLayout>
  );
};

export default StudentList;
