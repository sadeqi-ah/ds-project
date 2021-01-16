import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import ScrollLayout from "./ScrollLayout";
import Student from "./Student";

const StudentList: React.FC = () => {
  return (
    <ScrollLayout width={"100%"} height={"calc(100vh - 100px)"}>
      <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
      <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
      <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
      <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
      <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
      <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
      <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
      <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
      <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
      <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
      <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
    </ScrollLayout>
    // <Scrollbars style={{ width: "100%", height: "calc(100vh - 100px)" }}>
    //   <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
    //   <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
    //   <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
    //   <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
    //   <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
    //   <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
    //   <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
    //   <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
    //   <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
    //   <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
    //   <Student name="Matin Habibi" studentId="980122681001" photo="1.jpg" />
    // </Scrollbars>
  );
};

export default StudentList;
