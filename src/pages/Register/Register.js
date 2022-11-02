import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logoRegister from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Contexts/AuthProvider";
const Register = () => {
  const { user } = useContext(AuthContext);

  const handleForm = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="w-10/12 mx-auto my-8 ">
        <div className="flex items-center justify-center">
          <div className="basis-2/5 hidden md:block">
            <img className="w-4/5" src={logoRegister} alt="" />
          </div>
          <div className="basis-3/5">
            <form onSubmit={handleForm}>
              <div className="w-full shadow-lg bg-base-100 border rounded-md">
                <div className="card-body">
                  <h1 className="mb-8 text-4xl font-semibold">Register</h1>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your password"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className=" py-4 bg-[#FF3811] text-white font-semibold rounded-md">
                      Register
                    </button>
                  </div>
                  <label className="label">
                    <p className="label-text-alt ">
                      Already have an account?{" "}
                      <Link to="/login" className="text-[#FF3811]">
                        Login
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

export default Register;
