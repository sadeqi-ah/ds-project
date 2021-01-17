import React from "react";
import FloatingButton from "_/components/FloatingButton";
import Search from "_/components/Search";
import StudentList from "_/components/StudentList";

function Home() {
  return (
    <>
      <Search />
      <StudentList />
      <FloatingButton />
    </>
  );
}

export default Home;
