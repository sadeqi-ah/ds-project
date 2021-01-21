import React, { useEffect } from "react";
import Back from "_/components/Back";
import EditableStudent from "_/components/EditableStudent";
import { Link, RouteComponentProps } from "react-router-dom";

interface matchParams {
  studentId: string;
}

const EditStudent: React.FC<RouteComponentProps<matchParams>> = ({ match }) => {
  const {
    params: { studentId },
  } = match;

  return (
    <>
      <Back />
      <EditableStudent studentId={studentId} />
    </>
  );
};

export default EditStudent;
