import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-[#1C2B35;] text-[#FFFFFF]">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <img src="Logo.svg" alt="" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Order</a>
            </li>
            <li>
              <a>Order Review</a>
            </li>
            <li>
              <a>Manage Inventory</a>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
