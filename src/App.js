import React, { useState } from "react";
import logo from "./images/fb.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform password validation
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
    } else {
      setPasswordError("");
      // Save login data to local storage
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("email", email);
      // Proceed with login logic
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="flex justify-center items-center min-h-screen mx-auto">
        <div className="mx-8 w-1/4">
          <div>
            <img className="w-25 h-25 ml-[-38px]" src={logo} alt="Profile" />
          </div>
          <p className="font-bold text-lg mt-[-15px]">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>
        <div className="flex flex-col rounded-lg ml-12 bg-white p-8 shadow-md">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  className="shadow appearance-none border hover:border-blue-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  className="shadow appearance-none border hover:border-blue-400 rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-600 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </div>

              <div className="mb-2 cursor-pointer text-blue-300 text-center">
                Forgot password?
              </div>
              <hr className="mt-2 mb-3" />
              <div className="flex justify-center">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
