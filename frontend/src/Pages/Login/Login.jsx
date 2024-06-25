import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const [fromState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormState({ ...fromState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fromState.email === "" || fromState.password === "") {
      Swal.fire({
        title: "Validation Failed",
        text: "Email And Password Are Required",
        icon: "warning",
        timer: 2000,
      });
    } else if (fromState.password.length <= 8) {
      Swal.fire({
        title: "Validation Failed",
        text: "Password Must Have 8 Characters Or More",
        icon: "warning",
        timer: 2000,
      });
    }
    console.log(fromState);
  };
  return (
    <section className="bg-[#ccd5ae]">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-2xl font-bold leading-tight text-[#003135]">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-md font-bold text-[#780000] hover:text-[#003135] ">
            Don&apos;t have an account?{" "}
            <Link
              to={"/api/google/routes/resumo/register"}
              href="#"
              title=""
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Create a free account
            </Link>
          </p>

          {/* FORM START FORM HERE */}

          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                {/* EMAIL FIELD  */}

                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700"
                    type="email"
                    value={fromState.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Email"
                  ></input>
                </div>
              </div>

              {/* PASSWORD FIELD  */}

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Password{" "}
                  </label>

                  {/* FORGET PASSWORD LINK  */}

                  <Link
                    href="#"
                    title=""
                    className="text-sm font-semibold text-black hover:underline"
                  >
                    {" "}
                    Forgot password?{" "}
                  </Link>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700"
                    type="password"
                    onChange={handleChange}
                    value={fromState.password}
                    name="password"
                    placeholder="Password"
                  ></input>
                </div>
              </div>

              {/* SUBMIT BUTTON  */}

              <div>
                <button className="inline-flex w-full items-center justify-center rounded-md bg-[#023047] px-3.5 py-2.5 font-semibold leading-7 text-[#ffb703] ">
                  Get started <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
