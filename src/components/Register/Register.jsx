import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    e.target.reset();
    console.log(email, password, confirmPassword);
    if (password !== confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password didn't match!",
      });
    } else if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain 6 character",
      });
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire("Good job!", "Sign Up successful!", "success");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-[#FFE0B3] bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
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
                name="confirmPassword"
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
            {/* <div className="separator mt-5">
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
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
