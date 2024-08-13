import { ArrowRight } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="bg-[#ccd5ae]">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-center text-2xl lg:text-4xl font-bold leading-tight text-[#003135] ">
              Contact Details
            </h2>

            {/* FROM START HERE  */}

            <form className="mt-8">
              <div className="space-y-5">
                {/* PHONE  */}

                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    Phone
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                      type="text"
                      id="phone"
                      placeholder="772845691"
                      //   value={formState.userName}
                      //   onChange={handleChange}
                    ></input>
                  </div>
                </div>

                {/* X */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    X
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                      type="link"
                      id="twitter"
                      placeholder="Provide URL"
                      //   value={formState.userName}
                      //   onChange={handleChange}
                    ></input>
                  </div>
                </div>

                {/* LINKED IN  */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    Linked In
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                      type="link"
                      id="linkedIn"
                       placeholder="Provide URL"
                      //   value={formState.userName}
                      //   onChange={handleChange}
                    ></input>
                  </div>
                </div>

                {/* GITHUB  */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    Github
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                      type="link"
                      id="github"
                       placeholder="Provide URL"
                      //   value={formState.userName}
                      //   onChange={handleChange}
                    ></input>
                  </div>
                </div>

                {/* PORTFOLIO  */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    Portfolio
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                      type="link"
                      id="portfolio"
                       placeholder="Provide URL"
                      //   value={formState.userName}
                      //   onChange={handleChange}
                    ></input>
                  </div>
                </div>

                {/* EMAIL  */}
                <div>
                  <label
                    htmlFor="name"
                    className="text-base font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-500 bg-transparent px-3 py-2 text-sm placeholder:text-gray-700 "
                      type="email"
                      id="email"
                       placeholder="Email"
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

export default Contact;
