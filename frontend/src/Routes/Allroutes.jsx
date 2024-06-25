import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Signup/Register";
import Landing from "../Pages/Landing/Landing";
const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/api/google/routes/resumo/login" element={<Login />} />
        <Route
          path="/api/google/routes/resumo/register"
          element={<Register />}
        />
      </Routes>

      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
};

export default Allroutes;
