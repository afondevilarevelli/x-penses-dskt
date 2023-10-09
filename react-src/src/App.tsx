import React, { useEffect } from "react";
import "./styles/global.css";
import { filesystem } from "@neutralinojs/lib";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Routing from "./Routing";
import Layout from "./layout/Layout";
import { BrowserRouter } from "react-router-dom";

function App() {
  // Log current directory or error after component is mounted
  useEffect(() => {
    filesystem
      .readDirectory("./")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routing />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
