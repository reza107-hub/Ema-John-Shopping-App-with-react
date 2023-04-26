import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        Swal.fire("Good job!", "Sign Out successful!", "success");
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}!`,
        });
      });
  };
  return (
    <div className="navbar bg-[#1C2B35;] text-[#FFFFFF]">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            src="https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/images/Logo.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/order">Order Review</Link>
          </li>
          <li>
            <Link to="/inventory">Manage Inventory</Link>
          </li>
          <li>
            {user ? (
              <button onClick={handleLogOut}>Log Out</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
