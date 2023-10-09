import React, { useEffect } from "react";
import "./styles/global.css";
import { filesystem } from "@neutralinojs/lib";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Routes from "./Routes";
import Layout from "./layout/Layout";

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
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;
