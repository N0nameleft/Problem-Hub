import React from 'react';
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex bg-phDarkgrey justify-center items-center min-h-screen">
        <div className="w-full max-w-md">
          <div className="bg-phGreen font-manjari text-phLinen text-center text-2xl py-4  border-b-2 border-black rounded-t-lg">
            LOGIN
          </div>
          <div className="bg-phDarkergrey text-white p-4 rounded-b-lg">
            <form action="your-login-action.php" method="POST">
              <div className="mb-4">
                <input
                  className="bg-phDarkgrey rounded-lg w-full py-2 px-3 text-white text-center"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="bg-phDarkgrey rounded-lg w-full py-2 px-3 text-white text-center"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="mb-4 flex items-center justify-center">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="mr-2"
                />
                <label className="text-phLinen" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <div className="mb-4 flex items-center justify-center">
                <button
                  className="bg-phDarkgrey text-phLinen py-2 px-4 rounded-lg hover:bg-gray-600 cursor-pointer"
                  type="submit"
                >
                  Login
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
