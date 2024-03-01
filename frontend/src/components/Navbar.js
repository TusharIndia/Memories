import React from "react";
import { Link,useNavigate } from "react-router-dom";

const Navbar = () => {
  let nav = useNavigate();
  const handlelogout = () => {
    localStorage.removeItem('token');
    nav('/login');
  }
  const handlclk = () =>{
    // document.getElementById('navbar-default').classList.remove('hidden');
    console.log(document.getElementById('navbar-default').classList.toggle('hidden'))
  }

  return (
    <div>
      <nav className="border-gray-200 bg-[#F2F2F2]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
              Memories
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={handlclk}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto text-center" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-[#F2F2F2] border-gray-700">
            {/* <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"> */}
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-black rounded md:bg-transparent  md:p-0 hover:text-blue-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0  "
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/publicpost"
                  className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0  "
                >
                  Public Posts
                </Link>
              </li>
              <li>
                <Link
                  to="/post"
                  className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0  "
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0  "
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/addpost"
                  className="block py-2 px-3 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-blue-700 md:p-0  "
                >
                  Addpost
                </Link>
              </li>
              
              <li className="space-x-4">
            {!localStorage.getItem('token')?<form className="mx-3">
            <Link className="text-black mx-2" to="/login">
              Login
            </Link>
            <Link className="text-black btn btn-outline-primary" to="/signup">
              Signup
            </Link>
          </form>:<form className="mx-3">
            <button className="text-black btn btn-outline-primary mx-2" onClick={handlelogout}>
              Logout
            </button></form>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
