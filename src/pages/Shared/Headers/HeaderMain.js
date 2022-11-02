import React from "react";
import logo from "../../../assets/logo.svg";
import { FaSearch } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start sm:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-32"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Services</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center ">
          <button className=" hidden sm:block">
            <img src={logo} className="max-w-none w-16" alt="" />
          </button>

          <div className="hidden sm:block">
            <ul className="flex gap-4 ml-36">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Services</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end ml-4 w-full">
          <BsHandbag />
          <button className="btn btn-ghost btn-circle">
            <FaSearch />
          </button>
          <button className="btn btn-ghost text-orange-500 normal-case border border-orange-500">
            Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
