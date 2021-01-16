import React from "react";
import { Link } from "react-router-dom";
import "_/styles/Student.scss";

export type StudentProps = {
  photo: string;
  name: string;
  studentId: string;
};

const Student: React.FC<StudentProps> = ({ name, photo, studentId }) => {
  return (
    <Link to="/student">
      <div className="student-container">
        <div className="photo">
          <img src={`./../images/student/${photo}`} />
        </div>
        <div className="information">
          <p>{name}</p>
          <p>
            <span>student id ~ </span>
            {studentId}
          </p>
        </div>
      </div>
      <div className="line"></div>
    </Link>
  );
};

export default Student;
