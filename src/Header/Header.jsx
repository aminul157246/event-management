import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";


const Header = () => {


  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
    .then(() => console.log('user logged out successfully'))
    .catch(error => console.log(error))
  }
  

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/login"}>Login </NavLink>
              </li>
              <li>
                <NavLink to={"/register"}>Register</NavLink>
              </li>
              <li>
                <NavLink to={"/familyReunions"}>Family Reunions</NavLink>
              </li>
              <li>
                <NavLink to={"/holidayParty"}>Holiday Party</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Social Events</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink  to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Login </NavLink>
            </li>
            <li>
              <NavLink to={"/register"}>Register</NavLink>
            </li>
            <li>
                <NavLink to={"/familyReunions"}>Family Reunions</NavLink>
              </li>
              <li>
                <NavLink to={"/holidayParty"}>Holiday Party</NavLink>
              </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? 
            <>
              <p>{user.email} </p>
              <Link>
                <button onClick={handleLogOut} className="btn">
                  Log out
                </button>
              </Link>
            </>
           : 
            <Link to="/login">Login</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
