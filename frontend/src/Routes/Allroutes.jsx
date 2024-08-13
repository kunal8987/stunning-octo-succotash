import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Signup/Register";
import Home from "../Pages/Landing/Landing";
import User from "../Pages/UserDetails/User";
import Contact from "../Pages/Contacts/Contact";
import Education from "../Pages/Education/Education";
import Experience from "../Pages/Experience/Experience";
const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/api/google/routes/resumo/login" element={<Login />} />
        <Route
          path="/api/google/routes/resumo/register"
          element={<Register />}
        />
        <Route path="/api/routes/resumo/user-profile" element={<User />} />
        <Route path="/api/routes/resumo/contact-details" element={<Contact />} />
        <Route path="/api/routes/resumo/education-details" element={<Education />} />
        <Route path="/api/routes/resumo/experience-details" element={<Experience />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Allroutes;
