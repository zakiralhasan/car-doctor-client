import React from "react";
import logo from "../../../assets/logo.svg";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const HeaderForm = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
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
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-40"
              >
                <li>
                  <Link to="/">Order</Link>
                </li>
                <li>
                  <Link>Order Review</Link>
                </li>
                <li>
                  <Link>Mange Inventory</Link>
                </li>
              </ul>
            </div>
          </div>
          <button className=" hidden sm:block">
            <img src={logo} className="max-w-none w-16" alt="" />
          </button>

          <div className="navbar-end w-full">
            <div className="hidden sm:block w-full mr-12">
              <ul className="flex gap-6 justify-end">
                <li>
                  <Link to="/">Order</Link>
                </li>
                <li>
                  <Link>Order Review</Link>
                </li>
                <li>
                  <Link>Mange Inventory</Link>
                </li>
              </ul>
            </div>
            {user?.uid ? (
              <button
                onClick={handleLogout}
                className="btn btn-ghost text-orange-500 normal-case border border-orange-500"
              >
                Logout
              </button>
            ) : (
              <button className="btn btn-ghost text-orange-500 normal-case border border-orange-500">
                <Link to="/login">Login</Link>
              </button>
            )}
            <FaUserAlt className="text-2xl mx-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderForm;
