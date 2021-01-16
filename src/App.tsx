import React from "react";
import { render } from "react-dom";

import "./styles/global.scss";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Student from "./pages/Student";
import Layout from "./components/Layout";
import Titlebar from "./components/Titlebar";

const mainElement = document.createElement("div");
mainElement.setAttribute("id", "root");
document.body.appendChild(mainElement);

const App = () => {
  return (
    <Layout>
      <Titlebar />
      <HashRouter>
        <Route path="/" exact component={Home} />
        <Route path="/student" exact component={Student} />
      </HashRouter>
    </Layout>
  );
};

render(<App />, mainElement);
