import React from "react";

import "./styles/global.scss";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Student from "./pages/Student";
import Layout from "./components/Layout";
import Titlebar from "./components/Titlebar";
import AddStudent from "./pages/AddStudent";

export const App: React.FC = () => {
  return (
    <Layout>
      <Titlebar />
      <HashRouter>
        <Route path="/" exact component={Home} />
        <Route path="/student/:studentId" exact component={Student} />
        <Route path="/add-student" exact component={AddStudent} />
      </HashRouter>
    </Layout>
  );
};
