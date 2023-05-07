import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ListPage from "../pages/ListPage/index.jsx";
import CreatePage from '../pages/CreatePage/index.jsx'

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={CreatePage} />
          <Route exact path="/list-page" Component={ListPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Index;
