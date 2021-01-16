import React from "react";
import { render } from "react-dom";
import Layout from "./components/Layout";
import Titlebar from "./components/Titlebar";
import "./styles/global.scss";

const mainElement = document.createElement("div");
mainElement.setAttribute("id", "root");
document.body.appendChild(mainElement);

const App = () => {
  return (
    <Layout>
      <Titlebar />
    </Layout>
  );
};

render(<App />, mainElement);
