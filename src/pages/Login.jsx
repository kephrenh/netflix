import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="netflix_bg.jpg"
          alt="/"
        />
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 "></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Log In</h1>
              <form className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 font-bold">Sign In</button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <span className="py-5 text-gray-600">
                  New to Netflix?
                  <span className="text-white">
                    {" "}
                    <Link to="/signup">Sign Up</Link>
                  </span>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
