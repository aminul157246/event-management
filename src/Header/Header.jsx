import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext } from "react";
import logo from '../../src/assets/images/logo.png'


const Header = () => {

  const { user, logOut } = useContext(AuthContext);

  const navItems = <>

    <li>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
        style={{ background: 'none' }} to={"/"}>Home</NavLink>
    </li>
    
    <li>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
        style={{ background: 'none' }} to={"/event"}>Event</NavLink>
    </li>
    
    
    <li>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
        style={{ background: 'none' }} to={"/about"}>About</NavLink>
    </li>
    <li>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
        to={'/service'}
        style={{ background: 'none' }}>Service</NavLink>
    </li>
    <li>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
        to={'/contact'}
        style={{ background: 'none' }}>Contact Us</NavLink>
    </li>

    <li>
      <NavLink className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "font-bold" : ""}
        style={{ background: 'none' }} to={"/login"}>Login </NavLink>
    </li>

  </>

  return (
    <div>
      <div className="navbar  mx-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="  lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3  p-2  rounded-3xl w-52"
            >
              {navItems}
            </ul>
          </div>
          <a className="normal-case text-xl"><img src={logo} alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt='' />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <NavLink to={'/dashboard/userProfile'}>dashboard</NavLink>
                </li>
                <li>
                  <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                </li>
                <li>
                  <button className="btn btn-sm  btn-ghost"
                    onClick={logOut}
                  >Logout</button>

                </li>
              </ul>
            </div>
              :
              <Link to='/login'>
                <button className="btn btn-sm  btn-ghost">Login</button>
              </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
