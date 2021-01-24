import React, { useEffect, useMemo, useState } from "react";
import Button from "./Button";
import "_/styles/AddStudent.scss";
import { Student } from "../../model/Student";
import { useStudent } from "_/hooks/useStudent";
import { useHistory } from "react-router-dom";
import { remote } from "electron";
import { ipcRenderer } from "electron";

type InputsType = {
  photo: {
    base64?: string;
    url: string;
    extension?: string;
  };
  name: string;
  studentId: string;
  gpa: number;
  field: string;
};

type ErrorType = {
  name: {
    error: boolean;
    message?: string;
  };
  studentId: {
    error: boolean;
    message?: string;
  };
  field: {
    error: boolean;
    message?: string;
  };
};

type Props = {
  studentId?: string;
};

const EditableStudent: React.FC<Props> = ({ studentId }) => {
  const { addStudent, checkExist, getStudent, editStudent } = useStudent();
  const history = useHistory();

  const oldstudent = useMemo(() => {
    if (studentId) {
      return getStudent(studentId);
    }
    return undefined;
  }, [studentId]);

  const [state, setstate] = useState<InputsType>({
    photo: { url: "" },
    name: "",
    studentId: "",
    gpa: 0,
    field: "",
  });

  const [error, setError] = useState<ErrorType>({
    name: { error: false },
    studentId: { error: false },
    field: { error: false },
  });

  useEffect(() => {
    if (oldstudent) {
      setstate({
        name: oldstudent.name,
        studentId: oldstudent.studentId,
        gpa: oldstudent.gpa,
        field: oldstudent.field,
        photo: { url: oldstudent.photo },
      });
    }
  }, []);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    let value: any = target.value;
    if (target.name == "gpa") value = parseFloat(value);
    setstate((prev) => {
      return {
        ...prev,
        [target.name]: value,
      };
    });
  };

  const submit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const isExist = checkExist(state.studentId);

    let errorStudentId = {
      error: false,
      message: "",
    };

    if (state.studentId) {
      if (!oldstudent) {
        errorStudentId.error = isExist;
        errorStudentId.message = isExist ? "This student id exists" : "";
      } else {
        if (isExist && state.studentId != oldstudent.studentId) {
          errorStudentId.error = true;
          errorStudentId.message = "This student id exists";
        } else {
          errorStudentId.error = false;
          errorStudentId.message = "";
        }
      }
    } else {
      errorStudentId.error = true;
      errorStudentId.message = "student id should not be empty!";
    }

    if (!state.name || !state.field || errorStudentId.error) {
      setError({
        name: {
          error: !Boolean(state.name),
          message: state.name == "" ? "name should not be empty!" : "",
        },
        studentId: {
          error: errorStudentId.error,
          message: errorStudentId.message,
        },
        field: {
          error: !Boolean(state.field),
          message: state.field == "" ? "field should not be empty!" : "",
        },
      });
      return;
    }

    setError({
      name: {
        error: false,
      },
      studentId: {
        error: false,
      },
      field: {
        error: false,
      },
    });
    const newStudent = new Student(
      state.name,
      state.studentId,
      state.gpa,
      state.field,
      state.photo.base64
        ? `${state.studentId}.${state.photo.extension}`
        : state.photo.url
    );

    if (oldstudent) {
      editStudent(newStudent, oldstudent);
    } else {
      addStudent(newStudent);
    }
    if (state.photo.base64) {
      ipcRenderer.send(
        "upload_photo",
        state.photo.url,
        newStudent.studentId,
        oldstudent?.studentId
      );
    }
    history.push("/");
  };

  const uploadPhoto = () => {
    const dialog = remote.dialog;

    dialog
      .showOpenDialog({
        title: "Select the photo to be uploaded",
        buttonLabel: "Upload",
        filters: [
          {
            name: "Images",
            extensions: ["jpg", "png", "gif"],
          },
        ],
        properties: ["openFile"],
      })
      .then((file) => {
        const ex: {
          [key: string]: string;
        } = {
          "/": "jpeg",
          i: "png",
          R: "gif",
        };

        if (!file.canceled) {
          const fs = remote.require("fs");
          const base64 = fs.readFileSync(file.filePaths[0]).toString("base64");
          setstate((prev) => {
            return {
              ...prev,
              photo: {
                base64,
                url: file.filePaths[0].toString(),
                extension: ex[base64.charAt(0)],
              },
            };
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPhoto = () => {
    if (state.photo.base64) {
      return `data:image/${state.photo.extension};base64,${state.photo.base64}`;
    } else if (state.photo.url !== "") {
      return `../images/student/${state.photo.url}?${Date.now()}`;
    } else {
      return "./../images/student/template.jpg";
    }
  };

  const deletePhoto = () => {
    setstate((prev) => {
      return {
        ...prev,
        photo: {
          url: "",
          base64: undefined,
          extension: undefined,
        },
      };
    });
    ipcRenderer.send(
      "delete_photo",
      oldstudent ? oldstudent.studentId : state.studentId
    );
  };

  return (
    <div className="add-student-container">
      <div className="photo-sec">
        <Button color="#EF233C" onClick={deletePhoto}>
          <svg
            style={{ width: 30, height: 30 }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5198 8.18688L9.62666 8.27915L11.9987 10.6519L14.3702 8.28175C14.7423 7.90964 15.3456 7.90964 15.7177 8.28175C16.056 8.62002 16.0868 9.14937 15.81 9.52239L15.7177 9.62926L13.3467 11.9999L15.7197 14.3735C16.0918 14.7456 16.0917 15.3489 15.7196 15.721C15.3813 16.0592 14.8519 16.0899 14.4789 15.8131L14.3721 15.7209L12 13.3465L9.62977 15.7172C9.25766 16.0893 8.65436 16.0893 8.28225 15.7172C7.94398 15.379 7.91323 14.8496 8.19 14.4766L8.28225 14.3697L10.6521 11.9986L8.27901 9.62652C7.90694 9.25438 7.907 8.65108 8.27915 8.27901C8.61746 7.94077 9.14681 7.91007 9.5198 8.18688Z"
              fill="#EF233C"
            />
          </svg>
        </Button>
        <div className="photo">
          <img src={getPhoto()} />
        </div>
        <Button color="#642CEA" onClick={uploadPhoto}>
          <svg
            style={{ width: 30, height: 30 }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4119 7C14.0039 7.00413 14.4703 7.31172 14.7408 7.84445C14.7796 7.92045 14.8259 8.0139 14.8815 8.12873L15.2676 8.94026C15.2887 8.98497 15.3334 9.01327 15.3945 9.01342L15.5214 9.01688C16.9079 9.08934 18 10.2353 18 11.6277V15.1856C18 16.6292 16.8281 17.8 15.3828 17.8H8.6178C7.17197 17.8 6 16.6293 6 15.1856V11.6277C6 10.1836 7.17178 9.01327 8.5891 9.01418L8.634 9.01224C8.6768 9.00674 8.71445 8.97952 8.73286 8.94065L9.02759 8.31862L9.25892 7.84505C9.53072 7.31136 9.99633 7.00413 10.5881 7H13.4119ZM13.4088 7.89903H10.5943C10.35 7.90073 10.1848 8.00969 10.0612 8.25257C10.025 8.32356 9.98083 8.4132 9.92689 8.52469L9.54656 9.32482C9.3965 9.6416 9.09513 9.8595 8.72005 9.90671L8.6178 9.91232C7.6688 9.91232 6.9 10.6802 6.9 11.6277V15.1856C6.9 16.1327 7.66903 16.9009 8.6178 16.9009H15.3828C16.331 16.9009 17.1 16.1327 17.1 15.1856V11.6277C17.1 10.7142 16.3834 9.96221 15.4862 9.91517L15.2918 9.9083C14.9308 9.87634 14.6109 9.65584 14.4539 9.32443L14.0347 8.44506L13.9387 8.25221C13.8156 8.00982 13.6502 7.90074 13.4088 7.89903ZM12.0027 10.8369L12.1238 10.8401C13.3679 10.9049 14.3593 11.9388 14.3572 13.1986C14.3549 14.4945 13.2978 15.5512 12.0012 15.5527C10.7024 15.5535 9.64222 14.4924 9.64298 13.1973C9.63251 11.9065 10.6999 10.8354 12.0027 10.8369ZM12.0016 11.736L11.906 11.739C11.1468 11.7884 10.5368 12.4313 10.543 13.1939C10.5425 13.9964 11.1997 14.6541 12.0004 14.6537C12.8005 14.6528 13.4558 13.9977 13.4572 13.197C13.4585 12.3931 12.8044 11.7369 12.0016 11.736ZM15.4227 10.7667C15.472 10.8153 15.5136 10.8738 15.5366 10.9232L15.5503 10.9582C15.5834 11.0327 15.6001 11.1136 15.6001 11.1953C15.6001 11.3522 15.5388 11.4973 15.425 11.618C15.3266 11.717 15.1975 11.7778 15.0596 11.7915L15.0001 11.7944L14.9416 11.7914C14.8837 11.7855 14.8264 11.7704 14.7623 11.7446C14.6909 11.713 14.6292 11.6727 14.5695 11.6121C14.4622 11.4981 14.4001 11.3491 14.4001 11.1953C14.4001 11.1136 14.4168 11.0327 14.4495 10.9594C14.4822 10.8851 14.521 10.8224 14.591 10.7542C14.6443 10.7079 14.6989 10.6705 14.7736 10.6377C14.9949 10.5501 15.2582 10.6024 15.4227 10.7667Z"
              fill="#642CEA"
            />
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
          <input
            name="name"
            type="text"
            className={error.name.error ? "error" : ""}
            onChange={inputHandler}
            value={state.name}
          />
          <p className="error-message name">
            {error.name.message ? error.name.message : ""}
          </p>
          <input
            name="studentId"
            type="number"
            className={error.studentId.error ? "error" : ""}
            onChange={inputHandler}
            value={state.studentId ? state.studentId : ""}
          />
          <p className="error-message studentId">
            {error.studentId.message ? error.studentId.message : ""}
          </p>

          <input
            name="gpa"
            type="number"
            onChange={inputHandler}
            value={state.gpa ? state.gpa : ""}
          />
          <input
            name="field"
            type="text"
            className={error.field.error ? "error" : ""}
            onChange={inputHandler}
            value={state.field}
          />
          <p className="error-message field">
            {error.field.message ? error.field.message : ""}
          </p>
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
