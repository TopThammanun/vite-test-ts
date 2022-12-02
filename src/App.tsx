import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Table_post from "./component/Table_post";
import Card_post from "./component/Card_post";

function App() {
  return (
    <Fragment>
      <Table_post />
      <Card_post />
    </Fragment>
  );
}

export default App;
