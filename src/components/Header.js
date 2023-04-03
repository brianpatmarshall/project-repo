import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { auth, setAuth } = useAuth();
  let navigate = useNavigate();

  const logout = () => {
    setAuth({});
    navigate("/login", { replace: true });
  };

  return (
    <div className="navbar bg-primary text-primary-content">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Accenture Projects{" "}
        </Link>
        <span className="border-2 border-amber-500 p-1">
          {auth?.username
            ? `Logged in as ${auth?.username} - ${auth.role}`
            : "Not logged in"}
        </span>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          {!auth?.username && (
            <li className="mx-1">
              <Link to="/login">Login</Link>
            </li>
          )}
          {!auth?.username && (
            <li className="mx-1">
              <Link to="/register">Register</Link>
            </li>
          )}
          {!auth?.username && (
            <li className="mx-1">
              <Link to="/cars">Projects</Link>
            </li>
          )}
          {auth?.username && (
            <li className="mx-1">
              <button className=" btn-warning">
                Logout <span className="font-semibold">{auth?.username}</span>
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Header;
