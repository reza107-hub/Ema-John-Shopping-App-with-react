import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-[#1C2B35;] text-[#FFFFFF]">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          <img
            src="https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/images/Logo.svg"
            alt=""
          />
        </a>
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
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
