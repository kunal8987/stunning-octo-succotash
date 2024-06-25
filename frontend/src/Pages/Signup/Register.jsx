import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const initialState = {
  userName: "",
  email: "",
  password: "",
};
const Register = () => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (event) => {
    let { id, value } = event.target;
    setFormState({ ...formState, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      formState.userName === "" ||
      formState.email === "" ||
      formState.password === ""
    ) {
      Swal.fire({
        title: "Validation Failed",
        text: "All Fields Are Required",
        icon: "warning",
        timer: 2000,
      });
    } else if (formState.password.length < 8) {
      Swal.fire({
        title: "Validation Failed",
        text: "Password Must Have 8 Characters Or More",
        icon: "warning",
        timer: 2000,
      });
    }
    console.log(formState);
  };
  return (
    <section className="bg-[#ccd5ae]">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-[#003135] ">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center font-bold text-md text-[#780000] hover:text-[#003135] ">
            Already have an account?{" "}
            <Link
              to={"/api/google/routes/resumo/login"}
              href="#"
              title=""
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>

          {/* FROM START HERE  */}

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              {/* USERNAME FIELD  */}

              <div>
                <label
                  htmlFor="name"
                  className="text-base font-medium text-gray-900"
                >
                  UserName
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                    type="text"
                    placeholder="User Name"
                    id="userName"
                    value={formState.userName}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>

              {/* EMAIL FIELD  */}

              <div>
                <label
                  htmlFor="email"
                  className="text-base font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700"
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>

              {/* PASSWORD FIELD  */}

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-base font-medium text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700"
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={formState.password}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>

              {/* SUBMIT BUTTON  */}

              <div>
                <button className="inline-flex w-full items-center justify-center rounded-md bg-[#023047] px-3.5 py-2.5 font-semibold leading-7 text-[#ffb703] ">
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
