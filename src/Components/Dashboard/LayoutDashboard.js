
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdSpaceDashboard } from 'react-icons/md';
import { Navbar } from 'flowbite-react';

const LayoutDashboard = () => {
    return (
        <div>
             
             <div className=''>
            
            <label  htmlFor="dashboard-drawar" className="text-2xl  lg:hidden"><MdSpaceDashboard/></label>
            <div className="drawer drawer-mobile">
  <input id="dashboard-drawar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
  
  <Outlet></Outlet>
  
 
  
  </div> 
  <div className="drawer-side lg:shadow-xl ">
    <label htmlFor="dashboard-drawar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100  text-green-600 text-xl font-semibold lg:border-2 ">
         
     
    <Link to={'/dashboard'}><li><a>Dashboard</a></li></Link>
    <Link to={'/dashboard/userlist'}><li><a>User List</a></li></Link>
    <Link to={'/dashboard/postestore'}><li><a>Post Estore</a></li></Link>
    <Link to={'/dashboard/postplantour'}><li><a>Post PlanTour</a></li></Link>
    <Link to={'/dashboard/cart'}><li><a>Cart</a></li></Link>
    <Link to={'/dashboard/Myorder'}><li><a>My Order</a></li></Link>
    <Link to={'/dashboard/myproduct'}><li><a>My Estore product</a></li></Link>
    <Link to={'/dashboard/mybooking'}><li><a>My Booking</a></li></Link>
    <Link to={'/dashboard/listbooking'}><li><a>All Booking list</a></li></Link>
    
    
      
     

    </ul>
  
  </div>
</div>


        </div>
        </div>
    );
};

export default LayoutDashboard;