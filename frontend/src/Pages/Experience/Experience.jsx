import { ArrowRight } from "lucide-react";
import React from "react";

const Experience = () => {
  return (
    <div>
      <section className="bg-[#ccd5ae]">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-center text-2xl lg:text-4xl font-bold leading-tight text-[#003135] ">
              Experience Details
            </h2>

            {/* FROM START HERE  */}

            <form className="mt-8">
              <div className="space-y-5">
                {/* COMPANY  */}

                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    Company
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                      type="text"
                      id="company"

                      //   value={formState.userName}
                      //   onChange={handleChange}
                    ></input>
                  </div>
                </div>

                {/* POSITION */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    Position
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                      type="text"
                      id="position"

                      //   value={formState.userName}
                      //   onChange={handleChange}
                    ></input>
                  </div>
                </div>

                {/* WORK DESCRIPTION  */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    About Work
                  </label>
                  <div className="mt-2">
                    <textarea
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                      type="text"
                      id="description"
                      spellCheck="true"

                      //   value={formState.userName}
                      //   onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                {/* START  */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    Start Date
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                      type="text"
                      id="startDate"
                      placeholder="jan-2023"
                      //   value={formState.userName}
                      //   onChange={handleChange}
                    ></input>
                  </div>
                </div>

                {/* END DATE  */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    End Date
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                      type="text"
                      id="endDate"
                      placeholder="jan-2024"
                      //   value={formState.userName}
                      //   onChange={handleChange}
                    ></input>
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

export default Experience;
