import React, { useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import Back from "_/components/Back";
import Button from "_/components/Button";
import { useStudent } from "_/hooks/useStudent";
import "_/styles/StudentPage.scss";
import { Student } from "../../model/Student";

interface matchParams {
  studentId: string;
}

const StudentPage: React.FC<RouteComponentProps<matchParams>> = ({ match }) => {
  const [student, setStudent] = useState<Student | null>(null);

  const { getStudent, removeStudent } = useStudent();

  const {
    params: { studentId },
  } = match;

  useEffect(() => {
    setStudent(getStudent(studentId));
  }, []);

  const remove = () => {
    if (student) removeStudent(student);
  };

  return (
    <>
      <Back />
      {student && (
        <div className="studetn-page">
          <div className="photo">
            <img
              src={`../images/student/${
                student.photo !== "" ? student.photo : "template.jpg"
              }`}
            />
          </div>
          <div className="name">{student.name}</div>
          <div className="box-info">
            <span>student id : </span>
            <span>{student.studentId}</span>
          </div>
          <div className="box-info">
            <span>grading in education : </span>
            <span>{student.gpa}</span>
          </div>
          <div className="box-info">
            <span>field : </span>
            <span>{student.field}</span>
          </div>
          <div className="action-btn">
            <Link to="/">
              <Button title="delete" color="#EF233C" onClick={remove}>
                <svg viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.2911 6.04694L14.3806 6.04815C14.7127 6.07562 14.9674 6.35144 14.985 6.68345L14.9764 6.86857L14.6934 10.3347L14.3965 13.7172C14.3337 14.3925 14.2774 14.962 14.2289 15.4104C14.0602 16.9729 13.0459 17.9391 11.5169 17.9677C9.13443 18.0117 6.84429 18.0113 4.62035 17.9632C3.13558 17.932 2.1363 16.9553 1.97059 15.4167L1.85607 14.2831L1.65595 12.0843L1.45094 9.67146L1.21655 6.77509C1.18741 6.40348 1.45756 6.07802 1.81993 6.04814C2.15211 6.02076 2.44647 6.25126 2.51567 6.5761L2.5426 6.84156L2.76269 9.55684L3.00302 12.3713C3.11081 13.5897 3.2043 14.5757 3.27912 15.2683C3.37355 16.1451 3.83524 16.5964 4.6477 16.6134C6.85427 16.6611 9.12733 16.6616 11.4931 16.6179C12.3549 16.6018 12.824 16.1549 12.9204 15.2616L13.0344 14.1341C13.0678 13.7867 13.1035 13.403 13.1412 12.9864L13.3818 10.2184L13.6715 6.66675C13.6983 6.32612 13.9673 6.06501 14.2911 6.04694ZM0.658251 4.49026C0.294709 4.49026 0 4.18805 0 3.81524C0 3.4735 0.247638 3.19108 0.56893 3.14638L0.658251 3.14022H3.52594C3.86672 3.14022 4.16506 2.91535 4.27177 2.59136L4.29789 2.49132L4.52074 1.35479C4.717 0.602069 5.35428 0.0661438 6.1011 0.00569834L6.24233 0H9.9575C10.7167 0 11.3871 0.491648 11.6452 1.25135L11.6887 1.39688L11.9019 2.49105C11.9688 2.83385 12.2423 3.08988 12.5731 3.13359L12.6739 3.14022H15.5417C15.9053 3.14022 16.2 3.44243 16.2 3.81524C16.2 4.15698 15.9524 4.4394 15.6311 4.4841L15.5417 4.49026H0.658251ZM9.9575 1.35005H6.24233C6.05763 1.35005 5.89346 1.4609 5.82527 1.60022L5.80214 1.66143L5.58881 2.75615C5.56272 2.88976 5.52491 3.01842 5.47661 3.1411L10.7233 3.14128C10.6932 3.06474 10.6671 2.98586 10.6454 2.90491L10.611 2.75587L10.4073 1.70352C10.3597 1.52092 10.2126 1.38724 10.0352 1.35668L9.9575 1.35005Z" />
                </svg>
              </Button>
            </Link>

            <Link to={`/edit-student/${student.studentId}`}>
              <Button title="update" color="#FCA311">
                <svg viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3615 16.633C18.7466 16.633 19.0588 16.939 19.0588 17.3165C19.0588 17.6625 18.7965 17.9485 18.4562 17.9938L18.3615 18H11.0869C10.7018 18 10.3897 17.694 10.3897 17.3165C10.3897 16.9705 10.652 16.6845 10.9923 16.6392L11.0869 16.633H18.3615ZM11.2862 0.970537C12.6064 -0.323512 14.7476 -0.323512 16.0677 0.970537L17.4382 2.31395C18.7583 3.608 18.7583 5.7069 17.4382 7.00094L7.13711 17.0985C6.54809 17.6759 5.74948 17.9999 4.91592 17.9999H0.697278C0.30538 17.9999 -0.00954554 17.6834 0.000221187 17.2994L0.106339 13.1267C0.127437 12.3381 0.456639 11.5862 1.02565 11.0284L11.2862 0.970537ZM10.4887 3.68365L2.01174 11.995C1.69545 12.3051 1.51215 12.7237 1.50043 13.1617L1.41189 16.6324L4.91592 16.6329C5.32823 16.6329 5.72474 16.4906 6.03771 16.2336L6.15102 16.1319L14.67 7.78129L10.4887 3.68365ZM15.0816 1.93715C14.3061 1.17695 13.0479 1.17695 12.2723 1.93715L11.4755 2.71694L15.6558 6.81459L16.4521 6.03433C17.1845 5.31636 17.2252 4.17634 16.5742 3.41148L16.4521 3.28056L15.0816 1.93715Z" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentPage;
