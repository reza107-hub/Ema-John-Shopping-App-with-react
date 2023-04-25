import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-[#FFE0B3] bg-base-100">
          <div className="card-body">
            <div className="text-center lg:text-left">
              <h1 className="text-xl font-thin text-center">Sign Up</h1>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <div className="separator mt-5">
              <hr />
              <p className="or">or</p>
              <hr />
            </div>
            <button className="btn btn-outline flex items-center justify-center gap-2 mt-4">
              <img
                className="h-7"
                src="https://i.ibb.co/wJj1Q4r/Untitled.png"
                alt=""
              />
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
