import React from "react";
import { Route, Routes } from "react-router-dom";
import DisplayUsers2 from "../Display/DisplayUser";
import DisplayUsers from "../Display/DisplayUser";
import DisplayMissiles from "../Display/DisplayMissiles";
import DisplayOrganizationMissiles from "../Display/DisplayOrganization";
// import Users from "../User/Users";
// import NewUser from "../User/NewUser";
// import ErrorPage from "../Pages/ErrorPage";
// import Edit2 from "../User/Edit2";

const AppRouter = () => {
  return (  
    <>
      <Routes>
      <Route path="/users" element={<DisplayUsers />} />
      <Route path="/missiles" element={<DisplayMissiles />} />
      <Route path="/organization" element={<DisplayOrganizationMissiles />} />

        
      </Routes>
    </>
  );
};

export default AppRouter;
