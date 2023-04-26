import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
  const { signIn, signInWithGgl } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.reset();
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire("Good job!", "Sign Up successful!", "success");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
  const handleSignInWithGoogle = () => {
    signInWithGgl()
      .then((result) => {
        console.log(result.user);
        Swal.fire("Good job!", "Sign Up successful!", "success");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-[#FFE0B3] bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="text-center lg:text-left">
                <h1 className="text-xl font-thin text-center">
                  Please Sign in
                </h1>
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
                  <Link
                    to="/register"
                    className="text-red-400 label-text-alt mt-3 link link-hover"
                  >
                    New in Ema-JHon? Click here.
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="separator mt-5">
              <hr />
              <p className="or">or</p>
              <hr />
            </div>
            <button
              onClick={handleSignInWithGoogle}
              className="btn btn-outline flex items-center justify-center gap-2 mt-4"
            >
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

export default Login;
