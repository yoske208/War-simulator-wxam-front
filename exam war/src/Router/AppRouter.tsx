import React from "react";
import { Route, Routes } from "react-router-dom";
import DisplayUsers2 from "../Display/DisplayUser";
import DisplayUsers from "../Display/DisplayUser";
import DisplayMissiles from "../Display/DisplayMissiles";
import DisplayOrganizationMissiles from "../Display/DisplayOrganization";
import NewUser from "../NewUser/NewUser";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
// import Users from "../User/Users";
// import NewUser from "../User/NewUser";
// import ErrorPage from "../Pages/ErrorPage";
// import Edit2 from "../User/Edit2";

const AppRouter = () => {
  return (  
    <>
      <Routes>
      <Route path="/users" element={<DisplayUsers />} />
      <Route path="/users/add" element={<NewUser />} />
      <Route path="/login/missiles" element={<DisplayMissiles />} />
      <Route path="/organization" element={<DisplayOrganizationMissiles />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<Login />} />


        
      </Routes>
    </>
  );
};

export default AppRouter;
