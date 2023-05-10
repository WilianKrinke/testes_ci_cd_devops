import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ListPage from "../pages/ListPage/index.jsx";
import CreatePage from '../pages/CreatePage/index.jsx'
import EditPage from '../pages/EditPage/index.jsx'

const Index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={CreatePage} />
          <Route exact path="/list-page" Component={ListPage} />
          <Route exact path="/edit-page" Component={EditPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Index;
