import React from "react";
import { Link } from "react-router-dom";

const Navbutton = () => {
  return (
    <>
      <div >
        <Link to={'/api/google/routes/resumo/register'}>
        <button
          type="button"
          className="rounded-md p-2 text-lg font-semibold text-[#e9edc9]  bg-[#e63946] "
        >
          Sign In
        </button>
        </Link>
       <span className="p-2"></span>
       <Link to={'/api/google/routes/resumo/login'}>
        <button
          type="button"
          className="rounded-md  text-lg p-2  font-semibold bg-[#e63946] text-[#e9edc9]  "
        >
          Log In
        </button>
        </Link>
      </div>
    </>
  );
};

export default Navbutton;
