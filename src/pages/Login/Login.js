import React from "react";
import logoLogin from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import HeaderForm from "../Shared/Headers/HeaderForm";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { user, loginUser } = useContext(AuthContext);
  const handleForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    loginUser(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        setErrorMessage("");
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage(errorMsg);
      });
    event.target.reset();
  };
  return (
    <div>
      <HeaderForm></HeaderForm>
      <div className="w-10/12 mx-auto my-8 ">
        <div className="flex items-center justify-center">
          <div className="basis-2/5 hidden md:block">
            <img className="w-4/5" src={logoLogin} alt="" />
          </div>
          <div className="basis-3/5">
            <form onSubmit={handleForm}>
              <div className="w-full shadow-lg bg-base-100 border rounded-md">
                <div className="card-body">
                  <h1 className="mb-8 text-4xl font-semibold">Login</h1>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Your password"
                      className="input input-bordered"
                    />
                  </div>
                  {/* error message */}
                  {errorMessage && (
                    <p className="text-xs text-red-500 mt-3">{errorMessage}</p>
                  )}
                  <div className="form-control mt-6">
                    <button className=" py-4 bg-[#FF3811] text-white font-semibold rounded-md">
                      Login
                    </button>
                  </div>
                  <div>
                    <p className="font-medium my-7">Or Login With</p>
                    <div className="flex justify-center gap-4">
                      <div className="bg-[#F5F5F8] p-4 rounded-full">
                        <FaFacebookF className="text-[#3B5998] text-3xl" />
                      </div>
                      <div className="bg-[#F5F5F8] p-4 rounded-full">
                        <FaLinkedinIn className=" text-[#0A66C2] text-3xl" />
                      </div>
                      <div className="bg-[#F5F5F8] p-4 rounded-full">
                        <FcGoogle className="bg-[#F5F5F8] text-3xl" />
                      </div>
                    </div>
                  </div>
                  <label className="label">
                    <p className="text-xs text-[#737373] font-semibold mt-6 ">
                      Don't have an account?{" "}
                      <Link to="/register" className="text-[#FF3811]">
                        Register
                      </Link>
                    </p>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
