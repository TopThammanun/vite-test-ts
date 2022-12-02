import reactLogo from "./assets/react.svg";
import Table_post from "../component/Table_post";
import Card_post from "../component/Card_post";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState, Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Table_post />
      <Card_post />
    </Fragment>
  );
}

export default App;
