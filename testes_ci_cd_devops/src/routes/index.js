import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ListPage from "../pages/ListPage/index.js";

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={ListPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Index;
