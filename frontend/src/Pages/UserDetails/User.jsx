import React from "react";
import { ArrowRight } from "lucide-react";

const User = () => {
  return (
    <div>
      <section className="bg-[#ccd5ae]">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-center text-2xl lg:text-4xl font-bold leading-tight text-[#003135] ">
              User Details
            </h2>

            {/* FROM START HERE  */}

            <form className="mt-8">
              <div className="space-y-5">
                {/* FIRST NAME FIELD  */}

                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                      type="text"
                      id="firstName"
                      //   value={formState.userName}
                      //   onChange={handleChange}
                    ></input>
                  </div>
                </div>

                {/* LAST NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                      type="text"
                      id="lastName"
                      //   value={formState.userName}
                      //   onChange={handleChange}
                    ></input>
                  </div>
                </div>

                {/* CITY  */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                      type="text"
                      id="city"
                      //   value={formState.userName}
                      //   onChange={handleChange}
                    ></input>
                  </div>
                </div>

                {/* STATE  */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    State
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                      type="text"
                      id="state"
                      //   value={formState.userName}
                      //   onChange={handleChange}
                    ></input>
                  </div>
                </div>

                {/* PIN CODE  */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    Zip Code
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                      type="text"
                      id="pinCode"
                      //   value={formState.userName}
                      //   onChange={handleChange}
                    ></input>
                  </div>
                </div>

                {/* ABOUT  */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                      type="text"
                      id="about"
                      //   value={formState.userName}
                      //   onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                {/* SUBMIT BUTTON  */}

                <div>
                  <button className="inline-flex w-full items-center justify-center rounded-md bg-[#023047] px-3.5 py-2.5 font-semibold leading-7 text-[#ffb703] ">
                    Submit <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default User;
