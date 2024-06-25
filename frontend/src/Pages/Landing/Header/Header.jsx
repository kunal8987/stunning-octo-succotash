import React from "react";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <>
      <section className="relative bg-[url(https://c4.wallpaperflare.com/wallpaper/848/913/162/minimalism-abstract-digital-art-lines-wallpaper-thumb.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-orange-500 sm:text-5xl">
             Land Your Dream Job With Already Made
              <strong className="block font-extrabold text-rose-400">
                {" "}
                Eye Catchy Resume.{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-yellow-200 sm:text-xl/relaxed">
              Create Awesome Resume With One Of Our Template In Just Few Second
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                href="#"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Create Resume For Free
              </Link>

              <Link
                href="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
