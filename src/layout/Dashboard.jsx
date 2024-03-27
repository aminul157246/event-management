import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='flex'>
            <div className='w-1/4 bg-red-200'>
            <li className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold" : ""}
                                style={{ background: 'none' }} to={'/dashboard/userProfile'}> Profile </NavLink>
                        </li>

                        <li className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold" : ""}
                                style={{ background: 'none' }} to={'/dashboard/manageItem'}>  Manage Item </NavLink>
                        </li>

                        <li className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold" : ""}
                                style={{ background: 'none' }} to={'/dashboard/addItem'}> Add Item </NavLink>
                        </li>


                        
<div className="divider">
    </div>
<li className="transition-transform duration-300 ease-in-out transform hover:translate-x-1">
                            <NavLink className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "font-bold" : ""}
                                style={{ background: 'none' }} to={'/'}> Home </NavLink>
                        </li>  
            </div>




<div className='w-3/4 bg-blue-100'>
    <Outlet/>
</div>

        </div>
    );
};

export default Dashboard;