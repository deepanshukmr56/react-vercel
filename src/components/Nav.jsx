import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  
  return (
    <>
      <nav className="flex justify-between text-white px-8 text-[30px] py-3 bg-teal-900 items-center">
        <h1>Khao Piyo</h1>
        <div className="flex gap-x-8 text-lg">
          <Link to={"/cart"}>Cart</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
