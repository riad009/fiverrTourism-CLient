import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './Auth/AuthProvider';
import { FaAtlassian } from 'react-icons/fa';
import logo from '../assets/img/png-transparent-green-car-on-seashore-art-beach-logo-summer-travel-element-leaf-car-seaside-resort.png'


const Header = () => {
  const {logout}=useContext(AuthContext)
  const {user,loading}=useContext(AuthContext)
  const handleLogout=(auth)=>{

    var answer = window.confirm("Log out?");
if (answer) {
  logout(auth)
  navigate("/login")

}
else {
    //some code
}
   

  }
  const navigate=useNavigate()
 


    return (
      <div className=" flex justify-between navbar bg-base-100 text-green-600 shadow-xl font-semibold">
      <div className="">
        {/* navbar small devices */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           
            {/* <li> <Link to={'/'}>Home</Link></li> */}
            <li><Link to={'/plantour'}>Plan A Tour</Link> </li>
            <li><Link to={'/visitplaces'}>Visit Places</Link></li>
            <li><Link to={'/estores'}>E-Store</Link> </li>
            <Link  to={'/contact'}>Contact</Link> 
          <Link to={'/about'}>About Us</Link> 
            <li><Link to={'/dashboard'}>Dashboard</Link> </li>
            {

user?.email ?
<> 
    
<Link className='mx-8' to={'/dashboard'}>Dashboard</Link>
 <button onClick={handleLogout} className='btn btn-outline btn-success'>logout </button>
 </>
:
<>

<Link to={'/login'} className='btn btn-outline btn-success'>Login </Link>
</>

     }
           
               </ul> 
        
        </div>
        <a className="btn btn-ghost normal-case text-xl text-green-400"> <FaAtlassian/> </a>
      </div>
        {/* navbar large devices */}
      <div className=" justify-between mr-6 hidden lg:flex ">
          
       
          <Link className='mx-8' to={'/plantour'}>Plan A Tour</Link> 
          <Link className='mx-8' to={'/visitplaces'}>Visit Places</Link>
          <Link className='mx-8' to={'/estores'}>E-Store</Link> 
          <Link className='mx-8' to={'/contact'}>Contact</Link> 
          <Link className='mx-8' to={'/about'}>About Us</Link> 
          
         
          {

user?.email ?
<> 
    
<Link className='mx-8' to={'/dashboard'}>Dashboard</Link>
 <button onClick={handleLogout} className='btn btn-outline btn-success'>logout </button>
 </>
:
<>

<Link to={'/login'} className='btn btn-outline btn-success'>Login </Link>
</>

     }
          <div className="mx-8 dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <Link to={'/getcarddetails'} className="btn btn-primary btn-block">View cart</Link>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>

    );
};

export default Header;